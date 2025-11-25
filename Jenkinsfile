pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'ejjgasoft/vampyr-landing'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
        SONARQUBE_SERVER = 'SonarQubeServer'   
        DEPLOY_SERVER = '74.208.227.171'
        DEPLOY_USER = 'root'
        DEPLOY_PATH = '/home/VAMPYR'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    env.BUILD_TAG = "${env.BUILD_NUMBER}-${env.GIT_COMMIT_SHORT}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    # Usar Node.js del sistema o instalar via nvm si no existe
                    if ! command -v node &> /dev/null; then
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        nvm install 20
                    fi
                    npm ci
                '''
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv(SONARQUBE_SERVER) {
                    withCredentials([string(credentialsId: 'node-token', variable: 'SONAR_TOKEN')]) {
                        sh """
                            docker run --rm \
                                --network host \
                                -e SONAR_HOST_URL=${SONAR_HOST_URL} \
                                -e SONAR_LOGIN=\$SONAR_TOKEN \
                                -v "${WORKSPACE}:/usr/src" \
                                -w /usr/src \
                                sonarsource/sonar-scanner-cli:latest \
                                sonar-scanner \
                                    -Dsonar.projectKey=vampyr-landing \
                                    -Dsonar.sources=src \
                                    -Dsonar.exclusions=**/node_modules/**,**/dist/**,**/dev-dist/**,**/*.test.tsx,**/*.test.ts
                        """
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        // el resto de stages quedan exactamente igual
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${BUILD_TAG}")
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", DOCKER_CREDENTIALS_ID) {
                        docker.image("${DOCKER_IMAGE}:${BUILD_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                sshagent(credentials: ['vps-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_SERVER} '
                            cd ${DEPLOY_PATH} && 
                            docker compose pull landing && 
                            docker compose up -d landing && 
                            docker image prune -f
                        '
                    """
                }
            }
        }
    }

    post {
        always { cleanWs() }
        success { echo "Pipeline ejecutado exitosamente - Build: ${BUILD_TAG}" }
        failure { echo "Pipeline falló - Build: ${BUILD_TAG}" }
    }
}
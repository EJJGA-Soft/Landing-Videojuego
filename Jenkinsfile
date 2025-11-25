pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = 'ejjgasoft/vampyr-landing'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
        SONARQUBE_SERVER = 'SonarQubeServer'
        SONARQUBE_SCANNER = 'SonnarQube'
        DEPLOY_SERVER = '74.208.227.171'
        DEPLOY_USER = 'root'
        DEPLOY_PATH = '/home/VAMPYR'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()
                    env.BUILD_TAG = "${env.BUILD_NUMBER}-${env.GIT_COMMIT_SHORT}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                nodejs('NodeJS') {
                    sh 'npm ci'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool name: env.SONARQUBE_SCANNER, type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv(env.SONARQUBE_SERVER) {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
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

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:${env.BUILD_TAG}")
                    docker.build("${env.DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry("https://${env.DOCKER_REGISTRY}", env.DOCKER_CREDENTIALS_ID) {
                        docker.image("${env.DOCKER_IMAGE}:${env.BUILD_TAG}").push()
                        docker.image("${env.DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                sshagent(credentials: ['vps-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${env.DEPLOY_USER}@${env.DEPLOY_SERVER} '
                            cd ${env.DEPLOY_PATH} && \
                            docker compose pull landing && \
                            docker compose up -d landing && \
                            docker image prune -f
                        '
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo "Pipeline ejecutado exitosamente para Landing - Build: ${env.BUILD_TAG}"
        }
        failure {
            echo "Pipeline falló para Landing - Build: ${env.BUILD_TAG}"
        }
    }
}

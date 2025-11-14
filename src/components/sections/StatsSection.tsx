import React, { useEffect, useState } from 'react';
import { FaUsers, FaSkull, FaTrophy } from 'react-icons/fa';
import SectionHeader from "../shared/SectionHeader";

interface GlobalStats {
  players: {
    total: number;
    linked: number;
    unlinked: number;
  };
  averages: {
    level: string;
    enemiesDefeated: string;
    defeats: string;
    playTime: number;
    itemsUnlocked: string;
    achievements: string;
  };
  totals: {
    enemiesDefeated: number;
    defeats: number;
    playTime: number;
    itemsUnlocked: number;
    achievements: number;
  };
  topPlayers: {
    highestLevel: {
      username: string;
      level: number;
    };
    mostKills: {
      username: string;
      enemiesDefeated: number;
    };
    longestPlayTime: {
      username: string;
      playTime: number;
      playTimeFormatted: string;
    };
    mostAchievements: {
      username: string;
      achievements: number;
    };
  };
  levelDistribution: {
    level1: number;
    level2: number;
    level3: number;
  };
}

export default function StatsSection() {
  const [stats, setStats] = useState<GlobalStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const response = await fetch(`${apiUrl}/api/players/global/stats`);
        
        if (!response.ok) {
          throw new Error('Error al cargar estadísticas');
        }
        
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatPlayTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  if (loading) {
    return (
      <section id="stats" className="scroll-mt-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader 
            title="Estadísticas Globales"
            subtitle="Cargando datos del juego..."
            gradient="redPurple"
          />
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section id="stats" className="py-20 md:py-32 scroll-mt-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader 
            title="Estadísticas Globales"
            subtitle="No se pudieron cargar las estadísticas del juego"
            gradient="redPurple"
          />
          <div className="text-center text-red-400">
            <p>{error || 'Error desconocido'}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stats" className="py-20 md:py-32 scroll-mt-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Estadísticas Globales"
          subtitle="Descubre cómo está jugando la comunidad de cazadores de vampiros"
          gradient="redPurple"
        />

        {/* Players Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard
            icon={<FaUsers className="text-5xl" />}
            title="Total de Jugadores"
            value={stats.players.total}
            subtitle={`${stats.players.linked} vinculados`}
            color="purple"
          />
          <StatCard
            icon={<FaSkull className="text-5xl" />}
            title="Enemigos Eliminados"
            value={stats.totals.enemiesDefeated}
            subtitle={`${stats.averages.enemiesDefeated} por jugador`}
            color="red"
          />
          <StatCard
            icon={<FaTrophy className="text-5xl" />}
            title="Logros Desbloqueados"
            value={stats.totals.achievements}
            subtitle={`${stats.averages.achievements} por jugador`}
            color="purple"
          />
        </div>

        {/* Averages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent mb-8 text-center">
            Promedios del Juego
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AverageStat
              label="Nivel Promedio"
              value={stats.averages.level}
            />
            <AverageStat
              label="Derrotas"
              value={stats.averages.defeats}
            />
            <AverageStat
              label="Tiempo Jugado"
              value={formatPlayTime(stats.averages.playTime)}
            />
            <AverageStat
              label="Ítems Desbloqueados"
              value={stats.averages.itemsUnlocked}
            />
          </div>
        </div>

        {/* Top Players */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent mb-8 text-center">
            Mejores Jugadores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TopPlayerCard
                          title="Nivel Más Alto"
                          player={stats.topPlayers.highestLevel.username}
                          value={`Nivel ${stats.topPlayers.highestLevel.level}`}
                          color="purple" icon={undefined}            />
            <TopPlayerCard
              title="Más Eliminaciones"
              player={stats.topPlayers.mostKills.username}
              value={`${stats.topPlayers.mostKills.enemiesDefeated} enemigos`}
              color="red"
            />
            <TopPlayerCard
              
                          title="Más Tiempo Jugado"
                          player={stats.topPlayers.longestPlayTime.username}
                          value={stats.topPlayers.longestPlayTime.playTimeFormatted}
                          color="purple" icon={undefined}            />
            <TopPlayerCard
              
                          title="Más Logros"
                          player={stats.topPlayers.mostAchievements.username}
                          value={`${stats.topPlayers.mostAchievements.achievements} logros`}
                          color="red" icon={undefined}            />
          </div>
        </div>

        {/* Level Distribution */}
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent mb-8 text-center">
            Distribución de Niveles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LevelDistributionCard
              level={1}
              count={stats.levelDistribution.level1}
              total={stats.players.total}
            />
            <LevelDistributionCard
              level={2}
              count={stats.levelDistribution.level2}
              total={stats.players.total}
            />
            <LevelDistributionCard
              level={3}
              count={stats.levelDistribution.level3}
              total={stats.players.total}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  subtitle: string;
  color: 'purple' | 'red';
}

function StatCard({ icon, title, value, subtitle, color }: StatCardProps) {
  const colorClasses = {
    purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 text-purple-400',
    red: 'from-red-500/20 to-red-900/20 border-red-500/30 text-red-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300`}>
      <div className={`${colorClasses[color].split(' ')[3]} mb-4 flex justify-center`}>
        {icon}
      </div>
      <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-2">{title}</h4>
      <p className="text-4xl font-bold text-white mb-2">{value.toLocaleString()}</p>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
}

interface AverageStatProps {
  label: string;
  value: string;
}

function AverageStat({ label, value }: AverageStatProps) {
  return (
    <div className="bg-gradient-to-br from-red-900/20 via-purple-900/20 to-red-900/20 border border-purple-500/20 backdrop-blur-sm rounded-lg p-5 text-center hover:border-purple-500/40 transition-all duration-300">
      <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">{label}</p>
      <p className="text-3xl font-bold bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent">{value}</p>
    </div>
  );
}

interface TopPlayerCardProps {
  icon?: React.ReactNode;
  title: string;
  player: string;
  value: string;
  color: 'red' | 'purple';
}

function TopPlayerCard({ icon, title, player, value, color }: TopPlayerCardProps) {
  const colorClasses = {
    red: 'from-red-500/20 to-red-900/20 border-red-500/30 text-red-400',
    purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 text-purple-400'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm rounded-lg p-5 transform hover:scale-105 transition-all duration-300`}>
      <div className={`${colorClasses[color].split(' ')[3]} text-3xl mb-3 flex justify-center`}>
        {icon}
      </div>
      <h4 className="text-gray-300 text-xs uppercase tracking-wider mb-2 text-center">{title}</h4>
      <p className="text-white font-bold text-lg mb-1 text-center truncate" title={player}>{player}</p>
      <p className="text-gray-400 text-sm text-center">{value}</p>
    </div>
  );
}

interface LevelDistributionCardProps {
  level: number;
  count: number;
  total: number;
}

function LevelDistributionCard({ level, count, total }: LevelDistributionCardProps) {
  const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0';
  
  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm rounded-lg p-6">
      <div className="text-center mb-4">
        <h4 className="text-2xl font-bold text-white mb-1">Nivel {level}</h4>
        <p className="text-gray-400 text-sm">{count} jugadores</p>
      </div>
      <div className="w-full bg-gray-700/30 rounded-full h-4 mb-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-500 to-red-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-center text-purple-400 font-semibold">{percentage}%</p>
    </div>
  );
}

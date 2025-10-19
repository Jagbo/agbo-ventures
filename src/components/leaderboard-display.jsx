'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sampleLeaderboard = [
  {
    id: '1',
    rank: 1,
    name: 'Marcus Chen',
    points: 2845,
    periodsCompleted: 12,
  },
  {
    id: '2',
    rank: 2,
    name: 'Sarah Williams',
    points: 2720,
    periodsCompleted: 11,
  },
  {
    id: '3',
    rank: 3,
    name: 'Alex Johnson',
    points: 2590,
    periodsCompleted: 10,
  },
  {
    id: '4',
    rank: 4,
    name: 'Emma Davis',
    points: 2410,
    periodsCompleted: 9,
  },
  {
    id: '5',
    rank: 5,
    name: 'James Wilson',
    points: 2180,
    periodsCompleted: 8,
  },
]

export function LeaderboardDisplay() {
  const [startIndex, setStartIndex] = useState(0)
  const maxVisible = 3

  // Auto-scroll through the leaderboard
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => {
        // If we're showing the last possible window, go back to start
        if (prev >= sampleLeaderboard.length - maxVisible) {
          return 0
        }
        return prev + 1
      })
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-[#FFD700]'
      case 2:
        return 'bg-[#C0C0C0]'
      case 3:
        return 'bg-[#CD7F32]'
      default:
        return 'bg-[#f0f0f0]'
    }
  }

  const getRankDisplay = (rank) => {
    switch (rank) {
      case 1:
        return '🥇'
      case 2:
        return '🥈'
      case 3:
        return '🥉'
      default:
        return rank
    }
  }

  const visibleEntries = sampleLeaderboard.slice(startIndex, startIndex + maxVisible)

  return (
    <div className="relative h-[320px] w-full max-w-md mx-auto">
      <div className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#e5e5e5]">
        {/* Header */}
        <div className="px-5 py-4 pb-3 border-b border-[#f0f0f0]">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">Leaderboard</h3>
          <p className="text-sm text-[#666]">{sampleLeaderboard.length} participants</p>
        </div>

        {/* Leaderboard List */}
        <div className="pb-2 overflow-hidden relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-center px-5 py-3 border-b border-[#f8f8f8]"
              >
                {/* Rank Badge */}
                <div className="w-10 flex items-center justify-center mr-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${getRankBadgeColor(entry.rank)}`}
                  >
                    <span className={`text-sm font-bold ${entry.rank <= 3 ? 'text-white' : 'text-[#666]'}`}>
                      {getRankDisplay(entry.rank)}
                    </span>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1 mr-3">
                  <p className="text-base font-semibold text-[#1a1a1a] mb-0.5">
                    {entry.name}
                  </p>
                  <p className="text-xs text-[#666]">
                    {entry.periodsCompleted} period{entry.periodsCompleted !== 1 ? 's' : ''} completed
                  </p>
                </div>

                {/* Score */}
                <div className="text-right">
                  <p className="text-lg font-bold text-[#1a1a1a]">
                    {entry.points.toLocaleString()}
                  </p>
                  <p className="text-xs text-[#666]">points</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}


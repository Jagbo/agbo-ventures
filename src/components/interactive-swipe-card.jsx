'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import clsx from 'clsx'

const samplePlaces = [
  {
    id: '1',
    title: 'The Urban Kitchen',
    subtitle: 'Modern European',
    description: 'Contemporary dining in a sophisticated atmosphere',
    category: 'FOOD',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    id: '2',
    title: 'Rooftop Bar & Lounge',
    subtitle: 'Cocktail Bar',
    description: 'Stunning city views with craft cocktails',
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
  },
  {
    id: '3',
    title: 'The Art Gallery',
    subtitle: 'Contemporary Art',
    description: 'Rotating exhibitions from emerging artists',
    category: 'ACTIVITIES',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
  },
  {
    id: '4',
    title: 'Jazz & Blues Club',
    subtitle: 'Live Music Venue',
    description: 'Intimate performances every weekend',
    category: 'ACTIVITIES',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
  },
  {
    id: '5',
    title: 'Seaside Bistro',
    subtitle: 'Mediterranean Cuisine',
    description: 'Fresh seafood with ocean views',
    category: 'FOOD',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  },
]

export function InteractiveSwipeCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exitX, setExitX] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30])
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0])

  const currentCard = samplePlaces[currentIndex % samplePlaces.length]
  const nextCard = samplePlaces[(currentIndex + 1) % samplePlaces.length]

  // Auto-play loop - swipe right every 5 seconds
  useEffect(() => {
    if (isPaused || isAnimating) return

    const timer = setTimeout(() => {
      handleAction('want')
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, isPaused, isAnimating])

  const handleDragEnd = (event, info) => {
    if (isAnimating) return
    
    // Pause auto-play when user interacts
    setIsPaused(true)
    
    if (Math.abs(info.offset.x) > 100) {
      setIsAnimating(true)
      setExitX(info.offset.x > 0 ? 300 : -300)
      
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
        setExitX(0)
        setIsAnimating(false)
        x.set(0)
        // Resume auto-play after user interaction
        setTimeout(() => setIsPaused(false), 2000)
      }, 500)
    } else {
      x.set(0)
      // Resume auto-play if drag was cancelled
      setTimeout(() => setIsPaused(false), 1000)
    }
  }

  const handleAction = (action) => {
    if (isAnimating) return
    
    // Pause auto-play when user clicks button
    if (action !== 'want' || isPaused) {
      setIsPaused(true)
    }
    
    setIsAnimating(true)
    setExitX(action === 'want' ? 300 : -300)
    
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setExitX(0)
      setIsAnimating(false)
      x.set(0)
      // Resume auto-play after button click
      if (isPaused) {
        setTimeout(() => setIsPaused(false), 2000)
      }
    }, 500)
  }

  return (
    <div 
      className="relative h-[320px] w-full max-w-md mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Next card preview - Shows upcoming card */}
      <motion.div
        key={`preview-${currentIndex}`}
        className="absolute inset-0"
        initial={{ scale: 0.90, opacity: 0 }}
        animate={{ scale: 0.95, opacity: 0.5 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        style={{ zIndex: 0 }}
      >
        <div className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg border border-[#e5e5e5]">
          {/* Next card image preview */}
          <div className="relative h-36 w-full bg-gray-100">
            <img
              src={nextCard.image}
              alt={nextCard.title}
              className="h-full w-full object-cover"
            />
            {/* Category Badge */}
            <div className="absolute left-4 top-4 rounded-lg bg-[#8B7BE8] px-3 py-1.5 shadow-md">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                {nextCard.category}
              </span>
            </div>
          </div>
          {/* Content preview */}
          <div className="px-4 pt-3">
            <h3 className="text-lg font-bold leading-tight text-[#1a1a1a]">{nextCard.title}</h3>
            <p className="mt-1 text-sm font-medium text-[#666666]">{nextCard.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Current card */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{
          x: exitX !== 0 ? exitX : x,
          rotate,
          opacity,
          zIndex: 10,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        <div className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#e5e5e5] relative">
          {/* Image */}
          <div className="relative h-36 w-full bg-gray-100">
            <img
              src={currentCard.image}
              alt={currentCard.title}
              className="h-full w-full object-cover"
            />
            {/* Category Badge */}
            <div className="absolute left-4 top-4 rounded-lg bg-[#8B7BE8] px-3 py-1.5 shadow-md">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                {currentCard.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-3 pb-[72px]">
            <h3 className="text-lg font-bold leading-tight text-[#1a1a1a]">{currentCard.title}</h3>
            <p className="mt-1 text-sm font-medium text-[#666666]">{currentCard.subtitle}</p>
            <p className="mt-2 text-[13px] leading-[18px] text-[#888888]">
              {currentCard.description}
            </p>
          </div>

          {/* Action Buttons */}
          <button
            onClick={() => handleAction('pass')}
            disabled={isAnimating}
            className={clsx(
              'absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#e0e0e0] bg-[#f5f5f5] shadow-md transition-all hover:bg-[#eeeeee] hover:shadow-lg active:bg-[#e8e8e8]',
              isAnimating && 'opacity-50'
            )}
            aria-label="Pass"
          >
            <svg className="h-6 w-6 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 0 1-1.789-2.894l3.5-7A2 2 0 0 1 8.736 3h4.018a2 2 0 0 1 .485.06l3.76.94m-7 10v5a2 2 0 0 0 2 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5" transform="scale(1, -1) translate(0, -24)" />
            </svg>
          </button>
          <button
            onClick={() => handleAction('want')}
            disabled={isAnimating}
            className={clsx(
              'absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#444E5D] shadow-lg transition-all hover:bg-[#373848] hover:shadow-xl active:bg-[#2d2e3a]',
              isAnimating && 'opacity-50'
            )}
            aria-label="Want It"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  )
}


import React, { useEffect, useState, useCallback } from 'react'
import LocalCard from './localCard'
import { carouselItems } from './constants'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function LocalCarousel({ onLocate }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  const updateCardsToShow = useCallback(() => {
    const width = window.innerWidth
    if (width >= 1280) {
      setCardsToShow(4)
    } else if (width >= 1024) {
      setCardsToShow(3)
    } else if (width >= 768) {
      setCardsToShow(2)
    } else {
      setCardsToShow(1)
    }
  }, [])

  useEffect(() => {
    updateCardsToShow()
    const resizeListener = debounce(updateCardsToShow, 100)
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [updateCardsToShow])

  useEffect(() => {
    const maxIndex = Math.max(0, carouselItems.length - cardsToShow)
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [cardsToShow, currentIndex])

  const totalCards = carouselItems.length
  const maxIndex = Math.max(0, totalCards - cardsToShow)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  const cardWidth = `calc(${100 / cardsToShow}% - 16px)`

  return (
    <section className="px-4 pb-20">
      <div className="container mx-auto">
        <div className="flex my-5 items-center space-x-2">
          <div className="w-4 h-10 bg-[#B22020] rounded-md"></div>
          <h1 className="text-md font-bold text-[#B22020]">
            Las empanaderías más queridas
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#001e3c] my-4">
            ¿Dónde encontrarlas?
          </h1>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-amber-300 hover:bg-amber-400"
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-amber-300 hover:bg-amber-400"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {carouselItems.map((item, index) => (
              <LocalCard
                key={index}
                onLocate={() => onLocate(index)}
                cardWidth={cardWidth}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Debounce helper
function debounce(func, wait) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default LocalCarousel

import React, { useState, useEffect } from 'react'
import { Categories, BestRated } from '@/components/home'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import Carousel from '../components/UI/Carousel'
import {
  carouselItems,
  bestRated,
  localItems,
} from '../components/home/constants'

export function Home() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [categoriesToShow, setCategoriesToShow] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCategoriesToShow(1)
      } else {
        setCategoriesToShow(6)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const prevCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev === 0 ? localItems.length - categoriesToShow : prev - 1,
    )
  }

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev === localItems.length - categoriesToShow ? 0 : prev + 1,
    )
  }

  return (
    <>
      <div className="relative flex h-auto items-center justify-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full text-center lg:w-8/12 mt-60 mb-40">
              <Carousel items={carouselItems} />
            </div>
          </div>
        </div>
      </div>

      <section className="px-7 pb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-[#001e3c] mb-8">
            Mejores Calificadas
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {bestRated.map(({ img, name, position, value, rating }) => (
              <BestRated
                key={name}
                img={img}
                name={name}
                position={position}
                value={value}
                rating={rating}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link to={'local'}>
            <Button className="px-8 bg-[#f08c51] text-white font-medium rounded-lg shadow-md hover:bg-[#e0764d] transition">
              Ver todas los locales
            </Button>
          </Link>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-4/5 bg-gray-400 border-0 h-px mb-20" />
      </div>

      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-10 bg-[#B22020] rounded-md"></div>
            <h1 className="text-md font-bold text-[#B22020]">Categoría</h1>
          </div>
          <h1 className="text-3xl font-bold text-[#001e3c] my-4">
            Filtrar por Local
          </h1>

          <div className="flex justify-center items-center mt-10 space-x-4">
            <Button
              onClick={prevCategory}
              className="text-black py-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6 sm:w-10 sm:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </Button>

            <div className="flex justify-center items-center transition-all duration-500 ease-in-out flex-wrap gap-6 sm:grid-cols-4">
              {localItems
                .slice(
                  currentCategoryIndex,
                  currentCategoryIndex + categoriesToShow,
                )
                .map((category) => (
                  <Categories
                    key={category.title}
                    title={category.title}
                    img={category.img}
                  />
                ))}
            </div>

            <Button
              onClick={nextCategory}
              className="text-black py-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="w-6 h-6 sm:w-10 sm:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

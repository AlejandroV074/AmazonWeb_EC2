import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { localsData } from '../components/localPage/constants'
import { LocalMap } from '@/components/map/localMap'
import PriceAndRatingCard from '../components/localPage/PriceAndRatingCard'
import Carousel from '../components/UI/Carousel'

export function LocalPage() {
  const { localName } = useParams()

  const localData = localsData[localName]

  if (!localData) {
    return <div>Local no encontrado</div>
  }

  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const totalProducts = localData.products.length

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % totalProducts)
  }

  const prevProduct = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts,
    )
  }

  return (
    <div className="min-h-screen">
      <div className="relative flex h-auto items-center justify-center">
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full text-center lg:w-8/12 mt-60 mb-40">
              <Carousel items={localData.carouselItems || []} />
            </div>
          </div>
        </div>
      </div>

      <section className="px-7 pb-20 mt-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-[#001e3c] mb-6 text-center lg:text-left">
            ¿Quiénes son?
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            {localData.description}
          </p>

          <div className="flex items-center gap-2 mt-10">
            <div className="w-4 h-10 bg-[#B22020] rounded-md"></div>
            <div className="font-bold text-xl text-[#B22020]">Ubicación</div>
          </div>

          <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:gap-10 mt-10 justify-center items-center">
            <div className="p-4 w-full lg:w-2/4">
              <LocalMap
                location={localData.location}
                title={localData.title}
                description={localData.description}
                img={localData.img}
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full lg:w-1/3 space-y-5">
              <PriceAndRatingCard
                name={localData.products[currentProductIndex].name}
                price={localData.products[currentProductIndex].price}
                rating={localData.products[currentProductIndex].rating}
                onPrev={prevProduct}
                onNext={nextProduct}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocalPage

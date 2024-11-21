import LocalCarousel from '@/components/map/localCarousel'
import { GeneralMap } from '@/components/map/localMap'
import { carouselItems } from '../components/map/constants'
import { useState } from 'react';

export function Map() {
  const allLocals = Object.values(carouselItems);
  const [activeLocalIndex, setActiveLocalIndex] = useState(null);

  return (
    <>
      <section className="px-7 pb-20 pt-40">
        <GeneralMap locations={allLocals} activeLocalIndex={activeLocalIndex} />
        <LocalCarousel
          onLocate={(index) => {
            setActiveLocalIndex(index)
          }}
        />
      </section>
    </>
  )
}

export default Map

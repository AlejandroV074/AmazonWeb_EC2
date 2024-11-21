import React from 'react'
import LocalSection from '../components/localPage/LocalSection'
import { localItems } from '../components/home/constants'

export function Local() {
  return (
    <div className="flex flex-wrap justify-center gap-10 pt-40 mb-20">
      {localItems.map((category, index) => (
        <LocalSection key={index} title={category.title} img={category.img} />
      ))}
    </div>
  )
}

export default Local

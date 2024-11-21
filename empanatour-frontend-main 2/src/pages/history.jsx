import React from 'react'
import { sections } from '../components/history&culture/constants'

export function History() {
  return (
    <>
      <div className="ml-auto mr-auto w-full lg:w-8/12">
        <div className="relative flex items-center justify-center">
          <section className="px-7 pb-20 mt-40">
            <div className="container mx-auto">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-10 bg-[#B22020] rounded-md"></div>
                <h1 className="text-md font-bold text-[#B22020]">
                  La cultura de las empanadas
                </h1>
              </div>
              <h1 className="text-3xl font-bold text-[#001e3c] my-4">
                Historia
              </h1>
              <div className="mt-24 space-y-12">
                {sections.map(
                  (
                    { content, img, imgPosition, title, subSections },
                    index,
                  ) => (
                    <div key={index} className="space-y-12">
                      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-2 md:space-y-0">
                        {img && imgPosition === 'left' && (
                          <div className="md:w-1/2 flex justify-center md:justify-start">
                            <img
                              src={img}
                              alt={title}
                              className="w-screen h-auto min-h-[200px] object-cover rounded-lg shadow-lg -m-5"
                            />
                          </div>
                        )}

                        <div className="flex-1 text-center md:text-left">
                          <div className="flex items-center space-x-2 my-5">
                            <div className="w-4 h-10 bg-[#B22020] rounded-md"></div>
                            <div className="font-bold text-xl text-[#B22020]">
                              {title}
                            </div>
                          </div>

                          <div className="text-lg text-[#333] mt-2">
                            {content}
                            {subSections && (
                              <ol className="list-decimal space-y-4 mt-8 pl-6">
                                {subSections.map((sub, subIndex) => (
                                  <li key={subIndex}>
                                    <div className="text-lg text-[#333]">
                                      <strong>{sub.title}:</strong>
                                      {sub.content}
                                    </div>
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                        </div>

                        {img && imgPosition === 'right' && (
                          <div className="md:w-1/2 flex justify-center md:justify-start">
                            <img
                              src={img}
                              alt={title}
                              className="w-screen h-auto min-h-[200px] object-cover rounded-lg shadow-lg m-5"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default History

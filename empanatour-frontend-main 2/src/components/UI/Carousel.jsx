import { Carousel as MaterialCarousel } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { Button } from '@nextui-org/react'
import ReactPlayer from 'react-player'

const Carousel = ({ items }) => {
  return (
    <MaterialCarousel className="shadow-md">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex h-auto lg:h-[400px] w-full bg-[#FFECD0] rounded-lg"
        >
          <div className="flex flex-1 flex-col items-center justify-center text-center p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#001e3c]">
              {item.title}
            </h2>

            {item.description && (
              <p className="text-base lg:text-lg text-[#001e3c] mt-2">
                {item.description}
              </p>
            )}

            {item.buttonText && (
              <Link to={item.path} className="mt-4">
                <Button className="px-4 py-2 bg-[#f08c51] text-white font-medium rounded-lg shadow-md hover:bg-[#e0764d] transition">
                  {item.buttonText}
                </Button>
              </Link>
            )}
          </div>

          {item.img ? (
            <img
              src={item.img}
              alt={item.title}
              className="lg:w-3/5 w-full h-64 lg:h-full object-cover rounded-lg"
            />
          ) : item.video ? (
            <ReactPlayer
              url={item.video}
              controls
              className="lg:w-3/5 w-full h-30 lg:h-full rounded-lg
              bg-black"
              height="100%"
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <p>No media available</p>
          )}
        </div>
      ))}
    </MaterialCarousel>
  )
}

export default Carousel

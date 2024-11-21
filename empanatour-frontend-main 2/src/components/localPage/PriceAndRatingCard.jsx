import React from 'react'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { Button } from '@nextui-org/react'

function PriceAndRatingCard({ name, price, rating, onPrev, onNext }) {
  return (
    <Card className="w-5/6 bg-[#FFECD0] rounded-lg shadow-lg relative p-8">
      <Button
        onClick={onPrev}
        className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 p-2 rounded-full m-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </Button>

      <Typography
        variant="h5"
        className="text-center text-[#B22020] font-bold mb-4"
      >
        {name}
      </Typography>

      <div className="flex justify-between items-center space-x-4">
        <Card className="bg-[#72CB10] rounded-lg shadow-md w-5/6 flex flex-col items-center">
          <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center mt-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <CardBody className="p-4 text-center">
            <Typography
              variant="body1"
              className="text-[#ffffff] font-bold text-lg"
            >
              {price}
            </Typography>
            <Typography
              variant="body1"
              className="text-[#ffffff] font-bold text-lg"
            >
              Precio
            </Typography>
          </CardBody>
        </Card>

        <Card className="bg-[#72CB10] rounded-lg shadow-md w-5/6 flex flex-col items-center">
          <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center mt-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="M6.723 1.054a.5.5 0 0 1 .265.335C7.006 1.468 7.5 3.582 7.5 5c0 .95-.442 1.797-1.13 2.346c-.25.2-.37.418-.37.6v.486q0 .035.004.066c.034.248.157 1.169.272 2.124c.113.937.224 1.959.224 2.378a2 2 0 1 1-4 0c0-.42.111-1.44.224-2.378c.115-.955.238-1.876.272-2.124L3 8.432v-.486c0-.182-.12-.4-.37-.6A3 3 0 0 1 1.5 5c0-1.413.49-3.516.512-3.61A.505.505 0 0 1 2.505 1c.28 0 .507.227.507.507v2.998A.495.495 0 1 0 4 4.5v-3a.5.5 0 0 1 1 0v3.026a.495.495 0 0 0 .99-.021v-3c0-.279.226-.505.506-.505c.022 0 .12 0 .227.054M9 5.5A4.5 4.5 0 0 1 13.5 1a.5.5 0 0 1 .5.5v5.973l.019.177a262 262 0 0 1 .229 2.24c.123 1.256.252 2.664.252 3.11a2 2 0 1 1-4 0c0-.446.129-1.854.252-3.11c.063-.637.126-1.247.173-1.699l.02-.191H10a1 1 0 0 1-1-1z"
              />
            </svg>
          </div>
          <CardBody className="p-4 text-center">
            <Typography
              variant="body1"
              className="text-[#ffffff] font-bold text-lg"
            >
              ({rating})
            </Typography>
            <Typography
              variant="body1"
              className="text-[#ffffff] font-semibold text-lg"
            >
              Calificación
            </Typography>
          </CardBody>
        </Card>
      </div>
      <Button
        onClick={onNext}
        className="absolute top-1/2 right-[-27px] transform -translate-y-1/2 p-2 rounded-full m-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Button>
    </Card>
  )
}

export default PriceAndRatingCard

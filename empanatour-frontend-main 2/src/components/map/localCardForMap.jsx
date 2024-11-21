import React from 'react'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function LocalCardMap({ img, title, description }) {
  return (
    <Card className="min-w-[25%] mr-5 min-h-[300px] bg-[#FFECD0] rounded-none">
      <div
        className="min-h-[200px] max-h-72 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <CardBody className="inset-0 flex flex-col justify-between text-left">
        <div className="flex justify-between">
          <Typography variant="h6" className="text-[#001e3c] font-bold">
            {title}
          </Typography>
          <Link
            to={`/local/${title.toLowerCase().replace(/ /g, '-')}`}
            className="cursor-pointer py-1.5 font-bold"
          >
            <div className="btn_local_map">
              <div></div>
            </div>
          </Link>
        </div>
        <Typography variant="h6" className="text-[#001e3c] mt-4">
          {description}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default LocalCardMap

import React from 'react'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'

function LocalCard({ cardWidth, img, title, description, onLocate }) {
  return (
    <Card style={{ width: cardWidth, flexShrink: 0 }} className="rounded-none">
      <div className="h-full flex flex-col bg-[#FFECD0]">
        <div
          className="min-h-[200px] max-h-72 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <CardBody className="inset-0 flex h-full flex-col justify-between text-left">
          <div>
            <Typography variant="h6" className="text-[#001e3c] font-bold">
              {title}
            </Typography>
            <Typography variant="h6" className="text-[#001e3c] mt-4">
              {description}
            </Typography>
          </div>
          <Button
            className="normal-case bg-[#72CB10] w-fit mt-4"
            onClick={onLocate}
          >
            Localizar
          </Button>
        </CardBody>
      </div>
    </Card>
  )
}

export default LocalCard

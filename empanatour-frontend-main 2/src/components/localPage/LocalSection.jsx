import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardBody, Typography } from '@material-tailwind/react'

export function LocalSection({ title, img }) {
  return (
    <Card className="w-80 h-80 mt-5 rounded-lg shadow-lg shadow-gray-500/10">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <Link
          to={`/local/${title.toLowerCase().replace(/ /g, '-')}`}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
        >
          <CardBody className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
            <Typography variant="h5" className="text-white">
              {title}
            </Typography>
          </CardBody>
        </Link>
      </div>
    </Card>
  )
}

LocalSection.defaultProps = {
  color: 'blue',
}

LocalSection.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

LocalSection.displayName = '/src/components/LocalSection.jsx'

export default LocalSection

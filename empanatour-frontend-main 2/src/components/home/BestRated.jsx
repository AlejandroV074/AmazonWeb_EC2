import PropTypes from 'prop-types'
import { Card, Avatar, Typography } from '@material-tailwind/react'

export function BestRated({ img, name, position, value, rating }) {
  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        variant="rounded"
        className="h-full w-full shadow-lg shadow-gray-500/25"
      />
      <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
        {name}
      </Typography>
      {position && (
        <Typography className="font-bold text-blue-gray-500">
          {position}
        </Typography>
      )}
      {value && (
        <div className="flex items-center justify-center mt-5 space-x-2">
          <span className="text-yellow-500">
            {'★'.repeat(Math.round(rating))}
          </span>
          <span className="text-green-500 font-bold">{value}</span>
        </div>
      )}
    </Card>
  )
}

BestRated.defaultProps = {
  position: '',
  value: null,
  rate: null,
}

BestRated.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  value: PropTypes.node,
  rate: PropTypes.string,
}

BestRated.displayName = '/src/widgets/layout/team-card.jsx'

export default BestRated

import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-center text-black">
        <Link to="/" className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
          {brandName}
        </Link>

        <ul
          className={`mb-4 mt-2 lg:mb-0 lg:mt-0 flex gap-6 items-center justify-center ${
            openNav ? 'flex-col items-center' : 'hidden lg:flex'
          }`}
        >
          {routes.map(({ name, path, icon, href, target }) => (
            <Typography
              key={name}
              as="li"
              variant="medium"
              color="inherit"
              className="capitalize"
            >
              {href ? (
                <a
                  href={href}
                  target={target}
                  className="flex items-center gap-1 p-1 font-bold"
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  {icon &&
                    React.createElement(icon, {
                      className: 'w-4 h-4 opacity-75 mr-1',
                    })}
                  {name}
                </a>
              ) : (
                <Link
                  to={path}
                  target={target}
                  className={`flex items-center gap-1 p-1 font-bold ${
                    location.pathname === path ? 'text-[#B22020]' : ''
                  }`}
                >
                  {icon &&
                    React.createElement(icon, {
                      className: 'w-4 h-4 opacity-75 mr-1',
                    })}
                  {name}
                </Link>
              )}
            </Typography>
          ))}
        </ul>

        <IconButton
          variant="text"
          size="sm"
          color="black"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
    </MTNavbar>
  )
}

Navbar.defaultProps = {
  brandName: (
    <img
      src="/img/logo.png"
      alt="Brand Logo"
      className="mr-4 ml-2 h-20 w-30 cursor-pointer"
    />
  ),
}

Navbar.propTypes = {
  brandName: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.elementType,
      href: PropTypes.string,
      target: PropTypes.string,
    }),
  ).isRequired,
  action: PropTypes.node,
}

Navbar.displayName = '/src/widgets/layout/navbar.jsx'

export default Navbar

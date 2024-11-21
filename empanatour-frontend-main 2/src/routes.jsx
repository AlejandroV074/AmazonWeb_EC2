import { Home, Local, History, Map } from '@/pages'

export const routes = [
  {
    name: 'Inicio',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Locales',
    path: '/local',
    element: <Local />,
  },
  {
    name: 'Historia y cultura',
    path: '/historia-cultura',
    element: <History />,
  },
  {
    name: 'Mapa',
    path: '/mapa',
    element: <Map />,
  },
]

export default routes

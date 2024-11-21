import React, { useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { carouselItems } from './constants'
import LocalCardMap from './localCardForMap'

const customIcon = L.icon({
  iconUrl: '/img/location_on.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

function LocalMarker({ location, title, description, img, visible = false }) {
  const markerRef = useRef(null)

  useEffect(() => {
    if (markerRef.current) {
      if (visible) {
        setTimeout(() => {
          markerRef.current.openPopup()
        }, 2000)
      } else {
        markerRef.current.closePopup()
      }
    }
  }, [visible])

  return (
    <Marker position={location} icon={customIcon} ref={markerRef}>
      <Popup className="custom-popup">
        <LocalCardMap
          img={img}
          title={title}
          description={description}
        />
      </Popup>
    </Marker>
  )
}

function LocalMap({ location, title, description, img }) {
  const mapRef = useRef(null)

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.setView(location, 15)
    }
  }, [location])

  return (
    <div className="container mx-auto mb-5">
      <MapContainer
        center={location || [6.246343, -75.561867]}
        zoom={location ? 15 : 13}
        style={{ height: '50vh', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <LocalMarker
          location={location}
          title={title}
          description={description}
          img={img}
        />
      </MapContainer>
    </div>
  )
}

function GeneralMap({ locations = [], activeLocalIndex }) {
  const centerCoord = [6.246343,-75.561867]
  const mapRef = useRef(null);

  useEffect(() => {
    if( activeLocalIndex ) {
      zoomToPoint( centerCoord, 15 );

      setTimeout(() => {
        zoomToPoint(carouselItems[activeLocalIndex].location);
      }, 2000);
    }
  }, [activeLocalIndex])

  const zoomToPoint = (coords, zoomLevel = 20) => {
    if (mapRef.current) {
      mapRef.current.setView(coords, zoomLevel);
    }
  };

  return (
    <div className="container mx-auto mb-5">
      <MapContainer
        center={centerCoord}
        zoom={15}
        style={{ height: '50vh', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {locations.length > 0 &&
          locations.map((localData, index) => (
            <LocalMarker
              key={index}
              location={localData.location}
              title={localData.title}
              description={localData.description}
              img={localData.img}
              visible={index === activeLocalIndex}
            />
          ))}
      </MapContainer>
    </div>
  )
}

export { LocalMap, GeneralMap }

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './LocationDetails.css';

const locationData = {
  Albania: {
    images: [
      'https://whisperstarlight.com/img/trend/albania-hero.webp',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
      'https://images.unsplash.com/photo-1465156799763-2c087c332922?w=600'
    ],
    description: 'Discover Albania’s unspoiled beaches, charming mountain villages, and rich tapestry of history waiting to be explored.',
    bestTime: 'May to September',
    packages: 'Starting from ₹39,999/-',
  
  },
  Algeria: {
    images: [
      'https://whisperstarlight.com/img/trend/algeria-hero.webp',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600',
      'https://whisperstarlight.com/img/destinations/argentina-hero.webp'
    ],
    description: 'Uncover the secrets of Algeria, from the endless Sahara dunes to ancient Roman ruins and vibrant urban life.',
    bestTime: 'October to April',
    packages: 'Starting from ₹44,999/-',
  },
  Argentina: {
    images: [
      'https://whisperstarlight.com/img/trend/argentina-hero.webp',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600'
    ],
    description: 'Experience Argentina’s diverse wonders — from Patagonia’s glaciers to Buenos Aires’ passionate tango rhythms.',
    bestTime: 'November to March',
    packages: 'Starting from ₹64,999/-',
  },
  Australia: {
    images: [
      'https://whisperstarlight.com/img/trend/australia-hero.webp',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'
    ],
    description: 'Embark on an epic journey across Australia’s iconic Outback, lush rainforests, and world-famous beaches.',
    bestTime: 'September to November, March to May',
    packages: 'Starting from ₹99,999/-',
  },
  Austria: {
    images: [
      'https://whisperstarlight.com/img/trend/austria-hero.webp',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600'
    ],
    description: 'Wander through Austria’s storybook villages, imperial palaces, and breathtaking alpine landscapes.',
    bestTime: 'April to October',
    packages: 'Starting from ₹49,999/-',
  },
  Bahamas: {
    images: [
      'https://whisperstarlight.com/img/trend/bahamas-hero.webp',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600'
    ],
    description: 'Relax in the Bahamas, a tropical paradise known for its crystal-clear waters, white sand beaches, and vibrant marine life.',
    bestTime: 'November to April',
    packages: 'Starting from ₹69,999/-',
  }
  // Add other locations as needed
};

const LocationDetails = () => {
  const { name } = useParams();
  const location = locationData[name];

  if (!location) {
    return <h2 className="text-center mt-5">Location Not Found</h2>;
  }

  return (
    <div className="location-details-container container py-5">
      <h2 className="fw-bold mb-4">{name}</h2>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="location-gallery">
            {location.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={name + ' ' + (idx + 1)}
                className="img-fluid zoom-on-hover"
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <p><strong>Description:</strong> {location.description}</p>
          <p><strong>Best Time to Visit:</strong> {location.bestTime}</p>
          <p><strong>Tour Packages:</strong> {location.packages}</p>
          <Link to={`/booking?destination=${encodeURIComponent(name)}`} className="btn btn-primary mt-3">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;

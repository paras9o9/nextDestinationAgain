import React from 'react';
import Tour from './Destiantion';

const Tours = ({ removeTour, destinations}) => {
    // console.log(destinations);
  return (
    <section className='destination-section'>
        <div className='destination-title'>
            <h2>Our Tours</h2>
        </div>
        <div className='destination-container'>
            {destinations.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour} />
            }) }
        </div>
    </section>
  )
}

export default Tours
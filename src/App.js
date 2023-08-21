import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/whoWeAre';
import Feedbacks from './components/Feedbacks'
import Loading from './components/destination/Loading';
import Destinations from './components/destination/Destinations';
import Priceing from './components/Priceing';
const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState([]);
  const removeTour = (id) => {
    const newTours = destination.filter((tour) => tour.id !== id)
    setDestination(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const destination = await response.json();
      setLoading(false)
      setDestination(destination)
      // console.log(destination);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <section className='destination-section'>
        <Loading />
      </section>
    )
  }
  if (destination.length === 0) {
    return (
      <section className='destination-section'>
        <div className='destination-title'>
          <h2>no destination left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </section>
    )
  }
  return (
    <div>
        <Nav />
        <Hero />
        <About />
        <Feedbacks />
        <Destinations destinations={destination} removeTour={removeTour} />
        <Priceing />
    </div>
  )
}

export default App
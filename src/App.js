import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/whoWeAre";
import Feedbacks from "./components/feedback/Feedbacks";
// import Gallery from "./components/Gallery";
import Loading from "./components/destination/Loading";
// import Destinations from "./components/destination/Destinations";
import Priceing from "./components/Priceing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const theme = {
  mobile: "800px",
};
const App = () => {
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState([]);
  const removeTour = (id) => {
    const newTours = destination.filter((tour) => tour.id !== id);
    setDestination(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const request = "https://course-api.com/react-tours-project";
      const response = await fetch(request);
      const destination = await response.json();
      setLoading(false);
      setDestination(destination);
      // console.log(destination);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <section className="destination-section">
        <Loading />
      </section>
    );
  }
  if (destination.length === 0) {
    return (
      <section className="destination-section">
        <div className="destination-title">
          <h2>no destination left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </section>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Hero />
        {/* <About /> */}
        <Feedbacks />
        {/* <Gallery /> */}
        {/* <Destinations destinations={destination} removeTour={removeTour} /> */}
        <Priceing />
        {/* <Contact /> */}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;

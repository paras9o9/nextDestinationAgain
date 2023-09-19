import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { StyledFeedback } from "../styles/feedback.styled";

const Feebackss = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  console.log(feedbacks);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // Other Apporach for fetch API
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((jsonData) => setFeedbacks(jsonData));
    const getData = async () => {
      try {
        const requestUrl = "http://localhost:3004/posts";
        const request = new Request(requestUrl);
        setFeedbacks([]);
        const responses = await fetch(request);
        const result = await responses.json();
        setFeedbacks(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // try {
    //
    //     const response = await axios.get(url);
    //     setFeedbacks(response);
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);
  const { id, name, job, image, text } = feedbacks[index] || {};

  const checkNumber = (number) => {
    if (number > feedbacks.length - 1) {
      return 0;
    }
    if (number < 0) {
      return feedbacks.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const pervPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * feedbacks.length);
    if (randomNumber == index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <StyledFeedback>
      <section className="feedback-section">
        <div className="feedback-title">
          <h2>Our Review</h2>
        </div>
        <article className="feedback" key={id}>
          <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="client">{name}</h4>
          <p className="destination">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={pervPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </section>
    </StyledFeedback>
  );
};

export default Feebackss;

import React, {useState} from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from '../data.json';

const Feedbacks = () => {
  const [index, setIndex] = useState(0);
  const {name, image, job, text} = data[index];
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
    return data.length - 1;
  }
  return number;
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index -1;
    }
    setIndex(checkNumber(randomNumber))
  }
  return (
    <div>
      <section className='feedback-section'>
        <div className='feedback-title'>
          <h2>Our reviews</h2>
        </div>
        <article className='feedback'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='client'>{name}</h4>
          <p className='destinattion'>{job}</p>
          <p className='info'>{text}</p>
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick={randomPerson}>surprise me</button>
        </article>
      </section>
    </div>
  )
}

export default Feedbacks
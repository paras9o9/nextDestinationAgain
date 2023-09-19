import styled from "styled-components";

export const StyledFeedback = styled.div`
  .feedback-section {
    display: grid;
    place-items: center;
    /* border: 2px solid magenta; */
    padding: 3rem;
  }

  .feedback-title {
    text-align: left;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .feedback {
    width: 75%;
    background: blue;
    padding: 1.5rem 2rem;
    // border-radius: 50px;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    text-align: center;
    /* border: 2px solid grey; */
  }

  .feedback:hover {
    box-shadow: var(--dark-shadow);
  }

  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }

  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: var(--clr-primary-5);
    color: blue;
  }

  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }

  .client {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;

    margin-bottom: 0.25rem;
  }

  .destination {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }

  .info {
    margin-bottom: 0.75rem;
    max-width: 100%;
  }

  .prev-btn,
  .next-btn {
    color: var(--clr-primary-7);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .prev-btn:hover,
  .next-btn:hover {
    color: var(--clr-primary-5);
  }

  .random-btn {
    margin-top: 0.5rem;
    background: var(--clr-primary-10);
    color: blue;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;
  }

  .random-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`;

import styled from "styled-components";
import img from '../assest/hero-bg.jpg'

export const HeaderStyled = styled.div`

/* section */

  .hero-section {
    /* background-image: url(https://picsum.photos/id/76/1495); */
    background-image: url(${img});
    background-size: cover;
    color: #f5f5f5;
  }

  /* content */

  .hero-section-content {
    margin-block-start: 1.5rem;
    padding-inline: 2rem;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: start;

    .hero-text {
      font-size: 1.5rem;
      font-family: "Cormorant", serif;
      /* min-width: fit-content; */
    }

    .explore-btn {
      display: flex;
      justify-content: start;
      align-items: baseline;
      font-family: "Poppins", sans-serif;
    }

    .explore-btn a {
      border: 2px solid white;
      min-width: fit-content;
      padding: 1rem 5rem;
      color: white;
      text-decoration: none;
      transition: 0.4s linear;

      &:hover {
        background: white;
        color: black;
      }
    }
  }

  /* card container */

  .hero-cards-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 0.5rem;
    margin-block-start: 1rem;
    padding-block: 1rem;
    height: fit-content;

    .hero-card {
      text-align: center;
      font-family: "Poppins", sans-serif;
      height: fit-content;

      .hero-img-container img {
        display: block;
        max-width: 100%;
      }

      .hero-card-content {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-block: 0.5rem;
      }
      .hero-card-date,
      .hero-card-heading,
      .hero-card-text {
        font-weight: lighter;
      }
      .card-date {
        font-size: small;
      }
      .card-heading {
        font-weight: 400;
      }
      .card-text {
        width: fit-content;
        font-size: small;
      }

      .read-more {
        font-size: small;
      }
      
      .read-more a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 100;

        &:hover {
          color: blue;
        }
      }
    }
  }

  /* media for large screen size */

  @media all and (min-width: 768px) {
    .hero-section-content {
      padding: 1rem 3.5rem;
    }
    .hero-content {
      align-items: start;
      flex-direction: row;

      .hero-text {
        font-size: 2rem;
      }
    }
    .hero-content .explore-btn {
      all: unset;
      grid-column: 3;
      display: flex;
      justify-content: end;
      align-items: end;
      font-family: "Poppins", sans-serif;
    }
    .hero-content .explore-btn a {
      padding-inline: 5.5rem;
    }
  }
`;

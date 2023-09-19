import styled from "styled-components";

export const StyledNav = styled.div`
  /* header {
    width: 100%;
    display: flex;
    justify-content: start;
    flex-direction: row-reverse;
    align-items: baseline;
  } */
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    /* width: 100%; */
  }
  .logo {
    font-size: x-large;
    font-weight: lighter;
    cursor: pointer;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: pink;
    background: transparent;
    border-color: transparent;
    transition: 0.4s linear;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: yellow;
    transform: rotate(90deg);
  }
  .links {
    width: 100%;
    text-align: start;
    background-color: #f5f5f5;
  }
  .links a {
    color: black;
    font-size: 1rem;
    text-transform: capitalize;
    text-decoration: none;
    letter-spacing: 0.5rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: 0.4s linear;
  }
  .links a:hover {
    background: black;
    color: white;
    padding-left: 1.5rem;
  }
  /* .social-icons ul {
    display: flex;
    gap: 1rem;
    padding-inline: 0.5rem;
    list-style: none;
  } */
  .social-icons {
    display: none;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: 0.4s linear;
  }
  .show-container {
    height: 10rem;
  }
  @media (min-width: 800px) {
    header {
      all: unset;
      display: flex;
      flex-direction: row-reverse;
      align-items: baseline;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid white;
      margin: 0 auto;
      padding: 1.5rem;
    }
    .nav-header {
      margin-inline-end: 10%;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      all: unset;
      list-style: none;
      display: flex;
      justify-content: center;

      .link a {
        text-decoration: none;
        font-size: large;
        font-family: "Poppins", sans-serif;
        color: white;
      }
    }
    .social-icons {
      display: block;
    }
    .social-icons ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: start;
      align-content: center;
      gap: 1.5rem;
      list-style: none;
      font-size: large;
      cursor: pointer;
    }
  }
`;

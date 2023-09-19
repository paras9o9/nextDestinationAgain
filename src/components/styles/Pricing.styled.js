import styled from "styled-components";
export const StyledPricing = styled.div`
  .pricing-section {
    padding: 3rem;
    background: pink;
  }
  .pricing-content {
    display: flex;
    place-items: center;
    gap: 0.1rem;
  }
  .pricing-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  table {
    border-collapse: collapse;
    background: blue;
  }
  /* caption */
  th,
  td {
    padding: 1rem;
  }

  /* caption {
    text-align: left;
  } */
  th,
  td {
    text-align: left;
  }
  /* caption {
    background: hsl();
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  } */
  th {
    background: hsl(0 120% 240% / 0.5);
  }
  tr:nth-of-type(2n) {
    background: hsl(0 120% 240% / 0.1);
  }
  .destination-link-container {
    width: 100%;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    align-items: center;
    /* padding-inline-start: 5rem; */

  }
  @media (max-width: 650px) {
    .pricing-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    th {
      display: none;
      color: pink;
    }
    td {
      display: block;
      padding: 0.5rem;
    }
    td::before {
      content: attr(data-cell) ": ";
      font-weight: 700;
      text-transform: capitalize;
    }
    td:first-child {
      padding-block-start: 2rem;
    }
    td:last-child {
      padding-block-start: 2rem;
    }
  }
`;

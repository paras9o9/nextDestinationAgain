import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
  font-family: "Poppins", sans-serif;

  .link {
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
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    gap: 24px;
    height: 70px;
    font-size: 18px;

    .languages {
      display: flex;
      align-items: center;
      gap: 18px;  
      
      padding: 0 24px;

      border-radius: 5px;
      border: 3px solid var(--clr-light-blue);
    }

    `

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    padding: 0 24px;

    border-radius: 5px;
    border: 3px solid var(--clr-light-blue);

    a {
        padding: 12px;
        border-radius: 2.5px;
    }

    a:hover {
        background-color: #08142B;
    }
`

export const StyledButton = styled.button`
    text-align: center;
    padding: 12px;
    height: fit-content;

    font-size: 18px;

    color: var(--clr-light-text);
    background-color: transparent;
    border-radius: 2.5px;

    &:hover {
        background-color: #08142B;
    }
`
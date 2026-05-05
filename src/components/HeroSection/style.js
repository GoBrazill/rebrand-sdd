import styled from "styled-components";


export const StyledSectionHero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 0;

    .rectangle {
        text-align: end;
        
        width: 300px;
        height: 100px;
        padding-right: 10px;
        padding-bottom: 24px;

        background-color: var(--clr-dark-blue);
    }
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    margin-top: 62px;
    padding: 24px;
    font-size: 1.5rem;
    font-weight: 600;
    
    cursor: pointer;
    color: var(--clr-light-text);
    background-color: var(--clr-dark-blue);
    border-radius: 5px;
    border: 2px solid var(--clr-light-blue);
    transition: 300ms;

    &:hover {
        color: var(--clr-dark-text);
        background-color: var(--clr-light-blue);
        border-color: var(--clr-dark-blue);

        svg path {
            fill: var(--clr-dark-text);
        }
    }
`
import styled from "styled-components";


export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 60px;

    width: 100vw;
`

export const StyledTitleWrapper = styled.div`
    text-align: center;
`

export const StyledAboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: ${props => props.$alignSelf};
    gap: 24px;

    padding: 0 72px;

    h3 {
        font-style: italic;
        font-weight: 500;
        -webkit-text-stroke: 1px var(--clr-light-text);
        color: var(--clr-light-text);
        
        span {
            color: transparent;
        }
    }

    p {
        width: 560px;
        font-weight: 500;
        font-size: 24px;
    }
`

export const StyledAboutTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
import styled from "styled-components";


export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 60px;

    width: 100%;
    `

export const StyledTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 72px;

    h2:last-of-type {
        align-self: end;
    } 
`

export const StyledCardWrapper = styled.div`
    display: flex;
    gap: 60px;
    overflow: hidden;
`
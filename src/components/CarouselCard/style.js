import styled from "styled-components";


export const StyledCard = styled.div`
    width: 600px;
    height: 400px;
    
    border-radius: 5px;
    background-color: #E9F0FB;
    
    > img {
        width: 100%;
        height: 50%;
        object-fit: cover;
        border-radius: 0 0 5px 5px;
    }
    
    `

export const StyledContentCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    width: 100%;
    height: 50%;

    padding: 12px 18px 18px 18px;
`

export const StyledTagWrapper = styled.p`
    display: flex;
    gap: 6px;
    margin-right: 600px;
    height: fit-content;

    p {
        padding: 6px;
        height: fit-content;
        white-space: nowrap;

        font-size: 0.625rem;
        font-weight: bold;

        color: rgba(0, 17, 51, 80%);
        border-radius: 5px;
        border: 1px solid rgba(0, 35, 102, 80%);
    }
`

export const StyledMainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    width: 65%;
    padding-top: 6px;

    h4 {
        font-size: 1.5rem;
        color: var(--clr-dark-text);
    }
    
    p:last-of-type {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 18px;
        color: var(--clr-dark-text);
    }
`

export const StyledAside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 35%;
`

export const StyledLink = styled.a`
    display: flex;
    flex-direction: row;
    align-self: end;
    align-content: center;
    justify-content: center;
    white-space: nowrap;
    gap: 10px;

    width: 150px;
    height: 50px;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 12px;

    color: var(--clr-dark-text);
    border-radius: 5px;
    border: 1px solid var(--clr-dark-blue);

`

export const StyledTestemonial = styled.p`
    padding: 12px;
    font-size: 0.75rem;

    color: var(--clr-dark-text);
    border-radius: 5px;
    border: 1px solid var(--clr-dark-blue);
`
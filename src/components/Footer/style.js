import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 18px 18px 18px;

    > p {
        font-size: 1.125rem;
        color: #bbb;
    }
`

export const StyledTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;

    p{
        font-size: 1.5rem;
    }

    a{
        font-size: 1.125rem;
        text-decoration: underline;
    }
`

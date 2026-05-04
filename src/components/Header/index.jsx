import { StyledButton, StyledHeader, StyledNav } from "./style";
import logotype from '../../assets/icons/logotype.svg'

export default function Header() {

    return (
        <StyledHeader>
            <StyledNav>
                <a href="">Home</a>
                <a href="">Portfólio</a>
                <img src={logotype} alt="" />
                <a href="">Testimonials</a>
                <a href="">FAQs</a>
            </StyledNav>
            <div className="languages">
                <StyledButton>PT-BR</StyledButton>
                <StyledButton>EN</StyledButton>
                <StyledButton>ES</StyledButton>
            </div>
        </StyledHeader>
    )
}
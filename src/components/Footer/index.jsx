import sddLogo from '../../assets/icons/sdd-logo.svg'
import { StyledFooter, StyledNav, StyledTopWrapper } from './style'

export default function Footer() {

    return (
        <StyledFooter>
            <StyledTopWrapper>
                <img src={sddLogo} alt="" />

                <StyledNav>
                    <p>Contate-nos</p>
                    <a href="">Instagram</a>
                    <a href="">Linkedin</a>
                    <a href="">Whatsapp</a>
                </StyledNav>
            </StyledTopWrapper>

            <p>Suporte de Domingo - © 2026 todos os direitos reservados</p>
        </StyledFooter>
    )
}
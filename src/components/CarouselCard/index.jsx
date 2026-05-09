import { StyledAside, StyledCard, StyledContentCard, StyledLink, StyledMainContent, StyledTagWrapper, StyledTestemonial } from "./style";
import SanteLogotype from '../../assets/images/image-sante-logotype.png'
import IconArrow from '../../assets/icons/icon-arrow.svg'

export default function CarouselCard() {
    return (
        <StyledCard>
            <img src={SanteLogotype} alt="" />
            <StyledContentCard>
                <StyledTagWrapper>
                    <p>Landing Page</p>
                    <p>Identidade visual</p>
                </StyledTagWrapper>

                <StyledMainContent>
                    <h4>Cliníca Santé</h4>
                    <p>Projeto de landing page para uma clínica odontológica, com foco em transmitir credibilidade,
                        acessibilidade e confiança por meio do design, aliado a um sistema de identidade visual consistente.
                    </p>
                </StyledMainContent>

                <StyledAside>
                    <StyledLink> Ir ao site<img src={IconArrow} alt="" /></StyledLink>
                    <StyledTestemonial>“O Lucas é o melhor designer que eu conheci não tem jeito” - Santé</StyledTestemonial>
                </StyledAside>
            </StyledContentCard>

        </StyledCard>
    )
}
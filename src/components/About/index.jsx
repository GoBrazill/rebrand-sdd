import { StyledAboutTextWrapper, StyledAboutWrapper, StyledSection, StyledTitleWrapper } from "./style";
import imageQuestionMark from '../../assets/images/image-question-mark.webp'
import imageOffer from '../../assets/images/image-offer.webp'
import imagePodium from '../../assets/images/image-podium.webp'


export default function About() {

    return (
        <StyledSection>
            <StyledTitleWrapper>
                <h2>Olá, nós somos a Suporte de Domingo</h2>
                <h3>Transformando ideias em produtos digitais</h3>
            </StyledTitleWrapper>
            <StyledAboutWrapper $alignSelf={'start'}>
                <img src={imageQuestionMark} alt="" />
                <StyledAboutTextWrapper>
                    <h3>QUEM <span>SOMOS</span></h3>
                    <p>Entregamos experiências conceituais com design autoral, 
                        criando identidades únicas que rompem com o genérico.
                    </p>
                </StyledAboutTextWrapper>
            </StyledAboutWrapper>
            <StyledAboutWrapper $alignSelf={'end'}>
                <StyledAboutTextWrapper>
                    <h3>O QUE <span>OFERECEMOS</span></h3>
                    <p>Do branding à experiência digital.
                    Soluções integradas em design, software, 
                    automação e capacitação para gerar valor e impulsionar resultados.
                    </p>
                </StyledAboutTextWrapper>
                <img src={imageOffer} alt="" />
            </StyledAboutWrapper>
            <StyledAboutWrapper $alignSelf={'start'}>
                <img src={imagePodium} alt="" />
                <StyledAboutTextWrapper>
                    <h3>NOSSO <span>OBJETIVO</span></h3>
                    <p>Ajudar sua empresa em todo aspecto possível para alcançar o resultado que você deseja. 
                        Tornando a sua marca na melhor versão de si mesma
                    </p>
                </StyledAboutTextWrapper>
            </StyledAboutWrapper>
        </StyledSection>
    )
}
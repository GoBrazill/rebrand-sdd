import CarouselCard from "../CarouselCard";
import { StyledCardWrapper, StyledSection, StyledTitleWrapper } from "./style";


export default function CarouselSection() {

    return (
        <StyledSection>
            <StyledTitleWrapper>
                <h2>Não acredite apenas no que dizemos</h2>
                <h2>Veja na prática</h2>
            </StyledTitleWrapper>
            <StyledCardWrapper>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </StyledCardWrapper>
        </StyledSection>
    )
}
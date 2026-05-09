import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Line from "./components/Line"
import GlobalStyle from "./styles/GlobalStyle"
import CarouselSection from "./components/CarouselSection"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />   
      <HeroSection />
      <Line />    
      <AboutSection />
      <Line />    
      <CarouselSection />
      <Line />
      <Footer />
    </>
  )
}

export default App

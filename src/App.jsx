import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Line from "./components/Line"
import GlobalStyle from "./styles/GlobalStyle"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />   
      <HeroSection />
      <Line />    
      <AboutSection />
      <Line />    
    </>
  )
}

export default App

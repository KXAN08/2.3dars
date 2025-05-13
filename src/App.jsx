import Header from './components/header/Header'
import Main from './components/main/Main'
import Hero from './components/hero/Hero'
import Madel from './components/madel/Madel'
import Menu from './components/menu/Menu'
import  AboutSection  from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
  <>
       <Header/>
       <Hero/>
       <Madel/>
       <Menu/>
       <AboutSection/>
       <Main/> 
       <Footer/>
  </>
  )
}

export default App
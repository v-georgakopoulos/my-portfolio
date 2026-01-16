import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Navigation from "./components/navigation/navigation"
import Projects from "./components/projects/projects"



const App = () => {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
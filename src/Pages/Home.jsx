import Header from '../Home/Header/Header.jsx'
import Services from '../Home/Services/Services.jsx'
import Samples from '../Home/Samples/Samples.jsx'
import Goals from '../Home/Goals/Goals.jsx'
import Footer from '../Home/Footer/Footer.jsx'

function Home() {
  return (
      <main style={{backgroundColor: "#e59622"}}>
        <Header/>
        <Services/>
        <Samples/>
        <Goals/>
        <Footer/>
      </main>
  )
}

export default Home
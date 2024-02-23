import './App.scss'
import Home from './Pages/Home'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
function App() {

  return (
    <div >
      <Home className="App" ></Home>
    </div>
  )
}

export default App

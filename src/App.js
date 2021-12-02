import './App.css';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AndButton } from './components/button';

function App() {
  const buttonList = [
    {theme:"btn-white", content:'Discover More', icon:<BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>},
    {theme:"btn-red", content:'Discover More', icon:<BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>},
    {theme:"btn-white", content:'Apply'}
  ]
  return (
    <div className="App">
      {buttonList.map(button => (
        <AndButton style ={button.theme}>{button.content}{button.icon ? button.icon : '' }</AndButton>
      ))}
    </div>
  );
}

export default App;

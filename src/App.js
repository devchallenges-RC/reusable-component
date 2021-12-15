import './App.css';
import './components/button.css';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AndButton } from './components/button';

function App() {
  const buttonList = [
    {theme:"btn-white", content:'Discover More', icon:<BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>},
    {theme:"btn-red", content:'Discover More', icon:<BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>},
    {theme:"btn fill", content:'Apply'},
    {theme:"btn pulse", content:'Apply'},
    {theme:"btn raise", content:'Apply'},
    {theme:"btn up", content:'Apply'},
  ]
  return (
    <div className="App">
      {buttonList.map(button => (
        <AndButton style={button.theme}>
          <div className="button-text">
            {button.content}
          </div>
          <div className="button-icon">
            {button.icon ? button.icon : '' }
          </div>
          </AndButton>
      ))}
    </div>
  );
}

export default App;

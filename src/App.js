import { useEffect, useState } from 'react';
import ButtonIcon from './images/icon-dice.svg'
import Divider from "./images/pattern-divider-desktop.svg";
import DividerMobile from "./images/pattern-divider-mobile.svg";

function App() {
  const [data, setData] = useState({})

  const fetchData = async () => {
    let res = await fetch('https://api.adviceslip.com/advice');
    res = await res.json();
    setData(res.slip);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="container">

      <div className="card">
        <h1 className='quote_id'>Advice #{data.id}</h1>
        <blockquote className="quote">{data.advice}</blockquote>

        <picture>
          <source media="(min-width: 768px)" srcSet={Divider} />
          <img className="divider" src={DividerMobile} alt="divider" />
        </picture>

        <div className="btn"><img src={ButtonIcon} alt="button-icon" onClick={fetchData} /></div>
      </div>

      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/dyCodes">dyCodes</a>.
        </div>
      </footer>

    </div>
  );
}

export default App;

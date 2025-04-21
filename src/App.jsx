import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Game from './components/game';

function App() {
  const [score, setScore] = useState(0);
  const [topScore,setTopScore] = useState(0);
  const [cardList,setCardList] = useState([]);
  const [isFinished,setFinished] = useState(true);

  useEffect(()=>{
    if(isFinished){
      let first=null;
      let randomOffset = Math.floor(Math.random() * 140);

      let url="https://pokeapi.co/api/v2/pokemon?limit=10&offset="+randomOffset;
      fetch(url).then(res =>res.json()).then(out=>{
          first=out.results;
          let promises = out.results.map((item)=>{
              return fetch(item.url).then(res=>res.json().then(out=>({
                  name:item.name,
                  img:out.sprites.front_default,
                  clicked:false
              })))
          })
          return Promise.all(promises);
      }).then(res=>setCardList(res));
      setFinished(false);
  }     
  },[isFinished]);

  const updateScore = () =>{
    setScore(prev =>{
      let newScore = prev +1;
      setTopScore(top=>(newScore < top ? top : newScore));
      return newScore;
    });  
        
  }

  const toggleFinish = () =>{
    alert("Your score: "+score);
    setScore(0);
    setFinished(true);
  }

  return ( <div className="main">
            <Navbar current={score} top={topScore}/>
            <Game scoreIncrement={updateScore} finishGame={toggleFinish} cardList={cardList} setCardList={setCardList}/>
          </div>
  );
}

export default App

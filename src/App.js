import React,{useState} from 'react';

// Components
import CardViewer from './components/CardViewer'
import CardEditor from './components/CardEditor'
import './App.css';


const cardTemplate = {
  id: '',
  front: '',
  back:''
}

const dummyInfo = [
  {id:'1',
    front:' Front of card 1',
    back:' Back of card 1'
  },{id:'2',
    front:' Front of card 2',
    back:' Back of card 2'
  },{id:'3',
    front:' Front of card 3',
    back:' Back of card 3'
  },]


function App() {
  const [toggle, setToggle] = useState(true)
  const [cards, setCards] = useState(dummyInfo)
  
  
  const handleClick = () => setToggle(!toggle)
  
  return (
    <div>
      
      <div className='container'>
      {toggle? <CardEditor  />: <CardViewer cards={cards}/>}
      
      
      <button className='btn btn-primary my-1' onClick={handleClick}>Switch</button>
      </div>
    </div>
  );
}

export default App;

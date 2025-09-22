import { useState } from 'react'
import './App.css'

{/* Using the map function within an array */}
const produces = [
  {name: "Garlic", id: 1, price: 0.5},
  {name: "Onion", id: 2, price: 1.1},
  {name: "Cabbage", id: 3, price: 2.0},
  {name: "Banana", id: 4, price: 44.0}
];

{/*   Example User */}
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};


const ProduceList = () => {
  return (
    <>
      <h2> Here is the list of produces</h2>
      <ol>
      {
        produces.map((produce) =>
          <li key={produce.id}>
            
            {/* Use 'pre' to preserve formatting */}
            <pre>Name: {produce.name}         Price: {produce.price}</pre>
          </li>
        )
      }</ol>
    </>
  );
}// const ProduceList

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};


const MyButton = ({count, setCount}) => {
  
  const [buttonText, setButtonText] = useState("I am a Button!")
  const buttonTexts = [
    <button key="1">Tickle Me!</button>,
    <button key="2">Boop Nose!</button>,
    <button key="3">Wiggle Time!</button>,
    <button key="4">Giggle Blast!</button>,
    <button key="5">Silly Spin!</button>,
    <button key="6">Poke It!</button>,
    <button key="7">Goofy Click!</button>,
    <button key="8">Bouncy Bop!</button>,
    <button key="9">Zany Zap!</button>,
    <button key="10">Chuckle Now!</button>
  ];

  function handleClick(){
    //alert("Yo you clicked!");
    setCount(count + 1);
    const randButtonIndex = Math.floor(Math.random() * buttonTexts.length);
    setButtonText(buttonTexts[randButtonIndex]);
  }

  return(
    // The doc says the // comment is not applicable within JSX, but it seems OK here.
    <button onClick={handleClick}>
      {buttonText}     count: {count}
    </button>
  );
};// const MyButton

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello App.jsx of React 19</h1>

      <MyButton count = {count} setCount={setCount} />
      
      <ProduceList />
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Search />
      <h2>{user.name}</h2>
      <img 
        className="avatar"
        src={user.imageUrl}
        style = {{width:user.imageSize, height:user.imageSize}}
      />

    </>
  )
}

export default App

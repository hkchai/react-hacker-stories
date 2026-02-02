/* 
  Alternative will be
   "import {useState} from 'react'"  
  Which can then `const [count, setCount] = useState(0)`
*/
import React, {useState, useEffect} from 'react'  
import './App.css'

{/* Using the map function within an array */}
const produces = [
  { name: "Garlic", id: 1, price: 6.50 },
  { name: "Onion", id: 2, price: 1.80 },
  { name: "Cabbage", id: 3, price: 1.50 },
  { name: "Carrot", id: 4, price: 1.20 },
  { name: "Broccoli", id: 5, price: 2.80 },
  { name: "Lettuce", id: 6, price: 2.00 },
  { name: "Tomato", id: 7, price: 2.50 },
  { name: "Potato", id: 8, price: 1.00 },
  { name: "Spinach", id: 9, price: 3.50 },
  { name: "Bell Pepper", id: 10, price: 3.00 },
  { name: "Celery", id: 11, price: 2.20 },
  { name: "Cucumber", id: 12, price: 1.80 },
  { name: "Zucchini", id: 13, price: 2.10 },
  { name: "Cauliflower", id: 14, price: 3.20 },
  { name: "Green Beans", id: 15, price: 3.80 },
  { name: "Asparagus", id: 16, price: 4.50 },
  { name: "Mushroom", id: 17, price: 4.00 },
  { name: "Eggplant", id: 18, price: 2.30 },
  { name: "Squash", id: 19, price: 2.40 },
  { name: "Radish", id: 20, price: 2.00 },
];

const Search = ({ onSearch }) => {  
  const [searchTerm, setSearchTerm] = useState("");
  const [isCaseSensitive, setIsCaseSensitive] = useState(false)

  useEffect(() => {
    console.log("[useEffect] isChecked: " + isCaseSensitive)
  }, [isCaseSensitive])

  const handleChange = (event) => {
    //console.log(event);
    setSearchTerm(event.target.value);
    onSearch(event.target.value, isCaseSensitive);
  }

  /* 
  The `handleKeyDown` function is only needed if we want to capture and compare
  special keys like 'Enter', 'Backspace', 'Shift', etc.
  */
  const handleKeyDown = (event) => {
    //alert("localSubmit: " + event.target.value);
    
    console.log("Key is: " + event.key);
    //if (event.key == 'Enter') onSearch(event);
  }

  const handleIsCaseSensitive = (event) => {    
    const isChecked = event.target.checked
    console.log("isChecked: " + isChecked + " term: " + searchTerm)
    setIsCaseSensitive(isChecked)
    onSearch(searchTerm, isChecked)
  }

  return (
    <div className='search-container'>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text" 
        value={searchTerm}
        onChange={handleChange} 
        onKeyDown = {handleKeyDown}
        placeholder='Type to filter products'
      />
      <label htmlFor="search-case" className="checkbox-label">    Case sensitive?
        <input 
          id="search-case" 
          type="checkbox" 
          onChange={handleIsCaseSensitive} 
          checked={isCaseSensitive} 
          aria-label="Toggle case-sensitive search"
        />
      </label>
    </div>
  );
};// const Search

const App = () => {
  const [count, setCount] = React.useState(0)  
  const [filterList, setFilterList] = useState(produces);

  const handleSearch = (searchTarget, isCaseSensitive) => {    
    
    //console.log("In App: " + searchTarget + " Len: " + searchTarget.length);
    
    setFilterList(produces.filter(item => isCaseSensitive
      ? item.name.includes(searchTarget)
      : item.name.toLowerCase().includes(searchTarget.toLowerCase()))   
    )

  };// handleSearch

  return (
    <>      
      <h1>Welcome to stacoin.io, built with React 19</h1>

      <Search onSearch={handleSearch} />

      <List list={filterList} listName="selected produces" />

      <MyButton count = {count} setCount={setCount} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <h2>{user.name}</h2>
      <img 
        className="avatar"
        src={user.imageUrl}
        style = {{width:user.imageSize, height:user.imageSize}}
      />

    </>
  );
}// const App

const List = (props) => {
  console.log("Passed list: " + props.list.map(item => item.name))
  return (
    <>
      <h2> Here is the list of {props.listName}</h2>
      <ol>
      {   
          props.list.length == 0 ? 
            <p> List is empty</p>
          :(
            props.list.map((item) =>
              <li key={item.id}>            
                <pre>Name: {item.name}         Price: {item.price}</pre>
              </li>
            )
          )
      }</ol>
    </>
  );
}// const List

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

{/*   Example User */}
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default App

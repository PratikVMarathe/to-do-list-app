import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setNewItem((prevItems) => [...prevItems, item]);
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="message"
          value={item}
          onChange={handleChange}
          type="text"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItem.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

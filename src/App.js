import "./App.css";
import React from "react";
import { data } from "./data";

function App() {
  const [persons, setPersons] = React.useState(data);

  const totalPersons = persons.length;

  const clear = () => {
    setPersons([]);
  };

  const removePerson = (id) => {
    let newPersons = persons.filter((person) => person.id !== id);
    setPersons(newPersons);
    console.log(newPersons);
  };

  return (
    <section className="container">
      <h1>{totalPersons} Birthdays Today</h1>
      <span>(click image to remove celebrant)</span>

      {persons.map((person) => {
        return (
          <div className="celebrant-info" key={person.id}>
            <img
              src={person.img}
              alt="img"
              onClick={() => removePerson(person.id)}
            />
            <div>
              <h4 className="name">{person.name}</h4>
              <p className="age">{person.age} years old</p>
            </div>
          </div>
        );
      })}
      <button onClick={() => clear()}>Clear All</button>
    </section>
  );
}

export default App;

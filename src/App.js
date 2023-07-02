import react, { Component } from "react";

function BasicInfo({ person }) {
  return (
    <div>
      <h1>Basic Information</h1>
      <p>Name: {person.name}</p>
      <p>Number: {person.number}</p>
      <p>Date of Birth: {person.birth}</p>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{
        name: "Success Odoemena",
        number: 123456789,
        birth: "00/00/0000",
      },
      {
        name: "Success Odoemena",
        number: 123456789,
        birth: "00/00/0000",
      },
      {
        name: "Success Odoemena",
        number: 123456789,
        birth: "00/00/0000",
      },
      {
        name: "Success Odoemena",
        number: 123456789,
        birth: "00/00/0000",
      },
      {
        name: "Success Odoemena",
        number: 123456789,
        birth: "00/00/0000",
      }
    ],
    };
  }

  render() {
    const { persons } = this.state;
    
    
    return (
      <div>
      {persons.map((person)=>
      (<BasicInfo person ={person}/>))}
      </div>
    );
  }
}

export default App;

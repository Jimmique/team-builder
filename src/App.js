import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';

function App() {

  const [ teamMembers, setTeamMembers ] = useState(
    [{
      name: 'Jimmique Parsons',
      email: 'jimmique88@gmail.com', 
      role: 'Web Developer'
    }]
  );

  const addNewMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="App">
    <h1>The Team</h1>
      {teamMembers.map( member => {
        return (
          <div>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        )
      })}
      <Form addNewMemeber={addNewMember} />
    </div>
  );
}

export default App;

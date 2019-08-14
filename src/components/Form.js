import React, { useState } from 'react';

 function Form(props) {

   const [ teamMember, setTeamMember ] = useState({
    name: "",
    email: "",
    role: ""
  });

   const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewMember(teamMember);
    setTeamMember({
      name: "",
      email: "",
      role: ""
    })
  };

   const handleChange = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value}); 
  };

   return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Member</h2>
      <label htmlFor="name" hidden>Name</label>
      <input
        type="text" 
        name="name" 
        placeholder="Name"
        value={teamMember.name}
        onChange={handleChange}
      />

       <label htmlFor="email" hidden>Email</label>
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={teamMember.email}
        onChange={handleChange} 
      />

       <label htmlFor="role" hidden>Role</label>
      <input 
        type="text" 
        name="role" 
        placeholder="Role" 
        value={teamMember.role}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

 export default Form;
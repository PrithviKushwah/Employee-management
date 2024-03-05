import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');
  const [skills, setSkills] = useState('');

  const submitDetails = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/employee' , {name , age  , hobby , skills}).then((response)=>{
       if(response.status === 200) {
        alert('data added')
        setName('');
        setAge('');
        setHobby('');
        setSkills('');
       }
       else console.log("error");
    }).catch(
        (e) => {
            console.log(e);
        }
    )
  }



  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
        id="name"
        required
      />
      <br />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        min="0"
        onChange={(event) => {
          setAge(event.target.value);
        }}
        value={age}
        id="age"
        required
      />
      <br />

      <label htmlFor="hobby">Hobby:</label>
      <input
        type="text"
        onChange={(event) => {
          setHobby(event.target.value);
        }}
        value={hobby}
        id="hobby"
        required
      />
      <br />

      <label>Skills:</label>
      <input
        type="text"
        onChange={(event) => {
          setSkills(event.target.value);
        }}
        value={skills}
        id="skills"
        required
      />
      <br />

      <button onClick={submitDetails}>Submit</button>
    </div>
  );
}

export default AddEmployee

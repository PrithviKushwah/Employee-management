import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';


function Home() {
    const [data , setData] = useState(null);
    const [id , setId] = useState(null);

    useEffect(()=>{
        getdata();
    }, [])
  const getdata = () => {axios.get('http://127.0.0.1:8000/api/employee' ) .then((response)=>{
    setData(response.data.msg);
    })}

    const deleteEmployee = (employeeId) => {
      axios.delete(`http://127.0.0.1:8000/api/employee/${employeeId}`)
        .then((response) => {
          if (response.status === 200) {
            alert('Employee deleted');
            getdata(); // Fetch updated data after deletion
          } else {
            console.log("Error deleting employee");
          }
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
        });
    };
  return (
    <div>
     {data ? (
  <table>
    <caption>Statement Summary</caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Hobby</th>
        <th scope="col">skills</th>
       
      </tr>
    </thead>
    <tbody>
      {data.map((employee) => (
        <tr key={employee.id}>  {/* Add a unique key for each row */}
          <td data-label="Name">{employee.name}</td>
          <td data-label="age">{employee.age}</td>  {/* Assuming 'age' represents due date */}
          <td data-label="hobby">{employee.hobby}</td>
          <td data-label="skills">{employee.skills}  {/* Join skills into comma-separated string */}</td>
          <button onClick={() => {
                    setId(employee.id);
                    deleteEmployee(employee.id);
                  }}>Delete</button>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>No data available</p>
)}

    </div>
  )
}

export default Home

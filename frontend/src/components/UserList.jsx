import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/userService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

const UserList = () => {
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const response = await getUsers()
      .then((data) => {
        setUsersList(data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {usersList && usersList.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserList
import React from "react";
import "./style.css";
import TableRow from "../TableRow"; 

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
          {props.users.map(user => <TableRow user={user} key={user.email}/>)}  
      </tbody>
    </table>
  );
}

export default Table;

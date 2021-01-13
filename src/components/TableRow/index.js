import React from "react";

function TableRow(props) {
  return <tr>
  <td><img alt={props.user.name} src={props.user.picture.medium} /></td>
  <td>{props.user.name.first} {props.user.name.last}</td>
  <td>
    {props.user.location.street.number} {props.user.location.street.name}
    {props.user.location.city} {props.user.location.state} {props.user.location.postcode}
  </td>
  <td>{props.user.phone}</td>
  <td>{props.user.email}</td>
  <td>{props.user.dob.age}</td>
  </tr>;
}

export default TableRow;

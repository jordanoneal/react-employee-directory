import React from "react";

const TableRow = (props) => {
  const [users, setUsers] = React.useState([]);

  return (
    <tr>
      <td>{props.name.first}</td>
      <td>{props.name.last}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>
        <img src={props.picture.thumbnail} alt="employee" />{" "}
      </td>
    </tr>
  );
};

export default TableRow;

import React from "react";

const TableHead = () => {
  const [users, setUsers] = React.useState([]);
  
  const handleClick = () => {

    users.sort()
    setUsers(users);
    
  }


  return (
    <tr>
      {/* <td onClick={() => users.sort()}>first name</td> */}
      <td onClick={() => users.sort()}>first name </td>
      <td onClick={() => handleClick}>last name</td>
      <td>phone</td>
      <td>email</td>
      <td>picture</td>
    </tr>
  );
};

export default TableHead;

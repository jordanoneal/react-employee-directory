import React, { useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import API from "../utils/API";

const Table = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    API.getUsers().then((data) => {
      setUsers(data.results);
    });
  }, []);

  useEffect(() => console.log(users), [users]);

  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow key={user.id.value} {...user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

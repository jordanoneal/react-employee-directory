import React, { useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import API from "../utils/API";
import Search from "./Search";

const Table = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    API.getUsers().then((data) => {
      setUsers(data.results);
    });
  }, []);

  useEffect(() => console.log(users), [users]);

  sortUsers = (users) => {
    users.sort();
  }

  return (
    <table>
      <thead>
        <TableHead onClick={() => sortUsers()}/>
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

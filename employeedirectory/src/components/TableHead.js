import React from "react";
import Sort from "./Sort";

const TableHead = () => {
  return (
    <tr>
      {/* <td onClick={() => users.sort()}>first name</td> */}
      <td>
        first name{" "}
        <Sort
          sortName="firstname"
          icon="alpha"
          setSort={setSort}
          sortHandler={sortHandler}
        />
      </td>
      <td>last name</td>
      <td>phone</td>
      <td>email</td>
      <td>picture</td>
    </tr>
  );
};

export default TableHead;

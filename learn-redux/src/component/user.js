/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useFetch from "../hooks/useFetch";

function user() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const [data, loading, error] = useFetch(url);
  console.log(data);
  return (
    <div>
      <h1>User List</h1>
      {loading && <p>...loading</p>}
      {data.map((item, i) => {
        return <p key={i}>{item.name}</p>;
      })}
    </div>
  );
}

export default user;

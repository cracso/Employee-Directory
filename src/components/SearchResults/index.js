import React from "react";
import "./style.css";

function SearchResults(props) {
  return (

    <table className="table">
  <thead>
    <tr>
      <th scope="col" onClick={() => props.sortName()}>First</th>
      <th scope="col" onClick={() => props.sortLast()}>Last</th>
      <th scope="col" onClick={() => props.sortEmail()}>Email</th>
      <th scope="col" onClick={() => props.sortAddress()}>Address</th>
    </tr>
  </thead>
  <tbody>
  {props.results.map(result => (
    <tr key={result.email} >
    <th scope="row">{result.first} </th>
    <td>{result.last}</td>
    <td>{result.email}</td>
    <td>{result.address}</td>
  </tr>
        
      ))}
  </tbody>
</table>
   
  );
}

export default SearchResults;

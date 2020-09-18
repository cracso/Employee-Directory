import React from "react";
import "./style.css";

function SearchResults(props) {
  return (

    <table class="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
  {props.results.map(result => (
    <tr key={result} >
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

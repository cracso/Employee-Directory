import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    employee: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employee: res.data }))
      .catch(err => console.log(err));
  }

  sortAddress = () => {
    function compare(a, b) {
      const userA = a.address.toUpperCase();
      const userB = b.address.toUpperCase();

      let comparison = 0;
      if (userA > userB) {
        comparison = 1;
      } else if (userA < userB) {
        comparison = -1;
      }
      return comparison;
    }

    this.setState({ employee: this.state.employee.sort(compare) });
  }

  sortName = () => {
    function compare(a, b) {
      const userA = a.first.toUpperCase();
      const userB = b.first.toUpperCase();

      let comparison = 0;
      if (userA > userB) {
        comparison = 1;
      } else if (userA < userB) {
        comparison = -1;
      }
      return comparison;
    }

    this.setState({ employee: this.state.employee.sort(compare) });
  };

  sortLast = () => {
    function compare(a, b) {
      const userA = a.last.toUpperCase();
      const userB = b.last.toUpperCase();

      let comparison = 0;
      if (userA > userB) {
        comparison = 1;
      } else if (userA < userB) {
        comparison = -1;
      }
      return comparison;
    }

    this.setState({ employee: this.state.employee.sort(compare) });
  };

  sortEmail = () => {
    function compare(a, b) {
      const userA = a.email.toUpperCase();
      const userB = b.email.toUpperCase();

      let comparison = 0;
      if (userA > userB) {
        comparison = 1;
      } else if (userA < userB) {
        comparison = -1;
      }
      return comparison;
    }

    this.setState({ employee: this.state.employee.sort(compare) });
  };

  handleInputChange = event => {
    const filter = event.target.value;
    console.log(event.target.value)
   

    const filteredList = this .state.employee.filter(employee => {
      let values = Object.values(employee).join("").toLowerCase();
      console.log(values);
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
      this.setState({employee: filteredList })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.employee}
          />
          <SearchResults
            sortAddress={this.sortAddress}
            sortName={this.sortName}
            sortLast={this.sortLast}
            sortEmail={this.sortEmail}
            results={this.state.employee} />
        </Container>
      </div>
    );
  }
}

export default Search;

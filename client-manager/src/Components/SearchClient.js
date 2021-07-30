import React, { useState, useEffect } from "react";
import "./Search.css";
import Scroll from "./Scroll";
import SearchCard from "./Card";

function Search({ clients, isLoading }) {
  const [searchField, setSearchField] = useState("");

  //   function filteredPersons() {
  //     return clients.filter((person) => {
  //       return (
  //         person.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.last_name.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.phone.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.city.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.state.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.car_number.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.cnp.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.street.toLowerCase().includes(searchField.toLowerCase()) ||
  //         person.street_number
  //           .toString()
  //           .toLowerCase()
  //           .includes(searchField.toLowerCase())
  //       );
  //     });
  //   }

  const filteredPersons = clients.filter((person) => {
    return (
      person.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.last_name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.phone.toLowerCase().includes(searchField.toLowerCase()) ||
      person.city.toLowerCase().includes(searchField.toLowerCase()) ||
      person.state.toLowerCase().includes(searchField.toLowerCase()) ||
      person.car_number.toLowerCase().includes(searchField.toLowerCase()) ||
      person.cnp.toLowerCase().includes(searchField.toLowerCase()) ||
      person.street.toLowerCase().includes(searchField.toLowerCase()) ||
      person.street_number
        .toString()
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    if (!clients) return <h3>Loading data ...</h3>;

    if (searchField === "") return <h2>No search criterias currently</h2>;
    else if (filteredPersons().length === 0)
      return <h3>No results found for your search</h3>;
    else
      return (
        <Scroll>
          <ul>
            {filteredPersons.map((client) => (
              <SearchCard client={client} />
            ))}
          </ul>
        </Scroll>
      );
  }

  return (
    <div>
      <div>
        <h1>Search your clients</h1>
        <input
          type="search"
          placeholder="Search clients"
          onChange={handleChange}
        />
      </div>
      {<SearchCard client={client} />}
    </div>
  );
}

export default Search;

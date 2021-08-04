import React, { useState } from "react";
import "./Search.css";
import Scroll from "./Scroll";
import SearchCard from "./SearchCard";

function Search({ clients, isLoading }) {
  const [searchField, setSearchField] = useState("");

  const filteredClients = clients.filter((person) => {
    return (
      (person.first_name &&
        person.first_name.toLowerCase().includes(searchField.toLowerCase())) ||
      (person.last_name &&
        person.last_name.toLowerCase().includes(searchField.toLowerCase())) ||
      (person.car_number &&
        person.car_number.toLowerCase().includes(searchField.toLowerCase())) ||
      (person.street &&
        person.street.toLowerCase().includes(searchField.toLowerCase())) ||
      (person.phone && person.phone.includes(searchField)) ||
      (person.state &&
        person.state.toLowerCase().includes(searchField.toLowerCase())) ||
      (person.city &&
        person.city.toLowerCase().includes(searchField.toLowerCase())) ||
      (person.cnp && person.cnp.includes(searchField)) ||
      (person.street_number && person.street_number.includes(searchField))
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    if (!clients) return <h3>Loading data ...</h3>;

    if (searchField === "") return <h2>No search criterias currently</h2>;
    else if (filteredClients.length === 0)
      return <h3>No results found for your search</h3>;
    else
      return (
        <Scroll>
          <ul>
            {filteredClients.map((client) => (
              <div key={client.id}>
                <SearchCard client={client} clients={clients} />
              </div>
            ))}
          </ul>
        </Scroll>
      );
  }
  if (clients) console.log(clients);
  return (
    <div>
      <div>
        <h1>Search your clients</h1>
        <input
          className="search-bar"
          type="search"
          placeholder="Search clients"
          onChange={handleChange}
        />
      </div>

      {searchList()}
    </div>
  );
}

export default Search;

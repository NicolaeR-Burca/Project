import React from "react";
import Card from "./Card";

export default function Home({ clients, isLoading }) {
  return (
    <div>
      <h1>Available Clients </h1>
      {isLoading && <h1>Loading ...</h1>}
      {clients.length !== 0 && (
        <ul>
          {clients.map((client) => (
            <div key={client.id}>
              <Card client={client} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

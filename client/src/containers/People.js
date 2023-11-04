import React, { useState, useEffect } from "react";

function People() {
  const [people, setPeople] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch("/api/persons")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div>
      <h1>People</h1>
      {/* TODO: Add filter by different qualities */}
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default People;

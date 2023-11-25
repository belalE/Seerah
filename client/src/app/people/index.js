import React, { useState, useEffect } from "react";
import Button from "@/components/UI/Button/Button";
import PersonForm from "@/components/PersonForm/PersonForm";

function People() {
  const [people, setPeople] = useState([]);
  // const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch("/api/persons")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  let deletePerson = (id) => {
    fetch(`/api/persons/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setPeople(people.filter((person) => person.id !== id));
      });
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl">People</h1>
      <PersonForm people={people} />
      {/* TODO: Add filter by different qualities */}
      {/* TODO: Create circles with names in calligraphy, with x in corner to delete for admin */}
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}{" "}
            <Button
              styleChoice="tertiary"
              clicked={() => deletePerson(person.id)}
            >
              Delete Person
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default People;

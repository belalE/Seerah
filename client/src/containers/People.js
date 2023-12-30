import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button/Button";

function People() {
  const data = useLoaderData();
  const [people, setPeople] = useState(data);

  // const [filters, setFilters] = useState({});

  // TODO: Maybe add pop up to confirm delete
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
      <Button styleChoice="primary">
        <Link to={`/people/new`}>Add Person</Link>
      </Button>

      {/* <PersonForm people={people} /> */}
      {/* TODO: Add filter by different qualities */}
      {/* TODO: Create circles with names in calligraphy, with x in corner to delete for admin */}
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/people/${person.id}`}>{person.name + " "}</Link>
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

export async function loader() {
  const response = await fetch("/api/persons");
  const data = await response.json();
  return data;
}

export default People;

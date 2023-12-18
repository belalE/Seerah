import React from "react";
import Button from "@/components/UI/Button/Button";

async function People(props) {
  const people = await getData();
  console.log(people);
  let deletePerson = (id) => {
    fetch(`/api/persons/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl">People</h1>
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

async function getData() {
  const res = await fetch("http://localhost:3001/api/persons");
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default People;

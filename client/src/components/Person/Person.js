import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const PersonComponent = (props) => {
  const person = useLoaderData();
  console.log("person: ", person);
  return (
    <div className="p-4 bg-white shadow rounded">
      <Button styleChoice="primary">
        <Link to={`/people/`}> &#x25c0; People </Link>
      </Button>

      <Button styleChoice="secondary">
        <Link to={`/people/${person.id}/edit`}>Edit Person</Link>
      </Button>
      {/* TODO: Add Image */}
      <h2 className="text-2xl font-bold mt-2">{person.name}</h2>
      <p className="text-gray-700">{person.description}</p>
      <p className="text-sm text-gray-500">Full Name: {person.fullName}</p>
      <p className="text-sm text-gray-500">
        Birth:{" "}
        {person.birth ? new Date(person.birth).toLocaleDateString() : "N/A"}
      </p>
      <p className="text-sm text-gray-500">
        Death:{" "}
        {person.death ? new Date(person.death).toLocaleDateString() : "N/A"}
      </p>
      <p className="text-sm text-gray-500">Tribe: {person.tribe}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Tags:</h3>
        <div className="flex flex-wrap">
          {person.tags?.map((tag, index) => (
            <span
              key={index}
              className="m-1 text-xs text-white bg-blue-500 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* TODO: Populate mother, father, spouses, and children fields on server and add relevant links */}
    </div>
  );
};

export async function loader({ params }) {
  const res = await fetch(`/api/persons/${params.id}`);
  const data = await res.json();
  return data[0];
}

export default PersonComponent;

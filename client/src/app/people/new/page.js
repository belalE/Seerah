"use client";

import React, { useEffect, useState, FormEvent } from "react";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import SearchMultipleInput from "@/components/UI/SearchMultipleInput/SearchMultipleInput";
import axios from "axios";

const PersonForm = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [children, setChildren] = useState("");
  const [description, setDescription] = useState("");
  const [tribe, setTribe] = useState("");
  const [tags, setTags] = useState("");
  const [people, setPeople] = useState([]);

  const tribeOptions = [
    {
      id: "0",
      name: "Quraysh",
    },
    {
      id: "1",
      name: "Aws",
    },
    {
      id: "2",
      name: "Khazraj",
    },
  ];
  const tagOptions = [
    {
      id: "0",
      name: "Muhajir",
    },
    {
      id: "1",
      name: "Ansari",
    },
    {
      id: "2",
      name: "Mubashar Bil-Jana",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: implement axios for implementation with backend
    let person = {
      name: name,
      fullName: fullName,
      father: father,
      mother: mother,
      children: children,
      description: description,
      tribe: tribe,
      tags: tags,
    };

    const formData = new FormData(event.target);
    console.log("form Data: ", formData);
    const response = await fetch("/api/persons", {
      method: "POST",
      body: person,
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetch("/api/persons")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center font-extrabold text-3xl">Add Person</h1>
      <Input
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        label="Full Name"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
      <Input
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <SearchInput
        label="Tribe"
        options={tribeOptions}
        onChangeHandler={(option) => setTribe(option.name)}
      />
      <SearchInput
        label="Father"
        options={people}
        onChangeHandler={(option) => setFather(option.id)}
      />
      <SearchInput
        label="Mother"
        options={people}
        onChangeHandler={(option) => setMother(option.id)}
      />

      {/* TODO: Create separate search input that accepts multiple tags and multiple children */}
      <SearchMultipleInput
        label="Tags"
        options={tagOptions}
        onChangeHandler={(options) => setTags(options)}
      />
      <SearchMultipleInput
        label="Children"
        options={people}
        onChangeHandler={(options) => setChildren(options)}
      />
      <Button styleChoice="primary">Submit</Button>
    </form>
  );
};

export default PersonForm;

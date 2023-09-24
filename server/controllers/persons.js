const Person = require("../models/person");

module.exports.index = async (req, res) => {
  const persons = await Person.find({});
  res.send(persons);
};

module.exports.getPerson = async (req, res) => {
  const person = await Person.find({ _id: req.params.id });
  res.send(person);
};

module.exports.createPerson = async (req, res) => {
  console.log(req.body);
  const person = new Person(req.body.person);
  await person.save();
  res.send(person);
};

module.exports.deletePerson = async (req, res) => {
  const person = await Person.findByIdAndDelete(req.params.id);
  res.send(person);
};

const express = require("express");
const router = express.Router();
const persons = require("../controllers/persons");
const catchAsync = require("../utils/catchAsync");

router
  .route("/")
  .get(catchAsync(persons.index))
  .post(catchAsync(persons.createPerson));

router
  .route("/:id")
  .get(catchAsync(persons.getPerson))
  .delete(catchAsync(persons.deletePerson));

module.exports = router;

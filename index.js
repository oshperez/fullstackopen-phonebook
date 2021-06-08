require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

const app = express();

app.use(cors()); // Allows requests from other origins
app.use(express.static("build")); // Allows Express to show static content
app.use(express.json());

//Logger middleware
morgan.token("response-body", (req, res) => {
  const string = JSON.stringify(req.body);
  return string;
});

app.use(
  morgan((tokens, req, res) => {
    let line = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ];
    if (line[0] === "POST") {
      line = line.concat(tokens["response-body"](req, res));
    }
    return line.join(" ");
  })
);

//Routes
app.get("/api/persons", (request, response) => {
  Person.find({}).then((people) => {
    response.json(people);
  });
});

app.get("/api/info", (request, response, next) => {
  const date = new Date();
  Person.countDocuments({}, (err, count) => {
    if (err) {
      next(err);
    } else {
      const info = `<div><p>Phonebook has info for ${count} people</p><p>${date}<p/></div>`;
      response.send(info);
    }
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findById(id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((err) => next(err));
});

app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Person.findByIdAndRemove(id)
    .then((result) => {
      console.log(result);
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  } else {
    const person = new Person({
      name: body.name,
      number: body.number,
    });

    person
      .save()
      .then((savedPerson) => savedPerson.toJSON())
      .then((savedAndFormattedPerson) => {
        response.json(savedAndFormattedPerson);
      })
      .catch((error) => next(error));
  }
});

app.put("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(id, person, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedPerson) => updatedPerson.toJSON())
    .then((updatedAndFormatedPerson) => {
      response.json(updatedAndFormatedPerson);
    })
    .catch((error) => next(error));
});

//Unknown endpoint middleware
const unknownEndpoint = (request, response, next) => {
  response.status(404).send({ error: "unknown endpoint" });
  next();
};

app.use(unknownEndpoint);

//Error handler middleware
const errorHandler = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformated id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mongoose = require("mongoose");

// I used mondoDB locally and did not set up auth method
const url = "mongodb://127.0.0.1:27017/phonebook";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 2) {
  async function fetchPeople() {
    const people = await Person.find({});
    console.log("phonebook:");
    people.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  }

  fetchPeople();
}

if (process.argv.length > 2) {
  const [personName, personNumber] = [process.argv[2], process.argv[3]];

  const person = new Person({
    name: personName,
    number: personNumber,
  });

  person.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}



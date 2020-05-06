const express = require("express");
const server = express();

let users = [
  {
    id: 1,
    name: " kolade",

    bio: " short",
  },
  {
    id: 2,
    name: " John",

    bio: " tall",
  },
  
  {
    id: 3,
    name: " Luke",

    bio: " fat",
  },
];

//endpoints
server.get("/", (req, res) => {
  res.json({ api: "running...." });
});
server.get("/api/users", (req, res) => {
  if (!users) {
    res
      .status(500)
      .json({ errorMessage: "The users information could not be retrieved." });
  } else {
    res.status(200).json(users);
  }
});

server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  if (!users) {
    res
      .status(500)
      .json({ errorMessage: "The user information could not be retrieved." });
  } else {
    // const user = users.find((user) => user.id == id);

    // if (user) {
    //   res.status(200).json(users);
    // } else {
    res
      .status(404)
      .json({ message: "The user with the specified ID does not exist." });
  }
});

server.post("/api/users", (req, res) => {
  const userInfo = req.body;
  console.log("userInfo", userInfo);
  if (userInfo.name && userInfo.bio) {
    users.push(userInfo);

    if (
      users[users.length - 1].name === userInfo.name &&
      users[users.length - 1].bio === userInfo.bio
    ) {
      res.status(201).json(users);
    } else {
      res
        .status(500)
        .json({
          errorMessage:
            "There was an error while saving the user to the database",
        });
    }
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user" });
  }
});


const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port}==\n`));

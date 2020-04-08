const express = require("express")
const server = express();

let users = [
    {
      id: 1,
      name: "",
      
      bio: "",
    },
  ];

//endpoints
server.get('/', (req, res) => {
    res.json({ api:"running...."});
});
server.get("/api/hubs", (req, res) => {
    res.json(hubs);
  });
  
  server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
  
    const user = users.find((user) => user.id == id);
  
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "Please provide name and bio for the user." });
    }
  });
  
  server.post("/api/users", (req, res) => {
    const userInfo = req.body;
  
    hubs.push(userInfo);
  
    res.status(201).json(users);
  });



const port = 5000;
server.listen(port, () => console.log(`\n== api on port ${port}==\n`));


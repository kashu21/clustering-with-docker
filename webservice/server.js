const express = require("express");
const os = require("os");

const app=express();

app.get("/", (req, res) => {
    res.send("Hello from Swarm " + os.hostname()); //os.hostname()--Returns the hostname of the operating system.
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

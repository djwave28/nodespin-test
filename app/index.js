// const app = require("express")();

const express = require('express')
const app = express()


const port = 8080

app.get("/", (req, res) => res.send("hello from a lightweight docker container"))

app.listen(port, () => console.log(`Listening on ${port}`));
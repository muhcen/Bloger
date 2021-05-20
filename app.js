const express = require("express");
const db = require("./config/config");
const app = express();

app.use(express.json({ limit: "200kb" }));

const blogerRouter = require("./router/blogerRoute");

app.use("/api/v1/bloger", blogerRouter);
app.listen(5000, () => console.log("listening on port 5000"));

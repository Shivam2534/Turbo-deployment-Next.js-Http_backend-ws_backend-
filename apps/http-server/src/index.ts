import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/signup", async (req, res) => {
  console.log("req.body->",req.body)
  const { username, password } = req.body;
  console.log("username-", username, "password-", password);
  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "Signup successful",
    id: user.id,
  });
});

app.listen(3002);

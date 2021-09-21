import express from "express";

const app = express();

app.get("/", (req, res) => {
  const { ip, headers, cookies, method } = req;
  console.table({ ip, headers, cookies, method });
  return res.json({ message: "hello jelly head" });
});

app.listen(3333, () => console.log("server's up"));

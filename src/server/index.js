import { randomUUID } from "crypto";
import express, { json } from "express";

const app = express();
app.use(json());

function logRequest(request, response, next) {
  const { method, url, ip, readable } = request;

  const logLabel = `[${method.toUpperCase()}]${url}]`;

  console.time(logLabel);
  next();
  console.timeEnd(logLabel, { url, ip, readable });
}

app.use(logRequest);

const data = [
  { id: "dfi2389r", prod: "shirt", price: 100 },
  { id: "df8273g8", prod: "shades", price: 120 },
];

app.get("/", (req, res) => {
  return res.json({ message: "hello jelly head" });
});

app.get("/all", (req, res) => {
  return res.json(data);
});

app.post("/product", (req, res) => {
  const id = randomUUID();
  const { prod, price } = req.body;

  console.log(req.body);
  const product = { id, prod, price };

  data.push(product);

  return res.status(200).send("success");
});

app.listen(3333, () => console.log("server's up"));

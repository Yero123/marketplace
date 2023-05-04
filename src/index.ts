import express from "express";
import routerApi from "./routes";
import bodyParser from "body-parser";
import { boomErrorHandler } from "./middlewares/boomHandler";

const app = express();
const port = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get("/", (req, res) => {
  res.send({ message: "Hola mi server en Express" });
});

routerApi(app);
app.use(boomErrorHandler);
app.listen(port, () => {
  console.log("My port: " + port);
});

import express from "express";
import config from "./config";
import router from "./routes";

const app = express();
const port = config.port;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

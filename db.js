import mysql from "mysql";
import { config } from "dotenv";
config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

async function start() {
  const dataToCheck = connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Connected to MYSQL! connection thread ID:" + connection.threadId);


    const app = require("./app");
    app.listen(process.env.PORT);
    console.log(dataToCheck.toString());
  });
}

start();

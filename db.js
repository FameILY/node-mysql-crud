const mysql = require("mysql");
const { config } = require("dotenv");
config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

async function start() {
    try {
        connection.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
           
            console.log('connected as id ' + connection.threadId);
            module.exports = connection
            const app = require ("./app")
            app.listen(process.env.PORT, ()=> {
                console.log("Server Listening on port "+process.env.PORT);
            })

            connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
                if (error) throw error;
                console.log('The solution is: ', results[0].solution);
              });
               
              connection.end();
          });

    } catch (e) {
        console.log(e)
    }


    module.exports = connection
}

start();

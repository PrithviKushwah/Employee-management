
import mysql from "mysql";

export const dbConnection = () =>{

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: ""
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Mysql Connected!");
    });
}



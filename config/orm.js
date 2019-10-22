let connection = require("../config/connection.js");

printQuestionMarks = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

objectToSQL = (obj) => {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
}
let orm = {
    all: (tableInput, cb) => {
        let query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    create: (table, cols, vals, cb) => {
        let query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "values (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);
        connection.query(query, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    update: (table, objCols, con, cb) => {
        let query = " update " + table;
        query += " set devoured = true";
        // query += objectToSQL(objCols);
        query += " where ";
        query += con;

        console.log(query);
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM  " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    Devoured: function (table, condition, cb) {
        var queryString = "DELETE FROM  " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

module.exports = orm;
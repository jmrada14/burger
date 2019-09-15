let connection = require('../config/connection');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

let orm = {
    all: function (table, cb) {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    create: function (table,column,values,cb) {
        let columnString = column.toString();
        let valuesString = "'"+values +"'";
        let queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + values + "'" + ');'
        console.log(queryString)
        connection.query(queryString, values, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    update: function  (table, column,newValue,condition, cb) {


        let queryString = 'UPDATE ' + table + ' SET ' + column + '=' + newValue + ' WHERE ' + condition + ';'

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    delete: function (table, condition, cb) {
        let queryString = 'DELETE FROM ' + table;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};


module.exports = orm;
let mysql = require('mysql');
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSD_URL);
}else {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'juan',
        password: 'juan',
        database: 'burgers_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

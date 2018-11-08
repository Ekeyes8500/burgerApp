//require connection file
var connection = require("./connection.js");

//orm object to be exported
var orm = {
    //handles initial display of all mysql entries
    selectAll: function(cb) {
        var queryString = "SELECT * from burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    //handles inserting new burger data
    insertOne: function(name, status, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, {
            burger_name: name, 
            devoured: status}, 
            function(err, result){
            if (err) throw err;
            cb(result);
        })

    },
    //handles all update queries
    updateOne: function(id, status, cb) {
        queryString = "UPDATE burgers SET ? WHERE ?"
        connection.query(queryString, [{devoured: status}, {id: id}], function(err, results){
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;
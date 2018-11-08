//orm dependency 
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll( function (res) {
            cb(res);
        })
    },
    create: function (name, status, cb) {
        orm.insertOne(name, status, function(res){
            cb(res);
        })
    },
    update: function(id, status, cb) {
        orm.updateOne(id, status, function(res){
            cb(res);
        }) 
    }
}

module.exports = burger;
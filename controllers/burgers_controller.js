var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
        var dataObject = {
            burger: data
        };
        res.render("index", dataObject)
    });
});



router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    burger.create(req.body.burger_name, req.body.devoured, function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {

    burger.update(req.params.id, req.body.devoured, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    
});

module.exports = router;
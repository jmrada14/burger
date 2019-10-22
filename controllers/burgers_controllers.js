let express = require("express");
let router = express.Router();
let burger = require("../models/burger");
router.get("/", function(req, res) {
    burger.all(function(data) {
        let burObj = {
            burgers : data
        };
        // console.log(burObj);
        res.render("index", burObj);
    });
});
router.get("/api/burger" , (req, res) => {
    burger.all((data) => {
        res.json(data)
    })
})
router.post("/api/burger", function(req, res) {
    burger.create(["burger_name"], [req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});
router.put("/api/burger/:id", function(req, res) {
    console.log(req.params.id)
    let con = "id = " + req.params.id;
    console.log(req.body.devoured)
    burger.update({
        devoured : req.body.devoured
    }, con, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// router.delete("/api/burger/:id", function(req, res) {
//     let con = "id = " + req.params.id;
//     // console.log("condition", con);
//     burger.delete(con, function(result) {
//
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
//
// });

// router.delete("/api/devoured", function(req, res) {
//     let condition = " devoured = true " ;
//     burger.deleteDevoured(condition,  function(result) {
//         res.status(200).end();
//     });
//
// });
module.exports = router;

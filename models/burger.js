let orm = require("../config/orm.js");

let burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        })
    },
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objCols, con, cb) => {
        orm.update("burgers", objCols, con, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;
const express = require("express");
const router = express.Router();
const blogs = require("../services/blogs");

router.get("/:id", async (req, res) => {
    try {
        res.json(await blogs.getSingle(req.params.id));
    } catch (err) {
        console.log(err.message);
    }
});

router.get("/", async (req, res) => {
    try {
        res.json(await blogs.getMultiple());
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;

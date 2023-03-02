const express = require("express");
const router = express.Router();
const blogs = require("../services/blogs");

router.get("/", async (req, res, next) => {
    try {
        res.json(await blogs.getMultiple());
    } catch (err) {
        console.error("Error while getting blogs ", err.message);
        next(err);
    }
});

module.exports = router;

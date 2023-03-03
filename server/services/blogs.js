const db = require("./db");
const config = require("../config");

async function getPaged(page) {
    const limit = page * config.listPerPage;
    const data = await db.query(
        `SELECT * FROM blogs LIMIT ${limit}, ${config.listPerPage}`
    );
    const meta = { page: page };

    return { data, meta };
}

async function getMultiple() {
    const data = await db.query("SELECT * FROM blogs");
    const meta = { page: 1 };

    return { data, meta };
}

async function getSingle(id) {
    const data = await db.query(
        `SELECT * FROM blogs WHERE ('id' = ${id}) LIMIT 0, 1`
    );
    const meta = { page: 1 };

    return { data, meta };
}

module.exports = {
    getMultiple,
    getPaged,
    getSingle,
};

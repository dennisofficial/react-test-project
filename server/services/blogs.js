const db = require("./db");

async function getMultiple() {
    const data = await db.query("SELECT * FROM blogs");
    const meta = { page: 1 };

    return {
        data,
        meta,
    };
}

module.exports = {
    getMultiple,
};

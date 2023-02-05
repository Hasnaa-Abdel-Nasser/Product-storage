
import { createConnection } from "mysql2";

const query = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "productsystem",
});

export default query;
import sqlite from "better-sqlite3";

const db = new sqlite("./database.db");
export default db;

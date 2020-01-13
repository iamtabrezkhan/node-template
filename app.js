// ================= import dependencies ===================
const express = require('express');
const app = express();
const server = require('./core');
const port = process.env.PORT || 5000;
const database = require('./loader/database');
// ==========================================================

// ============= run the server =============================
// initialize the app (load middlewares, routes etc...)
server.init(app, port);

// ============== connect to MongoDB ========================
database.connect();
// ==========================================================
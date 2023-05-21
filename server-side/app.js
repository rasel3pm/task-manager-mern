const express = require("express");
const app = express();
const router = require("./src/router/router")
const bodyParser = require("body-parser");
const morgan = require("morgan")
//Security Middleware import
// const mongoSanitize = require("mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const cors = require("cors");
const mongodb = require("./src/database/DB-connect");
//req rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// app.use(mongoSanitize());
app.use(helmet());
app.use(limiter);
app.use(hpp());
app.use(xss());
app.use(morgan("dev"))
app.use(
    cors({
        origin: "*",
    })
);
mongodb()
app.use("/api/v1",router);

app.use("*", (req, res) => {
    res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;

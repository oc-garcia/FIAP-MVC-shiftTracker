var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const methodOverride = require("method-override");
const port = process.env.PORT || 3002;

var indexRouter = require("./routes/index");
var userRenderRouter = require("./routes/userRender");
var shiftRenderRouter = require("./routes/shiftRender");
var userApiRouter = require("./routes/userApi");
var shiftApiRouter = require("./routes/shiftApi");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/user", userRenderRouter);
app.use("/shift", shiftRenderRouter);
app.use("/api/user", userApiRouter);
app.use("/api/shift", shiftApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const server = app.listen(port, () => console.log(`Shift Tracker listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

module.exports = app;

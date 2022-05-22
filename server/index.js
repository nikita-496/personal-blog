const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const path = require("path");

const cors = require("cors");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");

const cookieParser = require("cookie-parser");

app.use(express.json());

//Handle options credentials check - before CORS!
//and fetch cookies credentials requirement
app.use(credentials);

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

//middleware for cookie
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "static")));
//routes
app.use("/api/v1/register", require("./routes/register.routes"));
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/refresh", require("./routes/refresh.routes"));
app.use("/api/v1/logout", require("./routes/logout.routes"));
app.use("/api/v1/user", require("./routes/user.routes"));

app.use("/api/v1/post", require("./routes/post.routes"));
app.use("/api/v1/image", require("./routes/image.routes"));
app.use("/api/v1/relationship", require("./routes/relationship.routes"));
app.use("/api/v1/forum", require("./routes/forum.routes"));
app.use("/api/v1/comment", require("./routes/comment.routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

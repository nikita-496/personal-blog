const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");

app.use(express.json());

//Handle options credentials check - before CORS!
//and fetch cookies credentials requirement
app.use(credentials);

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

//middleware for cookie
app.use(cookieParser());

//routes
app.use("/api/v1/register", require("./routes/register.routes"));
app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/refresh", require("./routes/refresh.routes"));
app.use("/api/v1/logout", require("./routes/logout.routes"));
app.use("/api/v1/user", require("./routes/user.routes"));

//app.use(verifyJWT);
app.use("/api/v1/post", require("./routes/post.routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

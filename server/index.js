const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const verifyJWT = require("./middleware/verifyJWT");

app.use(express.json());

//routes
app.use("/api/v1/register", require("./routes/register.routes"));
app.use("/api/v1/auth", require("./routes/auth.routes"));

app.use(verifyJWT);
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/post", require("./routes/post.routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

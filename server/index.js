const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

//routes
app.use("/api/v1", require("./routes/auth.routes"));

app.use("/api/v1", require("./routes/user.routes"));
app.use("/api/v1", require("./routes/post.routes"));
app.use("/api/v1", require("./routes/register.routes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

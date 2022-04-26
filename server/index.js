const express = require("express");
const app = express();

const userRouter = require("./routes/user.routes");

const dotenv = require("dotenv");
dotenv.config();

app.use("/api/v1", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

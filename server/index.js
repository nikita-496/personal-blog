const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

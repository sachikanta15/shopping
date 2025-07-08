import "dotenv/config";
const port = process.env.PORT;

import app from "./app";

app.listen(port, () => {
  console.log(`Server is Runnning in port ${port}`);
});

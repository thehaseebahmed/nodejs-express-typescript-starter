import dotenv from "dotenv";
import path from "path";

(function () {
  // Set the env file
  const env = process.env.NODE_ENV ?? "development";
  const result = dotenv.config({
    debug: env === "development",
    path: path.join(__dirname, `configs/${env}.env`),
  });

  if (result.error) {
    throw result.error;
  }
})();

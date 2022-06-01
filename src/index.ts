import "./pre-start"; // Must be the first import

import logger from "jet-logger";

import server from "./server";

// Constants
const port = process.env.PORT || 3000;

// Start server
server.listen(port, () => {
  logger.info(`Express server started on port: ${port}` );
  logger.info(`You can test the ping endpoint at http://localhost:${port}/api/health-check` );
});

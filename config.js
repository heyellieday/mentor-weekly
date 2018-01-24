exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  "mongodb://localhost/mentor-weekly";
exports.PORT = process.env.PORT || 8080;
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/test-mentor-weekly";
exports.PORT = process.env.PORT || 8080;

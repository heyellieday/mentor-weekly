exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  "mongodb://localhost/mentor-weekly";
exports.PORT = process.env.PORT || 8080;
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/test-mentor-weekly";
exports.API_URL = "MentorWeeklyUrl"; // "http://localhost:8080" if running locally
exports.AUTH0_CLIENT_ID = "Auth0Id";
exports.API_AUDIENCE = "http://localhost:8080/" || "AuthApiMentorWeeklyUrl";
exports.ADMIN_EMAIL = process.env.ADMIN_EMAIL;
exports.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

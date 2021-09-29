require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    // backend
    MONGO_URI: `mongodb+srv://jglee91:${process.env.DB_PASSWORD}@study.mtewc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

    // frontend
    KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
  },
};

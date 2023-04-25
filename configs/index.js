require('dotenv').config();

const {
  OPENAI_API_KEY,
  OPEANAI_MAX_TOKENS,
  OPENAI_CONTENT,
} = process.env;

module.exports = {
  OPENAI_API_KEY,
  OPEANAI_MAX_TOKENS,
  OPENAI_CONTENT,
};

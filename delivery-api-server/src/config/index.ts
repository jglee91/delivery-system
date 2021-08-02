import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if (env.error) {
  throw new Error("Could't find .env file.");
}

export default {
  /**
   * Server Port
   */
  port: parseInt(process.env.PORT || '4000', 10),

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};

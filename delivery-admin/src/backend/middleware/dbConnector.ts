import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

type handlerType = (req: NextApiRequest, res: NextApiResponse<any>) => any;

const dbConnector = (handler: handlerType) => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState) {
    // Use current DB connection
    return handler(req, res);
  }
  // Use new DB connection
  await mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return handler(req, res);
};

export default dbConnector;

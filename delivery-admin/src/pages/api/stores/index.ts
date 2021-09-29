import { NextApiRequest, NextApiResponse } from 'next';

import dbConnector from 'backend/middleware/dbConnector';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      break;

    case 'POST':
      break;

    case 'PUT':
      break;

    case 'DELETE':
      break;

    default:
      res.status(405).json({ message: 'not allowed method' });
  }
};

export default dbConnector(handler);

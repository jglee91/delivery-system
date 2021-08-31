import { NextApiRequest, NextApiResponse } from 'next';

import dbConnector from 'backend/middleware/dbConnector';
import validateRequest from 'backend/utils/validateRequest';

import { createUserSchema } from 'backend/schema/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      break;

    case 'POST':
      await validateRequest(req, createUserSchema);

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

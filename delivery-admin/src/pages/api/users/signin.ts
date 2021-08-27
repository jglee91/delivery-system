import { NextApiRequest, NextApiResponse } from 'next';

import dbConnector from 'backend/middleware/dbConnector';
import validateRequest from 'backend/middleware/validateRequest';

import { createUserSchema } from 'backend/schema/user';
import { validatePassword } from 'backend/services/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { isValid, messages } = await validateRequest(req, createUserSchema);

      if (!isValid) {
        return res.status(400).json({ message: JSON.stringify(messages) });
      }

      const user = await validatePassword(req.body);

      if (!user) {
        return res.status(401).json({ message: 'Invalid id or password' });
      }

      break;

    default:
      res.status(405).json({ message: 'not allowed method' });
  }
};

export default dbConnector(handler);

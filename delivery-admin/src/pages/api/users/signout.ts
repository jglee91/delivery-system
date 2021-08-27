import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
    case 'POST':
      break;

    default:
      res.status(405).json({ message: 'not allowed method' });
  }
};

export default handler;

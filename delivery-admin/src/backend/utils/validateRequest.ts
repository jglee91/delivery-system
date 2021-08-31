import { NextApiRequest } from 'next';
import { AnySchema } from 'yup';

const validateRequest = async (req: NextApiRequest, schema: AnySchema) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
    });
    return { isValid: true, messages: [] };
  } catch (e) {
    return { isValid: false, messages: e.errors };
  }
};

export default validateRequest;

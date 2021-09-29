import jwt from 'jsonwebtoken';

// FIXME - remove hard coding
const privateKey = 'test123';

export const sign = (object: Object, options?: jwt.SignOptions) => {
  return jwt.sign(object, privateKey, options);
};

export const decode = (token: string) => {
  try {
    const decoded = jwt.verify(token, privateKey);
    return { valid: true, expired: false, decoded };
  } catch (e) {
    return { valid: false, expired: e.message === 'jwt expired', decoded: null };
  }
};

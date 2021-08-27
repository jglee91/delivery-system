import { DocumentDefinition, FilterQuery } from 'mongoose';
import User, { UserDocument } from 'backend/models/user';

export const createUser = async (user: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(user);
  } catch (e) {
    throw new Error(e);
  }
};

export const findUser = async (query: FilterQuery<UserDocument>) => {
  return User.findOne(query).lean();
};

export const validatePassword = async ({ id, password }: UserDocument) => {
  const user = await User.findOne({ id });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return { id: user.id };
};

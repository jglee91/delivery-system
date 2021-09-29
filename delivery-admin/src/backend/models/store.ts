import mongoose from 'mongoose';

export interface StoreDocument extends mongoose.Document {
  category: '';
  name: string;
  tel: number;
  address: string;
  from: '';
  to: '';
  createdAt: Date;
  updatedAt: Date;
}

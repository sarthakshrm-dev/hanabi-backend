// src/forms/form.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form extends Document {
  @Prop()
  username: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  dateOfBirth: Date;
}

export const FormSchema = SchemaFactory.createForClass(Form);

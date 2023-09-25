// src/forms/forms.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './forms.model';

@Injectable()
export class FormsService {
  constructor(@InjectModel(Form.name) private readonly formModel: Model<Form>) {}

  async saveFormData(formData: Form): Promise<Form> {
    const createdForm = new this.formModel(formData);
    return await createdForm.save();
  }

  async updateFormData(username: string, formData: Form): Promise<Form | null> {
    return await this.formModel.findOneAndUpdate({ username }, formData, {
      new: true,
    });
  }

  async findFormData(username: string): Promise<Form | null> {
    return await this.formModel.findOne({ username });
  }
}

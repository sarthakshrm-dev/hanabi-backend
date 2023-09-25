// src/forms/forms.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { Form, FormSchema } from './forms.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}

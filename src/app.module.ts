// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    FormsModule,
    MongooseModule.forRoot('mongodb+srv://hanabi:alskdjfhg@cluster0.tbhl8ry.mongodb.net/'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

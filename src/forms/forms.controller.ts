import { Controller, Post, Put, Get, Param, Body, NotFoundException, Res } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Form } from './forms.model';
import { Response } from 'express'; // Import the Response type from Express

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Put(':username')
  async updateOrSaveFormData(
    @Param('username') username: string,
    @Body() formData: Form,
    @Res() res: Response,
  ): Promise<void> {
    try {
      // Check if a user with the given username exists
      const existingForm = await this.formsService.findFormData(username);
  
      if (existingForm) {
        // User exists, perform an update
        const updatedForm = await this.formsService.updateFormData(username, formData);
        res.json({ updatedForm, status: true });
      } else {
        // User doesn't exist, perform a save
        const savedForm = await this.formsService.saveFormData(formData);
        res.status(201).json({ savedForm, status: true });
      }
    } catch (error) {
      // Handle any errors here and send an appropriate response
      if (error instanceof NotFoundException) {
        res.status(200).json({ message: error.message, status: false });
      } else {
        res.status(500).json({ message: 'Internal server error', status: false });
      }
    }
  }
  

  @Get(':username')
  async findFormData(@Param('username') username: string, @Res() res: Response): Promise<void> {
    try {
      const formData = await this.formsService.findFormData(username);
      if (!formData) {
        throw new NotFoundException(`User with username '${username}' not found`);
      }
      res.json({formData, status: true}); // Send the form data
    } catch (error) {
      // Handle any errors here and send an appropriate response
      if (error instanceof NotFoundException) {
        res.status(200).json({ message: error.message, status: false });
      } else {
        res.status(500).json({ message: 'Internal server error', status: false });
      }
    }
  }
}

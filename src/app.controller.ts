import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { validate, validateResult } from 'winmodel-validator-ts';

interface ValidateDto {
  model: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  validate(@Body() model: ValidateDto): Promise<validateResult> {
    const jmodel = JSON.parse(JSON.stringify(model.model));
    return this.appService.validate(jmodel);
  }
}

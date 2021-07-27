import { Injectable } from '@nestjs/common';
import { exception } from 'console';
import { validate, validateResult } from 'winmodel-validator-ts';

export interface vaidateResult {
  valid: boolean;
  errors?: any;
}

@Injectable()
export class AppService {
  async validate(model: any): Promise<validateResult> {
    return await validate(model)
      .then((result) => result)
      .catch((error) => {
        return { valid: false, error };
      });
  }
}

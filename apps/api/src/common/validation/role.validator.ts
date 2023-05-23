import { ROLE } from '@prisma/client';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class MatchRole implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const valid = ROLE.hasOwnProperty(args.value);
    return valid; // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `Role doesn't match. Should be one of ${ROLE.CLIENT},${ROLE.ADMIN}`;
  }
}

import { OmitType, PartialType } from '@nestjs/mapped-types';
import { SignupCredentialsDto } from '../../auth/dto/signup-credentials.dto';

export class UpdateUserDto extends OmitType(PartialType(SignupCredentialsDto), [
  'password',
] as const) {}

import { PartialType } from '@nestjs/swagger';
import { CreateTrabalhoDto } from './create-trabalho.dto';

export class UpdateTrabalhoDto extends PartialType(CreateTrabalhoDto) {}

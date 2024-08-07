import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: string;
  @ApiProperty({ example: 'За хулиганство', description: 'Причина блокировки' })
  @IsString({ message: 'Должно быть строкой' })
  readonly banReason: string;
}

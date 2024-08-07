import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  readonly userId: string;
  @ApiProperty({ example: 'За хулиганство', description: 'Причина блокировки' })
  readonly banReason: string;
}

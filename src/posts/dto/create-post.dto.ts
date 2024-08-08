import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Заголовок поста' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;
  @ApiProperty({ description: 'Содержание поста' })
  @IsString({ message: 'Должно быть строкой' })
  readonly content: string;
  @ApiProperty({ description: 'Идентификатор пользователя' })
  readonly userId: number;
}

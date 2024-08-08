import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ description: 'Заголовок поста' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ description: 'Содержание поста' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ description: 'Изображение поста' })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ description: 'Идентификатор пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  tile: string;

  @Prop([String])
  genre: string[];

  @Prop()
  rating: number;

  @Prop()
  link: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
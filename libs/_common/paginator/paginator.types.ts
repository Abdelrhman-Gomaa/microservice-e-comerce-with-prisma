import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

export enum CursorBasedPaginationDirection {
  BEFORE = 'BEFORE',
  AFTER = 'AFTER',
}
registerEnumType(CursorBasedPaginationDirection, {
  name: 'CursorBasedPaginationDirection',
});

export interface IPaginatedFilter {
  where?: object;
  sort?: string;
  page?: number;
  limit?: number;
  include?: [];
}

export interface ICursorPaginatedFilter {
  where?: object;
  cursor?: string;
  limit?: number;
  direction?: CursorBasedPaginationDirection;
  include?: [];
}

export interface PaginationRes<T> {
  items: T[];
  pageInfo: {
    page?: number;
    limit?: number;
    nextCursor?: string;
    beforeCursor?: string;
    hasNext: boolean;
    hasBefore: boolean;
    existingPages: number;
    count: number;
  };
}

@ObjectType()
export abstract class PageInfo {
  @Field((type) => Int, { nullable: true })
  page?: number;

  @Field((type) => Int)
  limit: number;

  @Field({ nullable: true })
  nextCursor?: string;

  @Field({ nullable: true })
  beforeCursor?: string;

  @Field((type) => Boolean)
  hasNext: boolean;

  @Field((type) => Boolean)
  hasBefore: boolean;

  @Field((type) => Number)
  existingPages: number;

  @Field((type) => Number)
  count: number;
}

export interface CursorBasedPaginationArgsType {
  model: any;
  filter: object;
  cursor: string;
  limit: number;
  direction: CursorBasedPaginationDirection;
  include: [];
}

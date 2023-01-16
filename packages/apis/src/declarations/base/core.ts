import type {
  AxiosHttpResult,
  OAuth2Token,
  Conditions,
  ConstantDictionary,
  Dictionary,
  EmptyObject,
  Entity,
  Page,
  Pageable,
  Pagination,
  Sort,
  Tree
} from '@taotaocloud/core';

import { StatusEnum, ApplicationEnum } from '/@/enums';

export interface BaseEntity extends Entity {
  createTime: Date;
  updateTime: Date;
  ranking: number;
}

export interface BaseSysEntity extends BaseEntity {
  status: StatusEnum;
  reserved: boolean;
  reversion: number;
  description: string;
}

export interface BaseAppEntity extends BaseSysEntity {
  appSecret: string;
  appName: string;
  appCode: string;
  applicationType: ApplicationEnum;
}

export interface BaseCmdbEntity extends BaseSysEntity {
  purpose: string;
  contacts: string;
  phoneNumber: string;
}

export type {
  AxiosHttpResult,
  OAuth2Token,
  Conditions,
  ConstantDictionary,
  Dictionary,
  EmptyObject,
  Entity,
  Page,
  Pageable,
  Pagination,
  Sort,
  Tree
} from '@taotaocloud/core';

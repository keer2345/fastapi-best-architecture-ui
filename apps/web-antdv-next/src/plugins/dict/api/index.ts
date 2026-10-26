import type { ID, IDS, PaginationResult } from '#/types';

import { requestClient } from '#/api/request';

export interface DictTypeParams {
  name?: string;
  code?: string;
  page?: number;
  size?: number;
}

export interface DictTypeResult {
  id: ID;
  name: string;
  code: string;
  remark?: string;
  created_time: string;
  updated_time?: string;
}

export interface CreateDictTypeParams {
  name: string;
  code: string;
  remark?: string;
}

export interface DictDataParams {
  type_id?: ID;
  label?: string;
  status?: number;
}

export interface DictDataResult {
  id: ID;
  type_id: ID;
  label: string;
  value: string;
  color?: string;
  sort: number;
  status: number;
  remark: string;
}

export interface CreateDictDataParams {
  type_id: ID;
  label: string;
  value: string;
  sort: number;
  status: number;
  remark?: string;
}

export async function getAllDictTypeApi() {
  return await requestClient.get<DictTypeResult[]>(
    '/api/v1/sys/dict-types/all',
  );
}

export async function getDictTypeListApi(params: DictTypeParams) {
  return await requestClient.get<PaginationResult<DictTypeResult>>(
    '/api/v1/sys/dict-types',
    { params },
  );
}

export async function createDictTypeApi(data: CreateDictTypeParams) {
  return await requestClient.post('/api/v1/sys/dict-types', data);
}

export async function updateDictTypeApi(pk: ID, data: CreateDictTypeParams) {
  return await requestClient.put(`/api/v1/sys/dict-types/${pk}`, data);
}

export async function deleteDictTypeApi(pks: IDS) {
  return await requestClient.delete('/api/v1/sys/dict-types', {
    data: { pks },
  });
}

export async function getDictDataDetailApi(code: string) {
  return await requestClient.get<DictDataResult[]>(
    `/api/v1/sys/dict-datas/type-codes/${code}`,
  );
}

export async function getDictDataListApi(params: DictDataParams) {
  return await requestClient.get<PaginationResult<DictDataResult>>(
    '/api/v1/sys/dict-datas',
    { params },
  );
}

export async function createDictDataApi(data: CreateDictDataParams) {
  return await requestClient.post('/api/v1/sys/dict-datas', data);
}

export async function updateDictDataApi(pk: ID, data: CreateDictDataParams) {
  return await requestClient.put(`/api/v1/sys/dict-datas/${pk}`, data);
}

export async function deleteDictDataApi(pks: IDS) {
  return await requestClient.delete('/api/v1/sys/dict-datas', {
    data: { pks },
  });
}

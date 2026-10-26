import type { RouteRecordStringComponent } from '@vben/types';

import { requestClient } from './request';
import type { IDS } from '#/types';

export interface SysRoleParams {
  name?: string;
  status?: number;
  page?: number;
  size?: number;
}

export interface SysRoleResult {
  id: number;
  name: string;
  status: number;
  is_filter_scopes: boolean;
  remark?: string;
  created_time: string;
  updated_time: string;
}

export interface CreateSysRoleParams {
  name: string;
  status: number;
  remark?: string;
}

/**
 * 获取系统角色列表
 */
export async function getSysRoleListApi(params: SysRoleParams) {
  return requestClient.get<SysRoleResult[]>('/api/v1/sys/roles', { params });
}

export async function getAllSysRoleApi() {
  return requestClient.get<SysRoleResult[]>('/api/v1/sys/roles/all');
}

export async function getSysRoleMenuApi(pk: number) {
  return requestClient.get<RouteRecordStringComponent[]>(
    `/api/v1/sys/roles/${pk}/menus`,
  );
}

export interface SysRoleDataScopesResult {
  /** 角色数据范围 ID 列表（雪花 ID，后端统一序列化为字符串保精度） */
  scopes: IDS;
}

export async function getSysRoleDataScopesApi(pk: number) {
  return requestClient.get<SysRoleDataScopesResult>(`/api/v1/sys/roles/${pk}/scopes`);
}

export async function createSysRoleApi(data: CreateSysRoleParams) {
  return requestClient.post('/api/v1/sys/roles', data);
}

export async function updateSysRoleApi(pk: number, data: CreateSysRoleParams) {
  return requestClient.put(`/api/v1/sys/roles/${pk}`, data);
}

export async function updateSysRoleMenuApi(pk: number, menus: number[]) {
  return requestClient.put(`/api/v1/sys/roles/${pk}/menus`, { menus });
}

export async function updateSysRoleDataScopesApi(pk: number, scopes: IDS) {
  return requestClient.put(`/api/v1/sys/roles/${pk}/scopes`, { scopes });
}

export async function deleteSysRoleApi(pks: number[]) {
  return requestClient.delete(`/api/v1/sys/roles`, { data: { pks } });
}

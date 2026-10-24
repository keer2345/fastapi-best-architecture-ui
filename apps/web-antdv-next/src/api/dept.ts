import { requestClient } from "./request";

import type { ID } from "#/types";
import { API_PATH } from "./api-path";

const basePath = API_PATH.dept;

export interface SysDeptResult {
  id: ID;
  name: string;
  parent_id: ID;
  sort: number;
  leader?: string;
  phone?: string;
  email?: string;
  status: number;
  created_time: string;
}

export interface SysDeptTreeResult extends SysDeptResult {
  children?: SysDeptTreeResult[];
}

export interface SysDeptParams {
  name: string;
  parent_id?: ID;
  sort?: number;
  leader?: string;
  phone?: string;
  email?: string;
  status: number;
}

export interface SysDeptTreeParams {
  name?: string;
  leader?: string;
  phone?: string;
  status?: number;
}
/**
 * 获取部门树
 */
export async function getSysDeptTreeApi(params?: SysDeptTreeParams) {
  return requestClient.get<SysDeptTreeResult[]>(`${basePath}/tree`, {
    params,
  });
}

/**
 * 获取部门详情
 */
export async function getSysDeptDetailApi(pk: ID) {
  return requestClient.get<SysDeptTreeResult>(`${basePath}/${pk}`);
}

/**
 * 创建部门
 */
export async function createSysDeptApi(data: SysDeptParams) {
  return requestClient.post(basePath, data);
}

/**
 * 更新部门
 */
export async function updateSysDeptApi(pk: ID, data: SysDeptParams) {
  return requestClient.put(`${basePath}/${pk}`, data);
}

/**
 * 删除部门
 */
export async function deleteSysDeptApi(pk: ID) {
  return requestClient.delete(`${basePath}/${pk}`);
}

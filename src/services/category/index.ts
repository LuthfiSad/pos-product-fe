import { API_ENDPOINT } from "@core/config/app";
import { HTTP_REQUEST } from "@core/libs/api/config";
import { ApiResponse } from "@core/libs/api/types";
import { CategoryModel } from "@model/category";

export const categoryService = {
  get: HTTP_REQUEST.get<ApiResponse<CategoryModel[]>>(API_ENDPOINT.category),
  getById: HTTP_REQUEST.get<ApiResponse<CategoryModel>>(API_ENDPOINT.products),
  post: HTTP_REQUEST.post<ApiResponse<CategoryModel>>(API_ENDPOINT.products),
  put: HTTP_REQUEST.put<ApiResponse<CategoryModel>>(API_ENDPOINT.products),
  delete: HTTP_REQUEST.delete<ApiResponse<void>>(API_ENDPOINT.products),
};

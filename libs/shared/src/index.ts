// 公共工具函数
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('zh-CN');
};

// 公共常量
export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts'
} as const;

// 公共类型定义
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

// 公共验证函数
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 导出类型定义
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
// 公共工具函数
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN');
};

// 公共常量
export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts'
};

// 公共类型定义（如果使用 TypeScript）
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user'
};

// 公共验证函数
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
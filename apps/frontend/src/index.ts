import {
  formatDate,
  validateEmail,
  API_ENDPOINTS,
} from "@monorepo-demo/shared";

// 使用共享库的功能
console.log("Frontend app started");
console.log("Formatted date:", formatDate(new Date()));
console.log("Email validation:", validateEmail("test@example.com"));
console.log("API endpoints:", API_ENDPOINTS);

// 添加一些 TypeScript 特性示例
interface User {
  id: number;
  name: string;
  email: string;
}

const createUser = (name: string, email: string): User => {
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
  };
};

const user: User = createUser("张三", "zhangsan@example.com");
console.log("Created user:", user);
console.log("User email is valid:", validateEmail(user.email));

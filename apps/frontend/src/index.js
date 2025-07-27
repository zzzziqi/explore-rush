import { formatDate, validateEmail, API_ENDPOINTS } from '@monorepo-demo/shared';

// 使用共享库的功能
console.log('Frontend app started');
console.log('Formatted date:', formatDate(new Date()));
console.log('Email validation:', validateEmail('test@example.com'));
console.log('API endpoints:', API_ENDPOINTS);
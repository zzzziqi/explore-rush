const { formatDate, validateEmail, API_ENDPOINTS } = require('@monorepo-demo/shared');

// 使用共享库的功能
console.log('Backend server started');
console.log('Formatted date:', formatDate(new Date()));
console.log('Email validation:', validateEmail('admin@example.com'));
console.log('API endpoints:', API_ENDPOINTS);

// 简单的 HTTP 服务器示例
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    message: 'Backend API',
    timestamp: formatDate(new Date()),
    endpoints: API_ENDPOINTS
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
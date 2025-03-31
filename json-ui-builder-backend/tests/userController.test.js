const request = require('supertest');
const app = require('../src/server'); // Assuming server.js exports the app

describe('User Controller', () => {
  it('should register a user', async () => {
    const response = await request(app)
      .post('/api/user/register')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should login a user', async () => {
    const response = await request(app)
      .post('/api/user/login')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});

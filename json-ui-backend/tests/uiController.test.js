const request = require('supertest');
const express = require('express');
const uiRoutes = require('../src/routes/uiRoutes');

const app = express();
app.use(express.json());
app.use('/api/ui', uiRoutes);

describe('UI Controller', () => {
  it('should get UI', async () => {
    const res = await request(app).get('/api/ui');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create UI', async () => {
    const res = await request(app)
      .post('/api/ui')
      .send({ name: 'Test UI', components: [] });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });
});

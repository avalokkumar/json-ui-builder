const request = require('supertest');
const app = require('../src/server'); // Assuming server.js exports the app

describe('UI Controller', () => {
  it('should process JSON input', async () => {
    const response = await request(app)
      .post('/api/ui/process')
      .send({ key: 'value' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});

describe('UI Controller - Additional Features', () => {
  it('should render UI', async () => {
    const response = await request(app)
      .post('/api/ui/render')
      .send({ json: { key: 'value' }, structure: 'table' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should customize UI', async () => {
    const response = await request(app)
      .post('/api/ui/customize')
      .send({ json: { key: 'value' }, customization: { color: 'red' } });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should generate live preview', async () => {
    const response = await request(app)
      .post('/api/ui/preview')
      .send({ json: { key: 'value' }, customization: { color: 'blue' } });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should export UI', async () => {
    const response = await request(app)
      .post('/api/ui/export')
      .send({ json: { key: 'value' }, format: 'html' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});

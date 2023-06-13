const request = require('supertest');
const app = require('./api/auth/[...nextauth]/route');

describe('API Routes', () => {
  it('should return user data on successful login', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ username: 'testuser', password: 'testpassword' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('username', 'testuser');
    
  });

  it('should return an error on invalid login credentials', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ username: 'invaliduser', password: 'invalidpassword' });

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty('error', 'Invalid credentials');
    
  });
});

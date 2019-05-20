import { expect } from 'chai';
import * as request from 'supertest';
import app from '../../src/index';

describe('[Integration] Example API endpoints', () => {
  it('Should return hello world', (done) => {
    request(app.express)
      .get('/')
      .send({})
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.clientError).to.be.false;
        expect(res.body).to.equal('hello world');
        done();
      });
  })
});
import { expect } from 'chai';
import * as request from 'supertest';
import app from '../../src/index';

describe('[Integration] Example API endpoints', () => {
  it('Should return hello world', (done) => {
    request(app)
      .get('/')
      .send({})
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.clientError).to.be.false;
        expect(res.text).to.equal('Hello World!');
        done();
      });
  })
});
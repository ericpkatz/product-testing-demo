const expect = require('chai').expect;
const supertest = require('supertest');
const app = supertest(require('../../app'));
const db = require('../../db');

describe('products routes', ()=> {
  beforeEach(()=> {
    return db.sync()
      .then(()=> db.seed());
  });
  describe('/products', ()=> {
    describe('with seeded data', ()=> {
      it('shows two products', ()=> {
        return app.get('/products')
          .expect(200)
          .then((resp)=> {
            expect(resp.body.length).to.equal(2);
          });
      });
    });
  });
});

const expect = require('chai').expect;
const db = require('../../db');
const models = db.models;
const Product = models.Product;

describe('Product model', ()=> {
  beforeEach(()=> {
    return db.sync()
      .then(()=> db.seed());
  });
  it('exists', ()=> {
    expect(Product).to.be.ok;
  });

  describe('findFoos', ()=> {
    it('returns foos', ()=> {
      return Product.findFoos()
        .then( products => {
          expect(products.length).to.equal(1);
        });
    });
  });

  describe('sayHi method', ()=> {
    let foo;
    beforeEach(()=> {
      foo = Product.build({ name: 'foo' });
    });

    it('return HI <name>', ()=> {
      expect(foo.sayHi()).to.equal('HI FOO');
    });
  });

  describe('seeded data', ()=> {
    it('there are two products', ()=> {
      return Product.findAll()
        .then( products => {
          expect(products.length).to.equal(2);
        })
    });

    it('has a foo', ()=> {
      return Product.findOne({
        where: { name: 'FOO' }
      })
      .then( product => {
        expect(product).to.be.ok;
      });

    });
  });
});

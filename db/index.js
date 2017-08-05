const conn = require('./conn');

const Product = require('./Product'); 
const Category = require('./Category'); 

Product.belongsTo(Category);
Category.hasMany(Product);


const sync = ()=> {
  return conn.sync({ force: true });
}

const seed = ()=> {
  let fooCategory;
  return Promise.all([
    Category.create({ name: 'foo category' }),
    Category.create({ name: 'bar category' })
  ])
  .then( ([ _fooCategory, barCategory ]) =>{
    fooCategory = _fooCategory;
    return Promise.all([
      Product.create({ name: 'foo' }),
      Product.create({ name: 'bar' })
    ]);
  })
  .then( ([ foo, bar ]) =>{
    //return foo.setCategory(fooCategory);
    return Promise.all([
      fooCategory.addProduct(foo),
      fooCategory.addProduct(bar)
    ]);
  })

}

module.exports = {
  sync,
  seed,
  models: {
    Product
  }
};

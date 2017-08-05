const conn = require('./conn');

const Product = conn.define('product', {
  name: {
    type: conn.Sequelize.STRING,
    set: function(name){
      this.setDataValue('name', name.toUpperCase());
    }
  }
});

Product.prototype.sayHi = function(){
  return `HI ${this.name}`;
};

Product.findFoos = function(){
  return this.findAll({ 
    where: {
      name: 'FOO'
    }
  });
}

module.exports = Product;

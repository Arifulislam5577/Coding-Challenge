const products = [
  {
    id: 1,
    childrenId: 100,
  },
  {
    id: 2,
    childrenId: 101,
  },
  {
    id: 3,
    childrenId: 102,
  },
];

const children = [
  {
    id: 101,
    title: 'Barcelona T-shirt',
    price: 100,
  },
  {
    id: 100,
    title: 'Real Madrid T-shirt',
    price: 99,
  },
  {
    id: 102,
    title: 'PSG T-shirt',
    price: 99.99,
  },
];

function margeTwoArrWithId(products, children) {
  const productsArr = products.map((product) => {
    let newProduct = {};
    const matchProduct = children.find(
      (child) => child.id === product.childrenId
    );

    return (newProduct = {
      ...product,
      title: matchProduct.title,
      price: matchProduct.price,
    });
  });
  return productsArr;
}

console.log(margeTwoArrWithId(products, children));

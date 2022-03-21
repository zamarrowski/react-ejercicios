const ProductsList = ({ products = [], renderButton }) => {
  return products.map(product => (
    <div key={product.id}>
      <img height="150" src={product.imageUrl} alt={product.name} />
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      {renderButton(product)}
    </div>
  ))
}

export default ProductsList

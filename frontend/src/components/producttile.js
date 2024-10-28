const ProductTile = ({ product }) => {
  const handleClick = () => {
    alert(`Product: ${product.name}`);
  };

  return (
    <div className={styles.tile} onClick={handleClick}>
      <h2>{product.description}</h2>
      <h2>{product.prodName}</h2>
      <p>Price: ${product.price}</p>
      <p>ON ${product.sale}% SALE</p>
    </div>
  );
};

export default ProductTile;

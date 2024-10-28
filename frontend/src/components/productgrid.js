import ProductTile from './ProductTile';

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductTile key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

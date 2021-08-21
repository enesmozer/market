import './products.scss';

function Products() {
  return (
    <div className="products">
      <div className="products-header">
        <div className="title"> Products</div>
        <div className="buttons">
          <button className="button" type="button">
            mug
          </button>
          <button className="button" type="button">
            shirt
          </button>
        </div>
      </div>
      {/* <div className="products-main">
      </div> */}
    </div>
  );
}
export default Products;

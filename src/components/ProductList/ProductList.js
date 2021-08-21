import Product from '../Base/Product/Product';
import './productList.scss';

function Products() {
  return (
    <main className="productList">
      <div className="productList-header">
        <div className="productList-title"> Products</div>
        <div className="productList-buttons">
          <button className="button" type="button">
            mug
          </button>
          <button className="button active" type="button">
            shirt
          </button>
        </div>
      </div>
      <div className="productList-main">
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
        <Product name="Office Mugs" cost={14.99} />
      </div>
    </main>
  );
}
export default Products;

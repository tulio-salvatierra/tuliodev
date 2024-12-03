import { productsData } from "./ProductsData";
import "./Products.css";

export default function ProductsComp() {
  return (
    <section id="products" className="product-section">
      <div className="project-header">
        <h2 className="section-title">Products</h2>
        <div className="d-flex subtitle-box"></div>
      </div>
      <div className="projectDiv flex p-3">
        {productsData.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-title p-4">
              <h3 className="product-subtitle">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <a className="product-price" href="/products">
                {product.price}
              </a>
            </div>
            <div>
              {product.features.map((feature, index) => (
                <li key={index} className="product-feature">
                  {feature}
                </li>
              ))}
            </div>
            <p className="ideal mt-4">Ideal for: {product.idealFor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

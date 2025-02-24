import "./Websites.css";
import { productsData } from "./../Products/ProductsData";

export default function Support() {
  return (
    <>
      {productsData.map((product, index) => (
        <div key={index} className="support-box">
          <div className="p-4">
            <h3>
              {product.title} -{" "}
              <strong className="" href="/products">
                {product.price}
              </strong>
            </h3>
            <p className="">{product.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

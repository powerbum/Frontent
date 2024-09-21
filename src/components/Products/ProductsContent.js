import React from "react";
import { Link } from "gatsby";
import shape from "../../images/shape/vector-shape6.png";
import products from "../../data/products.json"; // Import product data from JSON

const ProductsContent = () => {
  return (
    <>
      <div className="courses-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.key} className="col-lg-4 col-md-6">
                <div className="single-courses-box">
                  <div className="courses-image">
                    <Link to={`/products/${product.slug}`} className="d-block image">
                      <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="price shadow">€{product.price}</div>
                  </div>
                  <div className="courses-content">
                    <h3>
                      <Link to={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vector-shape6">
          <img src={shape} alt="shape" />
        </div>
      </div>
    </>
  );
};

export default ProductsContent;

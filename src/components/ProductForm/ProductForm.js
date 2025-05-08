import React from "react";

import "./ProductForm.css";

const ProductForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem(`${data.productId}`, JSON.stringify(data));

    props.onNewProductAdded(data);
    event.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-item">
          <label htmlFor="productId">
            Product ID:
          </label>
          <input type="number" name="productId" required step={1} min={1} />
        </div>
        <div className="form-item">
          <label htmlFor="productName">
            Product Name:
          </label>
          <input type="text" name="productName" required />
        </div>
        <div className="form-item">
          <label htmlFor="price">
            Price:
          </label>
            <input type="number" name="price" required />
        </div>
        <div className="form-item">
          <label htmlFor="category"> 
            Category:
          </label>
            <select name="category" required>
              {props.categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="form-item">
          <label htmlFor="description">
            Description:
          </label>
            <textarea name="description" required></textarea>
        </div>
        <button type="submit" className="button">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

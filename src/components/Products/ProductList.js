import React from "react";

import "./ProductList.css";

const ProductList = (props) => {

  const products = props.products;
  const categories = props.categories;


  const handleDeleteProduct = (productId) => {
    props.onDeleteProduct(productId);
  }

  return (
    <div className="product-list-container">
      <h2>Product List</h2>

      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="category-filter">Filter by Category:</label>
          <select id="category-filter" onChange={(e) => props.onFilterCategory(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            }
            )}
          </select>
        </div>
      </div>
      <table className="product-list-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{categories.find(category => category.id == product.category).name}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.productId)} className="button">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default ProductList;

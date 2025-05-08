import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/Products/ProductList";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
    { id: 4, name: "Home Appliances" },
    { id: 5, name: "Sports" },
  ];

  useEffect(() => {
    const fetchProducts = () => {
      const localStorage = window.localStorage;
      const keys = Object.keys(localStorage);
      const productsArray = keys.map((key) => {
        const product = JSON.parse(localStorage.getItem(key));
        return product;
      });
      return productsArray;
    };
    const productsArray = fetchProducts();
    setProducts(productsArray);
  }, []);

  const handleNewProductAdded = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleDeleteProduct = (productId) => {
    localStorage.removeItem(productId);
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
  };

  const handleFilterCategory = (categoryId) => {
    const localStorage = window.localStorage;
    const keys = Object.keys(localStorage);
    const productsArray = keys.map((key) => {
      const product = JSON.parse(localStorage.getItem(key));
      return product;
    });
    if (categoryId === "") {
      setProducts(productsArray);
      return;
    }
    const filteredProducts = productsArray.filter(
      (product) => product.category === categoryId
    );
    setProducts(filteredProducts);
  }

  return (
    <div className="app-container">
      <ProductForm
        categories={categories}
        onNewProductAdded={handleNewProductAdded}
      />
      <ProductList
        categories={categories}
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onFilterCategory={handleFilterCategory}
      />
    </div>
  );
}

export default App;

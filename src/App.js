import "./styles.css";
import Product from "./components/Product";
import { InventoryContext } from "./data/inventoryContext";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);

    //remove form after creating product
    setEditing(null);
  }

  function updateProduct(product) {
    setProducts(
      products.map(function (p) {
        if (p.id === product.id) {
          return product;
        } else {
          return p;
        }
      })
    );

    //remove form after update product
    setEditing(null);
  }

  function deleteProduct(id) {
    setProducts(
      products.filter(function (p) {
        return p.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          products,
          addProduct,
          deleteProduct,
          updateProduct,
          setEditing,
          editing
        }}
      >
        <h1>To do list</h1>
        {!editing ? (
          <>
            {products.map(function (product) {
              return <Product product={product} />;
            })}
            <button
              className="save-btn add btn"
              onClick={() => setEditing("new")}
            >
              Add Task
            </button>
          </>
        ) : (
          <ProductForm />
        )}
      </InventoryContext.Provider>
    </div>
  );
}

const initialProducts = [
  {
    id: 1,
    name: "wash dishes"
  }
];

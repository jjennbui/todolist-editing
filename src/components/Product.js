import { useContext, useState } from "react";
import { InventoryContext } from "../data/inventoryContext";

export default function Product({ product }) {
  const { deleteProduct, setEditing } = useContext(InventoryContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="product">
      <div className={`item ${isChecked ? "strikethrough" : ""}`}>
        <h3>
          <label>
            {product.name}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
        </h3>
      </div>

      <div className="button-container">
        <button className="edit-btn" onClick={() => setEditing(product.id)}>
          edit
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteProduct(product.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [categoryItems, setCategoryItems] = useState("All")

function handleDisplayedItems(e) {
  setCategoryItems(e.target.value)
}
  const displayedItems = items.filter((item) => {
      if (categoryItems === "All") return true;
      return item.category === categoryItems
  })



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleDisplayedItems} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

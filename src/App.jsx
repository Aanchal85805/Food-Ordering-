import React, { useState } from "react";
import Menu from "./menu";
import MenuItems from "./components/tabMenu/MenuItems";
import CatMenu from "./components/tabMenu/CatMenu";

const allCategory = [...new Set(Menu.map((curr) => curr.category)), "all"];
console.log(allCategory);
function App() {
  const [items, SetItems] = useState(Menu);
  const [allCat, setallCat] = useState(allCategory);

  const filterMenu = (categoryItem) => {
    if (categoryItem == "all") {
      SetItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    SetItems(updatedItems);
  };

  return (
    <div>
      <h1 className="text-center">Order your food</h1>
      <br />
      <CatMenu filterMenu={filterMenu} allCat={allCat} />
      <MenuItems items={items} />
    </div>
  );
}
export default App;

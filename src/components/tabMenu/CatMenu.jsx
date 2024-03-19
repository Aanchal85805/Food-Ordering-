import React from "react";

const CatMenu = ({ filterMenu, allCat }) => {
  return (
    <>
      <div className="menu-tabs ">
        <div className=" menu-tabs-container text-center  ">
          {allCat.map((curClem, index) => {
            return (
              <button
                type="button"
                className="mx-10 h-9 w-20 bg-green-400 hover:text-white "
                key={index}
                onClick={() => filterMenu(curClem)}
              >
                {curClem}
              </button>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
    </>
  );
};

export default CatMenu;

import React from "react";

const MenuItems = ({ items }) => {
  return (
    <>
      <div className="container mt-10">
        {items.map((elem) => {
          const { id, name, category, image, description, price } = elem;
          return (
            <div className="menu " key={id}>
              <div className="menu-items border-1 rounded drop-shadow-2xl ml-7 mr-6 bg-white">
                <div className="menu-item  flex gap-4 h-40 w-20.1   ">
                  <div className="img">
                    <img
                      className="imges h-40 "
                      src={image}
                      alt="maggi"
                      srcset=""
                    />
                  </div>
                  <div className="menu-description">
                    <div className="main-title text-x l">
                      <h1>{name}</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit.
                      </p>
                      <div className="menu-price flex gap-10 my-3">
                        <h2 className="text-green-400 text-ly mt-3">
                          Price : {price}
                        </h2>
                        <a href="#">
                          <button className="btn text-white h-10 w-30 bg-green-400 px-2 mt-1 ">
                            Order Now
                          </button>
                        </a>
                      </div>
                      <p className="text-sm mb-1">
                        {" "}
                        *prices may vary on selected date
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuItems;

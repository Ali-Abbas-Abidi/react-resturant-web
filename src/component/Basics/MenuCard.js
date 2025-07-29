import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <section className="main-card--container">
      <div className="card-container">
        {menuData.map((curElem) => {
          return (
            <div className="card" key={curElem.id}>
              <div className="card-body">
                <span className="card-number card-circle subtle">
                  {curElem.id}
                </span>
                <span className="card-author subtle">{curElem.name}</span>
                <h2 className="card-title">{curElem.name}</h2>
                <span className="card-description subtle">
                  I love Maggi really Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur molestiae perferendis aliquam,
                  animi aperiam fugiat quia nulla molestias dolorum vel facere,
                  pariatur eius, tempore quas iste laborum! Ullam, aliquid cum?
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={curElem.image} alt="images" className="card-media" />
              <span className="card-tag subtle">Order Now</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuCard;

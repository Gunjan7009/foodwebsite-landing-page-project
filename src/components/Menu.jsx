import React from 'react';

const Menu = () => {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <ul>
        <li>
          <img src="https://wallpaperaccess.com/full/3667947.jpg" alt="Pizza" />
          <h3>Pizza</h3>
          <p>Delicious cheese and tomato pizza.</p>
        </li>
        <li>
          <img src="https://th.bing.com/th/id/OIP.TX5cvuJgfnEdPcvRUE0TSAHaFU?rs=1&pid=ImgDetMain" alt="Burger" />
          <h3>Burger</h3>
          <p>Juicy burger with lettuce and tomato.</p>
        </li>
        <li>
          <img src="https://i1.wp.com/img-global.cpcdn.com/recipes/5586f8c4f1696db1/680x482cq70/garlic-chicken-penne-pasta-with-spicy-marinara-recipe-main-photo.jpg?resize=1502%2C1064" alt="Pasta" />
          <h3>Pasta</h3>
          <p>Classic spaghetti bolognese.</p>
        </li>
      </ul>
    </section>
  );
};

export default Menu;

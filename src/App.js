import React, { useState } from "react";
import Card from "./components/cards/card";
import "./styles/card.css";
import "./styles/nav.css"
import "./styles/main.css"
import "./styles/banners.css"
import "./styles/sale.css"
import "./styles/footer.css"
import Header from "./components/header";
import Main from "./components/main";
import Banners from "./components/banners";
import Sale from "./components/sale";
import Footer from "./components/footer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "./img/Iphone14pro.png",
      name: "Iphone 14 pro Gold",
      price: "$ 899",
    },
    {
      id: 2,
      image: "./img/AppleWatch.png",
      name: "Apple Watch",
      price: "$ 399",
    },
    {
      id: 3,
      image: "./img/Iphone14proPurple.png",
      name: "Iphone 14 pro Purple",
      price: "$ 920",
    },
    {
      id: 4,
      image: "./img/airpodsMax.png",
      name: "Airpods MAX",
      price: "$ 549",
    },
    {
      id: 5,
      image: "./img/Ipad.png",
      name: "Apple iPad 9 10.2",
      price: "$ 398",
    },
    {
      id: 6,
      image: "./img/Buds.png",
      name: "Galaxy Buds FE",
      price: "$ 99",
    },
    {
      id: 7,
      image: "./img/Galaxy.png",
      name: "Galaxy Z Fold5 Phantom Black",
      price: "$ 1749",
    },
    {
      id: 8,
      image: "./img/SamsungWatch.png",
      name: "Samsung Galaxy Watch6 Black",
      price: "$ 549",
    },
  ]);

  return (
    <div className="App">
      <div>
        <Header/>
        <Main/>
        <Banners/>
      
      </div>
      <div className="cards">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
        <Sale/>
        <Footer/>
    </div>
  );
}

export default App;

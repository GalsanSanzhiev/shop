import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from "./components/cards/card";
import Product from "./components/product";
import ProductModal from "./components/ProductModal";
import Cart from "./components/cart";
import PaymentModal from "./components/PaymentModal";
import "./styles/index.css";
import "./styles/card.css";
import "./styles/cart.css";
import "./styles/nav.css";
import "./styles/main.css";
import "./styles/productModal.css";
import "./styles/paymentModal.css";
import "./styles/banners.css";
import "./styles/sale.css";
import "./styles/footer.css";
import "./styles/page.css";
import Header from "./components/header";
import Main from "./components/main";
import Banners from "./components/banners";
import Sale from "./components/sale";
import Footer from "./components/footer";

function App() {
  const [products] = useState([
    {
      id: 1,
      image: "/img/iph17orange.png",
      name: "Iphone 17 pro",
      price: 83890,
      description: "Смартфон Apple iPhone 17 Pro Orange 256GB",
      characteristics:
        " Тип матрицы экрана: OLED, Частота обновления экрана: 120 Гц, Операционная система: IOS, Оперативная память: 12 ГБ",
      colors: ["orange", "black", "white"],
      colorImages: {
        orange: "/img/iph17-Orange.jpg",
        black: "/img/iph17-Black.jpg",
        white: "/img/iph17-White.jpg",
      },
    },
    {
      id: 2,
      image: "/img/applewatchWhite-nobg.png",
      name: "Apple Watch",
      price: 9240,
      description: "Apple Watch Series 8",
      characteristics: "Версия ОС iOS 26, Датчики: акселерометр, альтиметр, гироскоп, датчик освещенности, датчик сердечного ритма, компас, температурн",
      colors: [ "white", "black"],
      colorImages: {
        white: "/img/applewatchPink.jpg",
        black: "/img/applewatchBlack.jpg",
      },
    },
    {
      id: 3,
      image: "/img/Iphone14proPurple.png",
      name: "Iphone 14 pro Purple",
      price: 45000,
      description: "Смартфон Apple iPhone 14 Pro Purple 256GB",
      colors: ["purple", "black", "white"],
      colorImages: {
        purple: "/img/iph14-Purple.jpg",
        black: "/img/iph14-Black.jpg",
        white: "/img/iph14-White.jpg",
      },
    },
    {
      id: 4,
      image: "/img/airpodsMax.png",
      name: "Airpods MAX",
      price: 39800,
      description: "Apple AirPods Max Silver, ",
      characteristics: "Разъём зарядки: USB Type-C, Комплектация: документация, кабель USB Type-C - USB Type-C, чехол",
      colors: ["white", "black"],
      colorImages: {
        white: "/img/airpodsMax.jpg",
        black: "/img/airpodsMaxBlack.jpg",
      }
    },
    {
      id: 5,
      image: "/img/Ipad.png",
      name: "Apple iPad 9 10.2",
      price: 62000,
      description: "Apple iPad 9 10.2 64GB",
      colors: ["white", "blue", "pink"],
      colorImages: {
        white: "/img/ipadWhite.jpg",
        blue: "/img/ipadBlue.jpg",
        pink: "/img/ipadPink.jpg",
      }
    },
    {
      id: 6,
      image: "/img/PS5-no-bg.png",
      name: "PlayStation 5",
      price: 59800,
      description: "Samsung Galaxy Buds FE Black ",
      characteristics: "Память: 1000 ГБ, Оперативная память: 16 ГБ, Модель процессора: AMD Ryzen Zen 2",
      colors: ["white"],
      colorImages: {
        white: "/img/PS5-no-bg.png",
      }
    },
    {
      id: 7,
      image: "/img/mcbookPro-no-bg.png",
      name: "MacBook Pro",
      price: 175300,
      description: "MacBook Pro M5 512 ГБ, Оперативная память: 16 ГБ, Диагональ экрана (дюйм): 14.2, Количество ядер: 10, Модель процессора: Apple M5 10-core",
      colors: ["black"],
      colorImages: {
        black: "/img/mcbookPro.jpg",
      }
    },
    {
      id: 8,
      image: "/img/airpods-no-bg.png",
      name: "AirPods 4",
      price: 9890,
      description: "Разъём зарядки: USB Type-C, Версия Bluetooth: 5.3, Материал корпуса: пластик",
      colors: ["white"],
      colorImages: {
        white: "/img/airpods.jpg",
      }
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  const navigate = useNavigate();

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : products;

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const openCart = () => {
    console.log("openCart called");
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = (total) => {
    setOrderTotal(total);
    setIsPaymentOpen(true);
  };

  const handlePaymentConfirm = (paymentMethod) => {
    alert(
      `Order confirmed!\n\nPayment method: ${paymentMethod}\nTotal: $${orderTotal.toFixed(2)}\n\nThank you for your purchase! 🎉`,
    );

    setCart([]);
    setIsPaymentOpen(false);
    setIsCartOpen(false);
  };

  const closePaymentModal = () => {
    setIsPaymentOpen(false);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <div>
        <Header
          onSearch={setSearchTerm}
          products={products}
          onSelectProduct={handleSelectProduct}
          cartItemCount={cartItemCount}
          onOpenCart={openCart}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Banners />

                <div id="products" className="cards">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      image={product.image}
                      price={`${product.price} ₽`}
                      name={product.name}
                      onClick={() => handleSelectProduct(product)}
                      onAddToCart={() => addToCart(product)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div
                    className="no-results"
                    style={{
                      textAlign: "center",
                      padding: "40px",
                      fontSize: "18px",
                      color: "#666",
                    }}
                  >
                    <p>По запросу "{searchTerm}" ничего не найдено</p>
                  </div>
                )}
                <Sale />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={<Product products={products} addToCart={addToCart} />}
          />
        </Routes>

        <Footer />

        {isCartOpen && (
          <Cart
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={closeCart}
            onCheckout={handleCheckout}
          />
        )}

        {isPaymentOpen && (
          <PaymentModal
            onClose={closePaymentModal}
            onConfirm={handlePaymentConfirm}
            totalPrice={orderTotal}
          />
        )}
      </div>
    </div>
  );
}

export default App;

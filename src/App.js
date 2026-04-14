import React, { useState, useEffect } from "react";
import Card from "./components/cards/card";
import ProductModal from "./components/ProductModal";
import Cart from "./components/cart";
import PaymentModal from "./components/PaymentModal";
import "./styles/index.css";
import "./styles/card.css";
import "./styles/cart.css";
import "./styles/nav.css";
import "./styles/main.css";
import "./styles/productModal.css";
import "./styles/productModal.css";
import "./styles/banners.css";
import "./styles/sale.css";
import "./styles/footer.css";
import Header from "./components/header";
import Main from "./components/main";
import Banners from "./components/banners";
import Sale from "./components/sale";
import Footer from "./components/footer";

function App() {
  const [products] = useState([
    {
      id: 1,
      image: "./img/Iphone14pro.png",
      name: "Iphone 14 pro Gold",
      price: 899,
      description: "Смартфон Apple iPhone 14 Pro Gold 128GB"
    },
    {
      id: 2,
      image: "./img/AppleWatch.png",
      name: "Apple Watch",
      price: 399,
      description: "Apple Watch Series 8"
    },
    {
      id: 3,
      image: "./img/Iphone14proPurple.png",
      name: "Iphone 14 pro Purple",
      price: 920,
      description: "Смартфон Apple iPhone 14 Pro Purple 256GB"
    },
    {
      id: 4,
      image: "./img/airpodsMax.png",
      name: "Airpods MAX",
      price: 549,
      description: "Apple AirPods Max Silver"
    },
    {
      id: 5,
      image: "./img/Ipad.png",
      name: "Apple iPad 9 10.2",
      price: 398,
      description: "Apple iPad 9 10.2 64GB"
    },
    {
      id: 6,
      image: "./img/Buds.png",
      name: "Galaxy Buds FE",
      price: 99,
      description: "Samsung Galaxy Buds FE Black"
    },
    {
      id: 7,
      image: "./img/Galaxy.png",
      name: "Galaxy Z Fold5",
      price: 1749,
      description: "Samsung Galaxy Z Fold5 256GB"
    },
    {
      id: 8,
      image: "./img/SamsungWatch.png",
      name: "Galaxy Watch",
      price: 549,
      description: "Samsung Galaxy Watch6 44mm"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  // Загрузка корзины из localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Сохранение корзины в localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    console.log("Product selected:", product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
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
    alert(`✅ Order confirmed!\n\nPayment method: ${paymentMethod}\nTotal: $${orderTotal.toFixed(2)}\n\nThank you for your purchase! 🎉`);
    
    // Очищаем корзину
    setCart([]);
    
    // Закрываем все модальные окна
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
        <Main />
        <Banners />
      </div>
      
      <div id="products" className="cards">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            price={`$ ${product.price}`}
            name={product.name}
            onClick={() => handleSelectProduct(product)}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
      
      <Sale />
      <Footer />

      {/* Модальное окно с товаром */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal}
          onAddToCart={() => addToCart(selectedProduct)}
        />
      )}

      {/* Корзина */}
      {isCartOpen && (
        <Cart 
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={closeCart}
          onCheckout={handleCheckout}
        />
      )}

      {/* Модальное окно оплаты */}
      {isPaymentOpen && (
        <PaymentModal 
          onClose={closePaymentModal}
          onConfirm={handlePaymentConfirm}
          totalPrice={orderTotal}
        />
      )}
    </div>
  );
}

export default App;
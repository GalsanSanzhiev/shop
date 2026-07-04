import React, { useState } from "react";

const Header = ({
  onSearch,
  products,
  onSelectProduct,
  cartItemCount,
  onOpenCart,
  onOpenUserForm
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    if (searchValue.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setSuggestions(filtered.slice(0, 5));
    setShowSuggestions(true);
    setSelectedIndex(-1);
  }, [searchValue, products]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSelectProduct(suggestions[selectedIndex]);
      } else if (searchValue.trim() !== "") {
        const foundProduct = products.find((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        if (foundProduct) {
          handleSelectProduct(foundProduct);
        }
      }
    }
  };

  const handleSelectProduct = (product) => {
    setSearchValue(product.name);
    onSearch(product.name);
    setShowSuggestions(false);
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };


  return (
    <div className="header">
      <nav className="navigation">
        <img className="headerLogo" src="/img/Logo.png" alt="Logo" />
        <div className="search-container">
          <div className="search">
            <input
              className="searchHeader"
              type="text"
              placeholder="Поиск товаров..."
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <img className="magnifier" src="/img/magnifier.png" alt="Search" />
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((product, index) => (
                <div
                  key={product.id}
                  className={`suggestion-item ${index === selectedIndex ? "selected" : ""}`}
                  onMouseDown={() => handleSelectProduct(product)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="suggestion-img"
                  />
                  <div className="suggestion-info">
                    <span className="suggestion-name">{product.name}</span>
                    <span className="suggestion-price">${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a className="navLink" href="/" onClick={() => setMenuOpen(false)}>
            Главная
          </a>
          <a
            className="navLink"
            href="#products"
            onClick={() => setMenuOpen(false)}
          >
            Товары
          </a>
          <a
            className="navLink"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Контакты
          </a>
        </div>

        <div className="navImages">
          {/* <img className="navImg" src="./img/heart.png" alt="Favorites" /> */}
          <div className="cart-icon" onClick={onOpenCart}>
            <img className="navImg" src="/img/Cart1.png" alt="Cart" />
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </div>
          <img
            onClick={onOpenUserForm}
            className="navImg"
            src="/img/user.png"
            alt="User"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;

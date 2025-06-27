import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import savuage from "../assets/savuage.svg";
import ultra from "../assets/ultra.svg";
import bleu from "../assets/bleu.svg";
import you from "../assets/you.svg";

const PRODUCTS = {
  sauvage: {
    name: "Aura Magnifique",
    brand: "Lumera",
    image: savuage,
    price: 180,
    rating: 4,
    reviews: 123,
    description:
      "An enchanting blend of rare florals and warm amber. Each bottle of Aura Magnifique is a testament to our commitment to quality, sustainability, and the timeless pursuit of elegance. Our master perfumers meticulously select the finest ingredients from around the world, blending traditional craftsmanship with modern innovation. This fragrance unfolds in layers, revealing a complex heart and a lasting, memorable base. It’s more than a scent; it’s an experience.",
    tags: ["Jasmine", "Amber", "Sandalwood"],
  },
  ultra: {
    name: "Ultra Male Jean Paul Gaultier",
    brand: "Lumera",
    image: ultra,
    price: 220,
    rating: 5,
    reviews: 98,
    description:
      "A dreamy composition of vanilla, musk, and golden fruits. Ultra Male is bold, seductive, and unforgettable.",
    tags: ["Vanilla", "Musk", "Peach"],
  },
  bleu: {
    name: "Bleu De Chanel",
    brand: "Lumera",
    image: bleu,
    price: 195,
    rating: 5,
    reviews: 110,
    description:
      "A captivating elixir of dark spices and exotic woods. Bleu De Chanel is mysterious, deep, and timeless.",
    tags: ["Oud", "Saffron", "Patchouli"],
  },
  you: {
    name: "You",
    brand: "Lumera",
    image: you,
    price: 150,
    rating: 4,
    reviews: 87,
    description:
      "A refreshing burst of citrus and delicate morning dew. You is light, fresh, and uplifting.",
    tags: ["Bergamot", "Neroli", "White Tea"],
  },
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS[productId];

  // Cart count state
  const [cartCount, setCartCount] = useState(0);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ background: "#fcfaec", minHeight: "100vh", padding: 0 }}>
      {/* Header */}
      <nav
        style={{
          background: "#fcfaec",
          borderBottom: "1px solid #f1ecd7",
          padding: 0,
          marginBottom: 0,
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            height: 70,
            justifyContent: "space-between",
          }}
        >
          {/* Left: Logo and Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "2rem",
                color: "#b8a47a",
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: "2px",
              }}
              onClick={() => navigate("/")}
            >
              Lumera
            </span>
            <ul
              style={{
                display: "flex",
                gap: 32,
                listStyle: "none",
                margin: 0,
                padding: 0,
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "1.1rem",
                color: "#a08654",
              }}
            >
              <li
                style={{ cursor: "pointer", color: "#a08654" }}
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li style={{ cursor: "pointer" }}>Shop All</li>
              <li style={{ cursor: "pointer" }}>Our Story</li>
              <li style={{ cursor: "pointer" }}>Find Your Scent</li>
            </ul>
          </div>
          {/* Right: Cart */}
          <button
            data-quantity={cartCount}
            className="btn-cart"
            aria-label="Cart"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "relative",
              marginLeft: 24,
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              className="icon-cart"
              viewBox="0 0 24.38 30.52"
              height="30.52"
              width="24.38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>icon-cart</title>
              <path
                transform="translate(-3.62 -0.85)"
                d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                fill="#4d3a1a"
              />
            </svg>
            {cartCount > 0 && (
              <span
                className="quantity"
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "#8a5a1e",
                  color: "#fff",
                  borderRadius: "50%",
                  fontSize: "0.85rem",
                  padding: "2px 7px",
                  minWidth: 18,
                  textAlign: "center",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
      {/* Product Content */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "#a08654",
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: 32,
            marginTop: 32,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 18, marginRight: 6 }}>{"<"}</span> Back to
          Collection
        </button>
        <div
          style={{
            display: "flex",
            gap: 64,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#e7e6e2",
              borderRadius: 12,
              boxShadow: "0 6px 24px 0 rgba(180,164,125,0.08)",
              width: 400,
              minWidth: 280,
              minHeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "80%",
                height: "auto",
                maxHeight: 420,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 320 }}>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "3rem",
                color: "#b8a47a",
                margin: 0,
                fontWeight: "normal",
              }}
            >
              {product.name}
            </h1>
            <div
              style={{
                color: "#a08654",
                fontFamily: "Georgia, serif",
                fontSize: "1.15rem",
                marginBottom: 12,
              }}
            >
              A signature scent by {product.brand}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <span style={{ color: "#b8a47a", fontSize: 22 }}>
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </span>
              <span
                style={{
                  color: "#a08654",
                  marginLeft: 8,
                  fontSize: 15,
                }}
              >
                ({product.reviews} reviews)
              </span>
            </div>
            <div
              style={{
                color: "#7d6b4c",
                fontSize: "1.08rem",
                marginBottom: 24,
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              {product.description}
            </div>
            <div
              style={{
                fontWeight: "bold",
                color: "#7d4c1a",
                marginBottom: 8,
                fontFamily: "Georgia, serif",
              }}
            >
              SCENT PROFILE
            </div>
            <div style={{ marginBottom: 32 }}>
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#ede7c9",
                    color: "#7d6b4c",
                    padding: "7px 16px",
                    borderRadius: 18,
                    marginRight: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                    fontFamily: "Segoe UI, sans-serif",
                    display: "inline-block",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                border: "1px solid #ede7c9",
                padding: "22px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 22,
                color: "#b8a47a",
                marginBottom: 28,
                maxWidth: 500,
                fontFamily: "Georgia, serif",
              }}
            >
              <span>Price</span>
              <span style={{ fontWeight: "bold", fontSize: 28 }}>
                ${product.price}
              </span>
            </div>
            <button
              onClick={() => setCartCount(cartCount + 1)}
              style={{
                background: "#8a5a1e",
                color: "#fff",
                border: "none",
                borderRadius: 28,
                padding: "18px 48px",
                fontSize: "1.25rem",
                fontFamily: "Segoe UI, sans-serif",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 2px 8px rgba(180,164,125,0.07)",
                marginBottom: 16,
              }}
            >
              <span>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
                  <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.293-2.707l1.414 1.414c.195.195.451.293.707.293h12c.256 0 .512-.098.707-.293l1.414-1.414c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.293 1.293h-10.586l-1.293-1.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414z" />
                </svg>
              </span>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer
        style={{
          background: "#fcfaec",
          marginTop: 60,
          paddingTop: 40,
          fontFamily: "Georgia, serif",
          color: "#a08654",
          borderTop: "1px solid #f1ecd7",
        }}
      >
        <div style={{ textAlign: "center", paddingBottom: 40 }}>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#b8a47a",
              marginBottom: 10,
              fontWeight: "normal",
            }}
          >
            Stay Connected
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: 24,
              color: "#a08654",
            }}
          >
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            insights into the world of fine perfumery.
          </p>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "12px 18px",
                borderRadius: 6,
                border: "none",
                fontSize: "1rem",
                width: 260,
                background: "#fff",
                color: "#7d6b4c",
                outline: "none",
                boxShadow: "0 1px 4px rgba(180, 164, 125, 0.06)",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#8a5a1e",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "12px 28px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 80,
            padding: "40px 0 20px 0",
            borderTop: "1px solid #f1ecd7",
            borderBottom: "1px solid #f1ecd7",
            background: "#fcfaec",
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: 220, maxWidth: 320 }}>
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#b8a47a",
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Lumera
            </h3>
            <p>
              Crafting memories, one scent at a time. Experience the art of fine
              perfumery.
            </p>
          </div>
          <div style={{ minWidth: 220, maxWidth: 320 }}>
            <h4
              style={{
                fontSize: "1.1rem",
                color: "#7d6b4c",
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li
                style={{
                  marginBottom: 8,
                  color: "#a08654",
                  cursor: "pointer",
                }}
              >
                Our Story
              </li>
              <li
                style={{
                  marginBottom: 8,
                  color: "#a08654",
                  cursor: "pointer",
                }}
              >
                Shop
              </li>
              <li
                style={{
                  marginBottom: 8,
                  color: "#a08654",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </li>
              <li
                style={{
                  marginBottom: 8,
                  color: "#a08654",
                  cursor: "pointer",
                }}
              >
                FAQ
              </li>
            </ul>
          </div>
          <div style={{ minWidth: 220, maxWidth: 320 }}>
            <h4
              style={{
                fontSize: "1.1rem",
                color: "#7d6b4c",
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Follow Us
            </h4>
            <div
              style={{
                display: "flex",
                gap: 18,
                fontSize: "1.3rem",
                marginBottom: 8,
                color: "#b8a47a",
              }}
            >
              <span>
                <i className="fa fa-facebook"></i>
              </span>
              <span>
                <i className="fa fa-instagram"></i>
              </span>
              <span>
                <i className="fa fa-twitter"></i>
              </span>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#a08654",
              }}
            >
              Subscribe to our newsletter for exclusive updates.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 12vw 12px 12vw",
            fontSize: "1rem",
            color: "#b8a47a",
            background: "#fcfaec",
            flexWrap: "wrap",
            gap: 10,
            borderTop: "1px solid #f1ecd7",
          }}
        >
          <span>© 2025 MO. All rights reserved.</span>
          <span>
            Privacy Policy | Terms of Service
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
import { useEffect, useState } from "react";
import axios from "axios";
import NoteTable from "../components/NoteTable";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Ortus",
//     image: "/images/shoes-1.jpg",
//     price: 100000,
//   },
//   {
//     id: 2,
//     name: "Sepatu Nike",
//     image: "/images/shoes-1.jpg",
//     price: 120000,
//   },
//   {
//     id: 3,
//     name: "Sepatu Adidas",
//     image: "/images/shoes-1.jpg",
//     price: 110000,
//   },
//   {
//     id: 4,
//     name: "Sepatu Puma",
//     image: "/images/shoes-1.jpg",
//     price: 150000,
//   },
//   // {
//   //   id: 5,
//   //   name: "Sepatu Ventela",
//   //   image: "/images/shoes-1.jpg",
//   //   price: 90000,
//   // },
//   // {
//   //   id: 6,
//   //   name: "Sepatu Specs",
//   //   image: "/images/shoes-1.jpg",
//   //   price: 140000,
//   // },
// ];

function Cashier() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // console.log(cart);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id) => {
    event.preventDefault();
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty : 1 }]);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <>
      <div className="flex w-full">
        <div className="w-3/5 h-full flex flex-wrap pt-6">
          {products.length > 0 &&
            products.map((product) => (
              <div
                className="w-44 h-44 bg-white rounded-md flex flex-col justify-between my-3 mx-3"
                key={product.id}
                onClick={() => handleAddToCart(product.id)}
              >
                <a href="">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-full rounded-lg h-32 object-cover"
                  />
                </a>
                <div className="px-1 pb-3">
                  <a href="">
                    <h5 className="text-xl font-semibold text-center tracking-tight text-black">
                      {product.name.length > 13
                        ? `${product.name.substring(0, 13)}...`
                        : `${product.name}`}
                    </h5>
                  </a>
                </div>
              </div>
            ))}
        </div>
        <NoteTable
          products={products}
          cart={cart}
          totalPrice={totalPrice}
          clearCart={clearCart}
        />
      </div>
    </>
  );
}

export default Cashier;

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // useEffect(() => {
  //   getProducts((data)=>{
  //     setProducts(data)
  //   })
  // }, []);

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
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setTotalPrice(0);
  };

  const handleAddToCart = (id) => {
    event.preventDefault();
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
        <div className="w-2/5">
          <h1 className="text-3xl font-bold font-serif text-center pt-6">
            New Customer
          </h1>
          <h3 className="text-xl font-bold font-serif text-center py-2 cursor-pointer hover:text-[#FFD700] hover:text-2xl transition-all duration-300">
            <Link to="/">Add Menu</Link>
          </h3>
          <table className="text-left bg-white font-mono table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr className="px-8">
                <th className="w-64 h-10">1</th>
                <th className="w-24"></th>
                <th className="text-right">View Table</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td className="text-right h-10">
                        {item.qty === 1 ? " " : "x" + `${item.qty}`}
                      </td>
                      <td className="text-right">
                        Rp{" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td className="h-10 font-semibold">Sub-Total :</td>
                <td></td>
                <td className="text-right font-semibold">
                  Rp{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
              <tr>
                <td className="h-10 font-semibold">Total :</td>
                <td></td>
                <td className="text-right font-semibold">
                  Rp{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <h3
            className="text-xl font-bold font-serif text-center py-2 cursor-pointer"
            onClick={() => clearCart()}
          >
            Clear Sale
          </h3>
          <div className="flex justify-center gap-32 py-2">
            <h3 className="text-xl font-bold font-serif text-center py-2">
              Save Bill
            </h3>
            <h3 className="text-xl font-bold font-serif text-center py-2">
              Print Bill
            </h3>
          </div>
          <div className="flex justify-center mb-6">
            <button className="bg-buttonblue  hover:bg-blue-800 text-white w-96 h-12 text-2xl font-mono rounded-md">
              Charge Rp{" "}
              {totalPrice.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cashier;

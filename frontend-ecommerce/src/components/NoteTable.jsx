import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import axios from "axios";
import AlertSuccess from "./AlertSuccess";

function NoteTable({ products, cart, totalPrice, clearCart }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    totalPrice == 0 ? "" : setModalOpen(true);
  };
  const closeModal = () => {
    setPay("");
    setModalOpen(false);
  };

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const openSuccessModal = () => setSuccessModalOpen(true);
  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
    // window.location.reload();
  };

  const [pay, setPay] = useState("");
  const kembalian = pay - totalPrice < 0 ? "" : pay - totalPrice;

  // const formatToCurrency = (number) => {
  //   return new Intl.NumberFormat("id-ID", {
  //     minimumFractionDigits: 0,
  //   }).format(number);
  // };

  // const cleanInput = (input) => {
  //   return input.replace(/[^0-9]/g, "");
  // };

  // const handleChange = (event) => {
  //   const input = event.target.value;
  //   const cleanedInput = cleanInput(input); // Hanya ambil angka
  //   setPay(formatToCurrency(cleanedInput)); // Format input menjadi IDR
  //   const calculatedChange = cleanedInput - totalPrice;
  //   calculatedChange < 0
  //     ? setChange(0)
  //     : setChange(formatToCurrency(calculatedChange));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const amount = cart.length;
    const change = pay - totalPrice;
    const id_products = cart.map((item) => item.id);
    const quantities = cart.map((item) => item.qty);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/store_cashier",
        {
          amount,
          totalPrice,
          pay,
          change,
          id_products,
          quantities,
        }
      );
      console.log("Success:", response.data);
      clearCart();
      closeModal();
      openSuccessModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-2/5">
      <h1 className="text-3xl font-bold font-serif text-center pt-6">
        Cashier Page
      </h1>
      <h3 className="text-xl font-bold font-serif text-center py-2 cursor-pointer hover:text-black hover:text-2xl transition-all duration-300">
        <Link to="/">Add Menu</Link>
      </h3>
      <table className="text-left bg-white font-mono table-auto border-separate border-spacing-x-5 ">
        <thead>
          <tr className="px-8">
            <th className="w-64 h-10">Name</th>
            <th className="w-24"></th>
            <th className="text-right">View Price</th>
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
        className="text-xl font-bold font-serif text-center py-2 cursor-pointer hover:text-black hover:text-2xl transition-all duration-300"
        onClick={() => clearCart()}
      >
        Clear Sale
      </h3>
      <div className="flex justify-center mb-6">
        <button
          className="bg-buttonblue  hover:bg-blue-800 text-white w-96 h-12 text-2xl font-mono rounded-md"
          onClick={openModal}
        >
          Charge Rp{" "}
          {totalPrice.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl mb-4">Charge Customer</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="total"
                className="block text-slate-900 text-sm font-bold mb-2"
              >
                Total
              </label>
              <label
                htmlFor="total"
                className="block text-slate-900 text-4xl font-bold mb-2"
              >
                Rp.{" "}
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="pay"
                className="block text-slate-900 text-sm font-bold mb-2"
              >
                Pay
              </label>
              <input
                type="text"
                className="text-lg font-semibold border rounded w-full py-2 px-3 text-slate-900 placeholder:opacity-50"
                placeholder="Enter your Customer Pay here"
                value={pay}
                onChange={(e) => setPay(e.target.value)}
                // onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="change"
                className="block text-slate-900 text-sm font-bold mb-2"
              >
                Change
              </label>
              <input
                type="text"
                className="text-lg font-semibold border rounded w-full py-2 px-3 text-slate-900 placeholder:opacity-50"
                placeholder="Your Customer Change Will Apppear Here"
                value={kembalian.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
                // onChange={handleChange}
                readOnly
              />
            </div>
            <button
              onClick={closeModal}
              className="mt-4 mr-4 px-4 py-2 font-semibold bg-red-700 text-white rounded hover:bg-red-800"
            >
              Close
            </button>
            <button
              type="submit"
              className="mt-4 px-4 py-2 font-semibold bg-buttonblue text-white rounded hover:bg-blue-800"
            >
              Save Bill
            </button>
          </form>
        </Modal>
        <AlertSuccess isOpen={isSuccessModalOpen} onClose={closeSuccessModal}>
          Transaksi Berhasil, Terima Kasih atas Pembeliannya !
        </AlertSuccess>
      </div>
    </div>
  );
}

export default NoteTable;

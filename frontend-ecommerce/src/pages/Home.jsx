import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/modal";
import Navbar from "../components/Navbar";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState([]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [nameEdit, setNameEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isModalOpenEdit, setModalOpenEdit] = useState(false);
  const openModalEdit = async (id) => {
    setModalOpenEdit(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/products/" + id
      );
      console.log(response.data);
      setValue(response.data);
      setNameEdit(response.data.name);
      setImageEdit(response.data.image);
      setPriceEdit(response.data.price);
    } catch (error) {
      setError(error);
    }
  };
  const closeModalEdit = () => {
    setModalOpenEdit(false);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/store_products",
        {
          name,
          image,
          price,
        }
      );

      console.log("Success:", response.data);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:8000/api/update_products/" + value.id,
        {
          nameEdit,
          imageEdit,
          priceEdit,
        }
      );

      console.log("Success:", response.data);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteProduct = async (id) => {
    const userConfirmed = window.confirm(
      "Apakah kamu yakin ingin Menghapus data ini?"
    );
    if (userConfirmed) {
      // Jika user menekan "OK"
      try {
        const response = await axios.delete(
          "http://localhost:8000/api/delete_products/" + id
        );
        console.log("Success:", response.data);
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      // Jika user menekan "Cancel"
      // window.location.reload();
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        {/* modal */}
        <div className="container mx-auto pl-4 pt-6 pb-2">
          <button
            className="h-10 px-6 font-semibold rounded-lg bg-buttonblue hover:bg-blue-800 text-white"
            onClick={openModal}
          >
            Add Product
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-2xl mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-slate-900 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                  placeholder="Enter your food here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="image"
                  className="block text-slate-900 text-sm font-bold mb-2"
                >
                  Link image
                </label>
                <input
                  type="text"
                  className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                  placeholder="Enter your link image here"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="price"
                  className="block text-slate-900 text-sm font-bold mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                  placeholder="Enter your price here"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                Submit
              </button>
            </form>
          </Modal>
          <Modal isOpen={isModalOpenEdit} onClose={closeModalEdit}>
            <h2 className="text-2xl mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-slate-900 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                  placeholder="Enter your food here"
                  name="nameEdit"
                  // value={formValues.name} // Mengontrol nilai input pertama
                  // onChange={handleInputChange}
                  value={nameEdit}
                  onChange={(e) => setNameEdit(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="image"
                  className="block text-slate-900 text-sm font-bold mb-2"
                >
                  Link image
                </label>
                <input
                  type="text"
                  className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                  placeholder="Enter your link image here"
                  // value={formValues.image} // Mengontrol nilai input pertama
                  // onChange={handleInputChange}
                  value={imageEdit}
                  onChange={(e) => setImageEdit(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="price"
                  className="block text-slate-900 text-sm font-bold mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                  placeholder="Enter your price here"
                  // value={formValues.price} // Mengontrol nilai input pertama
                  // onChange={handleInputChange}
                  value={priceEdit}
                  onChange={(e) => setPriceEdit(e.target.value)}
                />
              </div>
              <button
                onClick={closeModalEdit}
                className="mt-4 mr-4 px-4 py-2 font-semibold bg-red-700 text-white rounded hover:bg-red-800"
              >
                Close
              </button>
              <button
                type="submit"
                className="mt-4 px-4 py-2 font-semibold bg-buttonblue text-white rounded hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </Modal>
        </div>
        {/* end modal */}

        {/* table */}
        <div className="container p-2 mx-auto sm:p-4 dark:text-white">
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">Id</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {products.length > 0 &&
                products.map((product) => (
                  <tbody
                    className="border-b dark:bg-gray-50 dark:border-gray-300"
                    key={product.id}
                  >
                    <tr>
                      <td className="px-3 text-2xl font-medium dark:text-gray-800">
                        {product.id}
                      </td>
                      <td className="dark:text-gray-700 px-4">
                        {product.name}
                      </td>
                      <td className="dark:text-gray-600">
                        {product.image.substring(0, 100)}...
                      </td>
                      <td className="dark:text-gray-700 px-4">Default</td>
                      <td className="dark:text-gray-700">
                        Rp{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="flex justify-center gap-2 px-3 py-2">
                        <button
                          type="button"
                          onClick={() => openModalEdit(product.id)}
                          className="p-1 rounded-full dark:text-gray-500 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteProduct(product.id)}
                          className="p-1 rounded-full dark:text-gray-500 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
        {/* end table */}
      </div>
    </>
  );
};
export default Home;

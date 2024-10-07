import { useEffect, useState } from "react";
import AlertSuccess from "./AlertSuccess";

function Example() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="ml-6 mt-6">
      <h1 className="mb-6 text-3xl font-bold">Halaman Coba Fitur</h1>
      <button className="bg-buttonblue  hover:bg-blue-800 text-white w-96 h-12 text-2xl font-mono rounded-md" onClick={openModal}>
        Open Alert
      </button>
      <AlertSuccess isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
}

export default Example;

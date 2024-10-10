import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// Komponen yang ingin dicetak
const PrintContent = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>Ini adalah konten yang akan dicetak</h1>
    <p>Detail lain yang akan dicetak di sini...</p>
  </div>
));

const PrintComponent = () => {
  const componentRef = useRef();

  // Fungsi untuk mencetak konten
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,  // Pastikan ref mengarah ke elemen yang valid
  });

  return (
    <div>
      {/* Konten yang akan dicetak */}
      <PrintContent ref={componentRef} />
      {/* Tombol untuk memicu cetak */}
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintComponent;

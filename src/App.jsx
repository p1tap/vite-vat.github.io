import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState('');
  const [vat, setVat] = useState(0);
  const [discount, setDiscount] = useState('');

  useEffect(() => {
    const vatCal = (parseFloat(price || 0) - parseFloat(discount || 0)) * 0.07;
    setVat(vatCal);
  }, [price, discount]);

  return (
    <>
      <h2>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </h2>
      <h2>
        Discount:
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </h2>
      <h2>
        Vat: {vat.toFixed(2)}
      </h2>
      <h2>
        Gross Price: {parseFloat(price || 0) - parseFloat(discount || 0)}
      </h2>
    </>
  );
}

export default App;
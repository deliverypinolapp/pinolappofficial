import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import QuantitySelector from '../components/QuantitySelector';
import Header from '../components/Header';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useStore();
  const total = getTotal();

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div className="p-4 text-center">
          <p>Carrito vacío</p>
          <Link to="/" className="text-red-600 mt-2 inline-block">Seguir comprando</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="p-4 pb-24">
        <h2 className="text-2xl font-bold mb-4">Tu Pedido</h2>
        {cart.map((item) => (
          <div key={item.id} className="border-b py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="flex items-center gap-3">
              <QuantitySelector
                quantity={item.quantity}
                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrease={() => {
                  if (item.quantity === 1) removeFromCart(item.id);
                  else updateQuantity(item.id, item.quantity - 1);
                }}
              />
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
            </div>
          </div>
        ))}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="flex justify-between font-bold text-lg mb-2">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <Link to="/checkout" className="w-full bg-red-600 text-white py-3 rounded-full text-center block">Continuar</Link>
          <button onClick={clearCart} className="w-full border border-red-600 text-red-600 py-2 rounded-full mt-2">Vaciar carrito</button>
        </div>
      </main>
    </div>
  );
}

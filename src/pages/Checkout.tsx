import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { cart, getTotal, clearCart, addOrder, user } = useStore();
  const total = getTotal();
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!user) {
      toast.error('Debes iniciar sesión');
      navigate('/login');
      return;
    }
    const newOrder = {
      id: Date.now().toString(),
      items: cart,
      total,
      date: new Date().toISOString(),
      status: 'pending' as const,
    };
    addOrder(newOrder);
    clearCart();
    toast.success('Pedido realizado');
    navigate('/orders');
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Confirmar Pedido</h2>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="font-bold">Total: ${total}</p>
          <p className="text-sm text-gray-600 mt-2">Dirección: (mock) Barrio San Judas, Managua</p>
        </div>
        <button onClick={handleConfirm} className="w-full bg-green-600 text-white py-3 rounded-full mt-6">Confirmar Pedido</button>
      </main>
    </div>
  );
}

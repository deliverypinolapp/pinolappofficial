import { useStore } from '../store/useStore';
import Header from '../components/Header';
import { format } from 'date-fns';

export default function Orders() {
  const orders = useStore((state) => state.orders);
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Mis Pedidos</h2>
        {orders.length === 0 && <p>No hay pedidos aún.</p>}
        {orders.map((order) => (
          <div key={order.id} className="border p-3 rounded-xl mb-3">
            <p className="font-bold">Pedido #{order.id.slice(-6)}</p>
            <p>Fecha: {format(new Date(order.date), 'dd/MM/yyyy HH:mm')}</p>
            <p>Total: ${order.total}</p>
            <p>Estado: {order.status}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import MenuItem from '../components/MenuItem';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const restaurants = [
  { id: 1, name: 'El Buen Sabor', rating: 4, time: 25, price: 550 },
  { id: 2, name: 'Súper Típico', rating: 4, time: 25, price: 550 },
  { id: 3, name: 'Pizza', rating: 4, time: 25, price: 550 },
];

const offers = [
  { title: 'Combo Típico', description: 'Típico ótato', oldPrice: 560, price: 300 },
  { title: 'Bajo', description: 'Perfecto, susadita, con plátano', price: 100 },
  { title: 'Con Níceros', description: 'Pedido cigarrillo desabaste, con gallo pinto y ensalada', price: 100 },
];

export default function Home() {
  return (
    <div className="pb-20">
      <Header />
      <main className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Hola, Carlos 👋</h2>
          <p className="text-gray-500">¿Qué te gustaría pedir hoy?</p>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Buscar en PinolApp" className="w-full border rounded-full py-2 pl-10 pr-4" />
          </div>
        </div>

        <section className="mb-6">
          <h3 className="font-bold text-lg mb-2">Restaurantes Cercanos</h3>
          <div className="space-y-3">
            {restaurants.map((r) => (
              <Link to={`/restaurant/${r.id}`} key={r.id}>
                <RestaurantCard {...r} />
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="font-bold text-lg mb-2">Ofertas del Día</h3>
          <div className="grid grid-cols-1 gap-3">
            {offers.map((o, i) => <MenuItem key={i} {...o} />)}
          </div>
        </section>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around">
          <Link to="/cart" className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md">Comienza a pedir</Link>
          <Link to="/login" className="border border-red-600 text-red-600 px-6 py-2 rounded-full">Iniciar sesión</Link>
        </div>
      </main>
    </div>
  );
}

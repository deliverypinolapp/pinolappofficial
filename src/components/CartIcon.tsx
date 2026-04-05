import { ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';

export default function CartIcon() {
  const cart = useStore((state) => state.cart);
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

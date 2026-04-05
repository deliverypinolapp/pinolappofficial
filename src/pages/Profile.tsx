import { useStore } from '../store/useStore';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Profile() {
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada');
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold">Mi Perfil</h2>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout} className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full">Cerrar sesión</button>
      </main>
    </div>
  );
}

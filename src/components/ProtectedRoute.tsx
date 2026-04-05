import { Navigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const user = useStore((state) => state.user);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

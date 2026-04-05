import { Minus, Plus } from 'lucide-react';

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({ quantity, onIncrease, onDecrease }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={onDecrease} className="border rounded-full w-8 h-8 flex items-center justify-center">
        <Minus size={16} />
      </button>
      <span className="w-8 text-center">{quantity}</span>
      <button onClick={onIncrease} className="border rounded-full w-8 h-8 flex items-center justify-center">
        <Plus size={16} />
      </button>
    </div>
  );
}

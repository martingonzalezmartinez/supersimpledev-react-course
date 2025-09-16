import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { OrderHeader } from "./OrderHeader";

export function OrderContainer({ order }) {
  return (
    <div key={order.id} className="order-container">
      <OrderHeader order={order} />
      <OrderDetailsGrid order={order} />
    </div>
  );
}
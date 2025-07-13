import { getCartsByUser } from "@/lib/calls";
import UserCartCard from "./user-cart-card";

export default async function UserDetailCartWrapper({
  userId,
}: {
  userId: string;
}) {
  const carts = await getCartsByUser(userId);
  return (
    <div>
      {carts.length == 0 ? (
        <p>No Carts found</p>
      ) : (
        carts.map((cart: any) => (
          <UserCartCard key={"cart_" + cart.id} cart={cart} />
        ))
      )}
    </div>
  );
}

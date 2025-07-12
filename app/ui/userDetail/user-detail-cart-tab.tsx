import { getCartsByUser } from "@/lib/calls";
import UserCartCard from "./user-cart-card";

export default async function UserDetailCartTab({
  userId,
}: {
  userId: string;
}) {
  const carts = await getCartsByUser(userId);
  return (
    <div>
      <h1 className="text-lg font-bold ml-5">Current Carts</h1>
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

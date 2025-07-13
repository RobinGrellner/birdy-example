import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function UserCartCard({ cart }: { cart: any }) {
  return (
    <Card className="my-3">
      <CardContent>
        {cart.products.map((product: any) => (
          <div key={"cart_" + cart.id + "_product_" + product.id}>
            <div className="grid grid-cols-5">
              <p className="col-span-3">{product.title}</p>
              <span className="text-end mr-2">{product.price}$</span>
              <span className="justify-self-end lg:justify-self-start w-fit h-fit bg-gray-100 text-gray-800 px-2 py-1 text-xs rounded">
                {product.quantity}
              </span>
            </div>
            <Separator className="mb-3" />
          </div>
        ))}
        <div className="text-center">
          Price ({cart.totalQuantity} products): {" "}
          <span className="font-bold">{cart.discountedTotal}$</span>
        </div>
      </CardContent>
    </Card>
  );
}

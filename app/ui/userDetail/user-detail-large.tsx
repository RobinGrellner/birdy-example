import { Separator } from "@/components/ui/separator";
import { UserInfoDetail } from "./user-detail-info-tab";
import { Suspense } from "react";
import { PostCartCardsSkeleton } from "../skeletons";
import { UserCartCardWrapper } from "./user-cart-card";
import { UserPostCardWrapper } from "./user-post-card";

export default function UserDetailLarge({
  className,
  info,
}: {
  className?: string;
  info: UserInfoDetail;
}) {
  className = typeof className === "undefined" ? "" : className;
  return (
    <>
      <div className={className + " hidden md:flex lg:grid lg:grid-cols-3"}>
        <div className="mx-5 self-start">
          <h1 className="text-lg font-bold">Account Information</h1>
          <p>
            <span className="font-semibold">Username:</span> {info.username}
          </p>
          <p>
            <span className="font-semibold">E-Mail:</span> {info.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {info.phone}
          </p>
          <h1 className="text-md font-bold">Personal Address</h1>
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {info.address.country}
          </p>
          <p>
            <span className="font-semibold">City:</span> {info.address.city}
          </p>
          <p>
            <span className="font-semibold">Postal Code:</span>{" "}
            {info.address.postalCode}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {info.address.address}
          </p>
        </div>
        <div className="mx-5">
          <h1 className="text-lg font-bold">Banking Information</h1>
          <p>
            <span className="font-semibold">Type of Card:</span>{" "}
            {info.bank.cardType}
          </p>
          <p>
            <span className="font-semibold">Currency:</span>{" "}
            {info.bank.currency}
          </p>
          <p>
            <span className="font-semibold">IBAN:</span> {info.bank.iban}
          </p>
          <p>
            <span className="font-semibold">Card Number:</span>{" "}
            {info.bank.cardNumber}
          </p>
          <p>
            <span className="font-semibold">Expiration Date:</span>{" "}
            {info.bank.cardExpire}
          </p>
        </div>
        <div className="mx-5">
          <h1 className="text-lg font-bold">Company Information</h1>
          <p>
            <span className="font-semibold">Company:</span> {info.company.name}
          </p>
          <p>
            <span className="font-semibold">Department:</span>{" "}
            {info.company.department}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {info.company.title}
          </p>
          <h1 className="text-md font-bold">Company Address</h1>
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {info.company.address.country}
          </p>
          <p>
            <span className="font-semibold">City:</span>{" "}
            {info.company.address.city}
          </p>
          <p>
            <span className="font-semibold">Postal Code:</span>{" "}
            {info.company.address.postalCode}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {info.company.address.address}
          </p>
        </div>
      </div>
      <Separator className={className + " my-3"} />
      <div className={className + " hidden md:grid md:grid-cols-2"}>
        <div className="ml-5">
          <h1 className="text-lg font-bold">Recent Posts</h1>
          <Suspense fallback={<PostCartCardsSkeleton />}>
            <UserPostCardWrapper userId={info.id} />
          </Suspense>
        </div>
        <div className="ml-5">
          <h1 className="text-lg font-bold">Current Carts</h1>
          <Suspense fallback={<PostCartCardsSkeleton />}>
            <UserCartCardWrapper userId={info.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

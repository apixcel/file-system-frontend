"use client";
import { clearPlanData } from "@/redux/features/plans/plan.slice";
import { useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setUser } from "@/redux/features/auth/auth.slice";
import { useGetAuthorQuery } from "@/redux/features/auth/auth.api";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetAuthorQuery(undefined);

  // useEffect(() => {
  //   dispatch(clearPlanData());
  // }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      console.log("get auth", data.data); 
      dispatch(setUser(data.data)); 
    }
    Cookies.remove("redirect");

  }, [isSuccess]);

  return (
    <main className="max-w-6xl mx-auto p-10 text-center border border-green-400 m-10 rounded-md">
      <div className="mb-10">
        <p className="text-7xl mb-5">🎉</p>
        <h1 className="text-4xl font-extrabold mb-2 text-green-500">
          Congratulation!
        </h1>
        <h2 className="text-2xl">Your payment was successfully received!</h2>

        <div className="p-5 text-green-500 mt-2 text-4xl font-bold">
          ${amount}
        </div>
        <Link href="/profile">
          <button className="p-3 rounded-xl bg-green-500 text-white hover:bg-green-600">
            Go to Profile
          </button>
        </Link>
      </div>
    </main>
  );
}

'use client'
import Link from "next/link";
import React from "react";
import ProductCard from "../shared/Card";
import { productsFake } from "@/mocks/cardData";
import { useGetAllProductsQuery } from "@/redux/features/product/product.api";

const FreeFile = () => {
  const { data, isSuccess, isLoading, error } = useGetAllProductsQuery({
    limit: 3,
  });

  return (
    <section className="mt-[60px] mb-[40px] container_main">
      <h6 className="text-3xl font-semibold mb-[20px] text-center text-primaryTxt">
        2 Files Free For New Users
      </h6>

      <div className="w-full flex flex-col items-center justify-center text-primaryTxt">
        <p className="text-center leading-[132%] md:w-[400px]">
          Get 2 hands-free files like web templates, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit, quaerat.
        </p>
        <Link
          href="/signup"
          className="bg-btnColor font-bold text-white px-[20px] py-[12px] rounded-lg mt-[20px] "
        >
          Create New Account
        </Link>
      </div>
      <p className="mt-[10px] text-gray-400 text-center">
        You can select any two file
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[10px]">
        {isSuccess && data.data.map((product:any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Link
          href="/product"
          className="bg-btnColor font-bold text-white px-[20px] py-[12px] rounded-lg mt-[20px]"
        >
          More
        </Link>
      </div>
    </section>
  );
};

export default FreeFile;

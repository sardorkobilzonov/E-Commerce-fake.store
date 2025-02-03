import React, { useEffect, useState } from "react";
import { request } from "../../api";
// import Loading from "../loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 8,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("There is an error in the system", err));
  }, []);
  return (
    <>
      <div className="container mx-auto pt-20">
        <div className="flex flex-col items-center gap-2.5 pb-20">
          <p className="text-center text-xl text-gray-400">Featured Products</p>
          <h4 className="text-center text-2xl font-bold text-slate-800">
            BESTSELLER PRODUCTS
          </h4>
          <p className="text-center text-sm text-gray-400">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
      </div>
      <div className="mb-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <div key={product.id} className="p-4 shadow-md">
              <img
                src={product.image}
                className="h-[250px]"
                alt={product.title}
              />
              <h2 className="pt-3.5">{product.title}</h2>
              <p>{product.category}</p>
              <p className="text-emerald-700 text-base font-bold">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

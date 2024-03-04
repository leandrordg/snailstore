import { ProductProps } from "@/typings";

export const fetchProducts = async ({
  limit,
  skip,
}: {
  limit?: number;
  skip?: number;
}) => {
  const response = await fetch(
    `https://dummyjson.com/products${limit ? `?limit=${limit}` : ""}${
      skip ? `&skip=${skip}` : ""
    }`
  );
  const data = await response.json();

  return data.products as ProductProps[];
};

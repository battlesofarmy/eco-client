import Link from "next/link";
import Image from "next/image";
import CartWishlistIcon from "@/components/CartWishlistIcon";
import axios from "axios";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";


// export default async function Products(context) {
export default async function Products({params}) {
    const { subCatId } = await params;


  let subcategories = [];

  try {
    const res = await api.get(`/products/subcategory/${productId}`);
    subcategories = res.data;

  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return (
    <>
    context page
        <section className="py-10">
            <div className="container">
                <div className="grid grid-cols-4 gap-6">
                {subcategories?.map((ele) => (
                    <div className="shadow relative" key={ele._id}>
                    <Link href={`/muntasir`}>
                        <Image
                            src={ele.img}
                            alt={ele.name}
                            width={300}
                            height={300}
                            className="w-full h-auto"
                        />
                    </Link>

                    {/* Prodcut wishlist & cart icon  */}
                    <div className="absolute top-2 right-2">
                        <CartWishlistIcon ele={ele} />
                    </div>
                    <div className="p-3 bg-white text-center">
                        <h2>{ele.name}</h2>
                    </div>

                    </div>
                ))}
                </div>
            </div>
        </section>
    </>
  );
}

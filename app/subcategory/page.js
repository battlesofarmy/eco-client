import Link from "next/link";
import Image from "next/image";
import api from "@/utils/axiosCongif";

export default async function Categories() {
  let categories = [];

  try {
    const res = await api.get("/subcategories");
    categories = res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-5 gap-6">
          {categories.map((ele) => (
            <div className="shadow" key={ele.id}>
              <Link href={`/subcategory/${ele.subCatId}`}>
                <Image src={ele.img} alt={ele.name} width={300} height={300} />
              </Link>
              <div className="p-3 bg-white text-center">
                <h2>{ele.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


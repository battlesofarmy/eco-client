import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default async function SubCatagories({params}) {
  const { catId } = params;

  // Fetch data on the server
  // const res = await fetch(`http://localhost:5000/subcategories/category/${catId}`);
  // const subcategories = await res.json();

  // Fetch data on the server
  const res = await axios.get(`/subcategories/category/${catId}`);
  const subcategories = await res.data;


  return (
    <>
    adsf
      <section className="py-10">
          <div className="container">
              <div className="grid grid-cols-5 gap-6">
              {subcategories?.map((ele) => (
                
                  <div className="shadow" key={ele.id}>
                    {console.log(ele)}
                  <Link href={`/category/${ele.catId}/${ele.subCatId}`}>
                    <Image
                        src={ele.img}
                        alt={ele.name}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                    />
                  </Link>
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

import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default async function Catagories() {
  // Fetch data on the server
  // const res = await fetch("http://localhost:5000/categories");
  // const categories = await res.json();

  const res = await axios.get('/categories');
  const categories = await res.data;


  return (
    <>
    cat page
      <section className="py-10">
          <div className="container">
              <div className="grid grid-cols-5 gap-6">
              {categories?.map((ele) => (
                  <div className="shadow" key={ele.id}>
                  <Link href={`/category/${ele.id}`}>
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

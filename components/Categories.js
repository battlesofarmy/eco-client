import Link from "next/link";
import Image from "next/image";
import api from "@/utils/axiosCongif";

export default async function Catagories() {
  // Fetch data on the server
  let categories =[];
  try{
    const res = await api.get('/categories');
    categories = res.data;

  }catch(err){
    console.log(err)
  }

  return (
    <>
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

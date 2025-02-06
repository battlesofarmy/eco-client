import Link from "next/link";
import Image from "next/image";
import api from "@/utils/axiosCongif";


export default async function PopularProduct() {

  let subcategories =[];
  try{
    const res = await api.get(`/subcategories/category/106`);
    subcategories = res.data;
    console.log("Hi")

  }catch(err){
    console.log(err)
  }

  console.log("johfa")

  return (
    <>
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

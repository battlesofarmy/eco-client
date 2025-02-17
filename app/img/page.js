// pages/gallery.js

import Image from 'next/image';

export async function getServerSideProps() {
  const cloudName = "<YOUR_CLOUD_NAME>"; // Get from Cloudinary dashboard
  const folderName = "gallery";
  
  const res = await fetch(
    `https://res.cloudinary.com/${cloudName}/image/list/${folderName}.json`
  );
  const data = await res.json();
  
  const images = data.resources.map((img) => ({
    id: img.public_id,
    src: `https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}.jpg`
  }));

  return {
    props: {
      images,
    },
  };
}

export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img) => (
        <Image
          key={img.id}
          src={img.src}
          alt={img.id}
          width={300}
          height={200}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}

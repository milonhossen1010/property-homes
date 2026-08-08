import Image from 'next/image';

export default function Cover({ children, background }) {
  return (
    <div className="relative text-white h-screen bg-gray-700 min-h-[300px] flex justify-center items-center">
      {background && <Image
        alt="cover"
        src={background}
        fill
        className="mix-blend-soft-light1 object-cover"
      />}
      <div className="max-w-5xl z-10 text-center">{children}</div>
    </div>
  );
}

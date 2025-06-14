import Image from 'next/image';

export default function Cover({ children, background }) {
  return (
    <div className="relative text-white h-screen bg-slate-800 min-h-[400px] flex justify-center items-center">
      <Image
        alt="cover"
        src={background}
        fill
        className="mix-blend-soft-light object-cover"
      />
      <div className='max-w-5xl z-10'>{children}</div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Logo({logo}) {
  return (
    <Link href="/" className="text-3xl text-white   uppercase ">
      {logo && (
        <Image
          src={logo.sourceUrl}
          alt={logo?.altText}
          className="max-w-[200px] rounded-full max-h-[60px] object-contain"
          width={200}
          height={200}
        />
      )}
    </Link>
  );
}
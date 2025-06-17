import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';
import { FaBed, FaCat } from 'react-icons/fa';
import { LuBath } from 'react-icons/lu';
import { IoCarOutline } from 'react-icons/io5';

export default function PropertyItem({
  title,
  link,
  bedrooms,
  bathrooms,
  hasParking,
  petFriendly,
  price,
  image,
}) {
  return (
    <Link
      href={link}
      className=" group shadow-lg rounded-md overflow-hidden text-gray-800"
    >
      <div className="flex w-full overflow-hidden">
        <Image
          className="duration-400 h-[250px] w-full object-cover group-hover:scale-110"
          src={image}
          height={200}
          width={300}
          objectFit="cover"
          alt="FeaturedImage"
        />
      </div>
      <div className="p-5">
        <h3 className="mt-3 text-lg font-bold">{title}</h3>
        <div className=" text-lg ">$ {numeral(price).format('0,0')}</div>
        <div className="flex justify-between  mt-3 ">
          <div className="flex gap-2 items-center">
            <FaBed />
            <span>{bedrooms} bedrooms</span>
          </div>
          <div className="flex gap-2 items-center">
            <LuBath />
            <span>{bathrooms} bathrooms</span>
          </div>
        </div>

        {(!!petFriendly || !!hasParking) && (
          <div className="flex justify-between  mt-3 ">
            {hasParking && (
              <p className='flex gap-2 items-center'>
                <IoCarOutline />
                <span>parking available</span>
              </p>
            )}
            {petFriendly && (
              <p className='flex gap-2 items-center'>            
                <FaCat />
                <span>pet friendly</span>
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}

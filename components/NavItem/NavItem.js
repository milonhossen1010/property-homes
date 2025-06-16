import Link from "next/link"

export default function NavItem({ items }) {
  
  return items?.map((item, index) => (
    <div key={index} className=" hover:bg-slate-700 relative group text-white ">
      <Link className="p-4 block text-white " href={item.menuItem?.link?.uri}>
        {item.menuItem.label}
      </Link>
      {!!item.menuItem?.submenuItems?.length && (
        <div className="group-hover:block md:hidden md:bg-slate-800 md:text-right md:absolute right-0 top-full pl-5 md:pl-0 ">
          {item.menuItem.submenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link.uri}
              className="block whitespace-nowrap text-white p-4 hover:bg-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  ));
}
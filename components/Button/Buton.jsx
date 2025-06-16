import Link from "next/link";

export default function Button({link, label}) {
  return (
    <Link className="btn" href={link}>
      {label}
    </Link>
  );
}
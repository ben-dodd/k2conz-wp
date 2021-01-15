import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-row object-right">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <Link href="/">
        <a className="hover:underline">Services</a>
      </Link>
      <Link href="/">
        <a className="hover:underline">Resources</a>
      </Link>
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      <Link href="/">
        <a className="hover:underline">Contact</a>
      </Link>
    </div>
  );
}

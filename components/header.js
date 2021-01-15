import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <img
        src="https://www.k2.co.nz/wp-content/uploads/2020/06/K2-1.svg"
        className="object-left h-32 w-32"
      />
      <Menu />
    </div>
  );
}

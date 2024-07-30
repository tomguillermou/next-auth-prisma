import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function ButtonHome() {
  return (
    <Link href="/" className="btn btn-ghost text-lg">
      <FiHome />
      Home
    </Link>
  );
}

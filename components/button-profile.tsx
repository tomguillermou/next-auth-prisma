import { User } from "next-auth";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

export default function ButtonProfile({ user }: { user: User }) {
  return (
    <Link className="btn btn-ghost" href="/profile">
      <p>{user.name}</p>
      <FiUser size={24} />
    </Link>
  );
}

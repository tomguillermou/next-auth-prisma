import Link from "next/link";
import { FiHome, FiLogIn } from "react-icons/fi";

import { auth } from "@/app/auth";

import ButtonLogout from "./button-logout";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="navbar justify-between max-w-5xl mx-auto">
      <LinkHome />

      {session ? <ButtonLogout /> : <LinkLogin />}
    </header>
  );
}

function LinkHome() {
  return (
    <Link href="/" className="btn btn-ghost text-lg">
      <FiHome />
      Home
    </Link>
  );
}

function LinkLogin() {
  return (
    <Link href="/login" className="btn text-lg">
      <FiLogIn />
      Sign in
    </Link>
  );
}

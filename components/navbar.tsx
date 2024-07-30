import { auth } from "@/app/auth";

import ButtonGoogleConnect from "./button-google-connect";
import ButtonHome from "./button-home";
import ButtonProfile from "./button-profile";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="navbar justify-between">
      <ButtonHome />
      {session?.user ? <ButtonProfile user={session.user} /> : <ButtonGoogleConnect />}
    </header>
  );
}

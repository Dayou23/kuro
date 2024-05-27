import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div>
        <nav className="relative max-w-7xl lg:mx-auto md:px-10 xl:px-0 w-full  px-4 py-4 flex justify-between items-center bg-white">
          <Link href="/" className="w-36">
            <Image
              src="/assets/images/kuraLogo.png"
              width={90}
              height={38}
              alt="kuro logo"
            />
          </Link>
          <SignedIn>
            <NavItems />
          </SignedIn>
          <div className="flex w-32 justify-end gap-3 items-center">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
          </div>
          <SignedOut>
            <button className="inline-block ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">
              <Link href="/sign-in">Login</Link>
            </button>
            <button className="inline-block py-2 px-6 bg-primary hover:bg-teal-800 text-sm  text-white  font-bold rounded-xl transition duration-200">
              <Link href="/sign-up">Signup</Link>
            </button>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

export default Header;

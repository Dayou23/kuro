"use client";
import { headerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-primary-50">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Image
                src="/assets/images/kuraLogo.png"
                alt="logo"
                width={128}
                height={38}
              />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Kuro is the top platform for finding and sharing tech events.
              Discover conferences, workshops, and meetups. Connect with
              industry leaders and innovators.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;

              return (
                <>
                  <li
                    key={link.route}
                    className={`${isActive && "font-bold text-primary"} `}
                  >
                    <Link
                      href={link.route}
                      className={`text-sm  hover:text-primary `}
                    >
                      {link.label}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

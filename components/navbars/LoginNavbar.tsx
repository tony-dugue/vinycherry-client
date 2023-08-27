'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { AuthNavbarMenuMobile } from '@/components/navbars';
import { authLinks } from '@/data/general';

const LoginNavbar = () => {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center fixed top-4 left-1/2 w-[1044px] max-w-[90%] backdrop-blur-xl mx-auto py-[22px] px-[16px] rounded-[15px] 
      translate-y-0 translate-x-[-50%] shadow-authnavbar bg-gradient-authnavbar"
    >
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex leading-[100%] font-bold text-sm justify-center items-center text-gray-700"
        >
          VINYCHERRY
        </Link>

        <div className="hidden lg:flex">
          {authLinks.map( route => (
            <Link 
              href={route.href} 
              key={route.href} 
              className={cn("text-sm ms-0 px-3 me-0 sm:me-[2px] md:me-4 font-bold",
              pathname === route.href ? 'text-primary-400 cursor-default' : 'text-gray-700')}
            >
              <div className="flex items-center flex-1">
                {route.label}
              </div>
            </Link>
          ))}
        </div>

        <Link href="https://tonydugue.fr" target="_blank">
          <Button className="hidden lg:flex">Mon portfolio</Button>
        </Link>

        <div className="lg:hidden">
          <AuthNavbarMenuMobile />
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;

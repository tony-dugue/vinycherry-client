'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { AuthNavbarMenuMobile } from "@/components/navbars";
import { authLinks } from '@/data/general';

const RegisterNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center mt-4 left-1/2 w-[1044px] max-w-[90%] mx-auto py-[22px] px-[16px] bg-none z-999">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex leading-[100%] font-bold text-sm justify-center items-center text-white">VINYCHERRY</Link>

        <div className="hidden lg:flex">
          {authLinks.map( route => (
            <Link 
              href={route.href} 
              key={route.href} 
              className={cn("text-sm ms-0 px-3 me-0 sm:me-[2px] md:me-4 font-bold",
              pathname === route.href ? 'text-gray-700 cursor-default' : 'text-white')}
            >
              <div className="flex items-center flex-1">
                {route.label}
              </div>
            </Link>
          ))}
        </div>

        <Link href="https://tonydugue.fr" target="_blank">
          <Button variant="secondary" className='hidden lg:flex'>Mon portfolio</Button>
        </Link>

        <div className="lg:hidden">
          <AuthNavbarMenuMobile color="text-white" />
        </div>

      </div>
    </div>
  );
};

export default RegisterNavbar;

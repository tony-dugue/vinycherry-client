'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components//ui/sheet";
import { authLinks } from '@/data/general';

interface Props {
  color?: string;
}

const AuthNavbarMenuMobile = ({ color }: Props) => {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className={color && color}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="p-0 flex flex-col items-center justify-center">
        {authLinks.map( route => (
          <Link 
            href={route.href} 
            key={route.href} 
            className={cn("text-sm text-gray-700 font-bold my-1",
            pathname === route.href ? 'text-primary-400 cursor-default' : 'text-gray-700')}
          >
            <div className="flex items-center flex-1">
              <route.icon className="h-5 w-5 mr-3" />
              {route.label}
            </div>
          </Link>
        ))}

        <Link href="https://tonydugue.fr" target="_blank" className='mt-10'>
          <Button>Mon portfolio</Button>
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default AuthNavbarMenuMobile;

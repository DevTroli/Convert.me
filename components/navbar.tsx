// imports
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function Navbar({ }): any {
  return (
    <nav className="w-full bg-slate-900 z-50 h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="cursor-pointer w-40"
          src="/images/logo.svg"
          height={100}
          width={170}
        />
      </Link>
      <Link href="https://github.com/DevTroli/Convert.me.git" target='blank'>
        <Button
          variant="outline"
          className="rounded-full w-fit bg-orange-500 gap-2 border-none items-center hidden md:flex"
          size="lg"
        >
          <span className='text-slate-900'>Open Source</span>
          <span className="text-xl text-slate-900">
            <BsGithub />
          </span>
        </Button>
      </Link>
    </nav>
  );
}

'use client';

import Link from 'next/link';

const AuthFooter = () => {
  return (
    <div className="flex items-center justify-center px-[30px] pb-[20px]">
      <p className="text-gray-400 text-sm text-center xl:text-start mb-[20px] xl:mb-0">
        &copy; 2023 <span>Made with ❤️ by </span>
        <Link
          href="https://tonydugue.fr"
          target="blank"
          className="text-primary-400 cursor-pointer outline-none transition ease-out"
        >
          Tony Dugué{' '}
        </Link>
      </p>
    </div>
  );
};

export default AuthFooter;

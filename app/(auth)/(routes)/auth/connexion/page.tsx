import Image from 'next/image';

import loginImage from '@/assets/img/bg-vinyl.png';
import { LoginForm } from '@/components/forms';
import { LoginNavbar } from '@/components/navbars';

const ConnexionPage = () => {
  return (
    <div className="flex relative mb-10">
      <div className="flex h-[75vh] lg:h-[85vh] w-full max-w-[1044px] mx-auto justify-start mb-[30px] sm:pt-[100px] md:pt-0">
        <div className="flex items-center justify-start select-none w-full md:w-[50%] lg:w-[42%]">
          <div className="flex flex-col w-full bg-transparent p-[48px] lg:md-[150px] lg:mt-[80px]">
            <h2 className="text-primary-300 font-bold font-sans leading-[1.2] text-[32px] mb-3">
              Hello
            </h2>

            <p className="text-gray-400 mb-9 ms-[4px] font-bold text-sm">
              Saisir votre email et votre mot de passe pour vous connecter
            </p>

            <LoginForm />

            <div className="flex flex-col justify-center items-center max-w-full mt-0">
              <p className="text-gray-400 text-sm font-medium">
                Vous n&apos;êtes pas inscrit ?
                <span
                  //onClick={() => console.log('click')}
                  className="ml-2 font-normal text-primary-300 outline-none no-underline cursor-pointer transition ease-out"
                >
                  Créer un compte
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block overflow-x-hidden h-full w-[40vw] absolute right-0">
          <div className="w-full h-full">
            <Image
              src={loginImage}
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
              className="absolute rounded-bl-[20px] bg-[50%_center] pr-20"
            />
          </div>
        </div>
      </div>
      <LoginNavbar />
    </div>
  );
};

export default ConnexionPage;

import { RegisterForm } from '@/components/forms';
import { RegisterNavbar } from '@/components/navbars';

const InscriptionPage = () => {
  return (
    <>
      <div className="flex flex-col self-center justify-self-center overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 min-h-[70vh] md:min-h-[50vh] md:w-[calc(100vw_-_50px)] overflow-hidden md:mx-auto md:mt-[14px] z-[-1]
        bg-gradient-to-br from-primary-300 to-primary-600 md:rounded-[15px]"
        >
          {/*<Image src={bgRegister} alt="" layout="fill" objectFit="cover" quality={100} className="md:rounded-[15px] bg-no-repeat" />*/}
        </div>
      </div>

      <RegisterNavbar />

      <div className="flex flex-col items-center align-center justify-center text-center mb-[30px]">
        <p className="text-white font-bold font-sans text-[2.25rem]">Bienvenue !</p>
        <p className="text-white font-sans text-md mt-[10px] mb-[26px] w-[90%] sm:w-[60%] lg:w-[40%] xl:w-[30%]">
          Utiliser ce formulaire pour créer gratuitement un compte sur l&apos;application
        </p>
      </div>

      <div className="flex items-center justify-center mb-[60px] mt-[20px]">
        <div className="flex flex-col w-[445px] bg-white rounded-[15px] p-[40px] mx-[100px] shadow-registerForm">
          <p className="text-xl text-gray-700 font-bold text-center mb-[22px] font-body">
            S&apos;inscrire
          </p>

          {/* Social account */}
          {/*
          <p className="text-xl text-gray-700 font-bold text-center mb-[22px] font-body">
            S&apos;inscrire avec
          </p>

          <div className="flex items-center justify-center mb-[22px]">
            <div
              className="flex items-center justify-center mr-[15px] w-[75px] h-[75px] rounded-[15px] border border-gray-300 cursor-pointer 
            transition duration-200 backdrop-brightness-[120%] hover:bg-primary-200 hover:border-none"
            >
              <Link href="#">F</Link>
            </div>

            <div
              className="flex items-center justify-center mr-[15px] w-[75px] h-[75px] rounded-[15px] border border-gray-300 cursor-pointer 
            transition duration-200 backdrop-brightness-[120%] hover:bg-primary-200 hover:border-none"
            >
              <Link href="#">G</Link>
            </div>

            <div
              className="flex items-center justify-center w-[75px] h-[75px] rounded-[15px] border border-gray-300 cursor-pointer 
            transition duration-200 backdrop-brightness-[120%] hover:bg-primary-200 hover:border-none"
            >
              <Link href="#">I</Link>
            </div>
          </div>

          <p className="text-lg text-gray-400 font-bold text-center mb-[22px] font-body">ou</p>
          */}

          <RegisterForm />

          <div className="flex flex-col justify-center items-center max-w-full mt-0">
            <p className="text-gray-400 text-sm font-medium">
              Vous avez déjà un compte ?
              <span
                //onClick={() => console.log('click')}
                className="ml-2 text-primary-300 font-normal outline-none no-underline cursor-pointer transition ease-out"
              >
                Se connecter
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InscriptionPage;

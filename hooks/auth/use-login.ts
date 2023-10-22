import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

import { LoginUserDto, useAuthControllerLoginMutation } from '@/store/services/authApi';
import { setAuth, setUserInformation } from '@/store/features/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { useUserControllerGetUserQuery } from '@/store/services/userApi';

const loginFormSchema = z.object({
  email: z
    .string()
    .min(3, { message: 'Votre email est requis.' })
    .email("Cet email n'est pas valide."),
  //.refine(async (e) => {
  //  // Where checkIfEmailIsValid makes a request to the backend to see if the email is valid.
  //  return await checkIfEmailIsValid(e);
  //}, "This email is not in our database")
  password: z.string().min(4, { message: 'Votre mot de passe est requis.' }),
});

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const [authControllerLogin, { isLoading }] = useAuthControllerLoginMutation();
  const { data: user } = useUserControllerGetUserQuery();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: LoginUserDto) => {
    authControllerLogin({ loginUserDto: values })
    .unwrap()
    .then(() => {
      useUserControllerGetUserQuery;
      dispatch(setUserInformation(user))
    })
    .then(() => {
      dispatch(setAuth())
      toast.success('Connection réussie');
      router.push('/mon-espace');
    })
    .catch((err) => {
      toast.error(err.data.message);
    });
  };

  return { form, isLoading, onSubmit };
};

export default useLogin;

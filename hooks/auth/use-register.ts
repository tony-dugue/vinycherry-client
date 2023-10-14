import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

import { RegisterUserDto, useAuthControllerRegisterMutation } from '@/store/services/authApi';

const registerFormSchema = z
  .object({
    firstName: z.string().min(1, { message: 'Votre prénom est requis.' }),
    lastName: z.string().min(1, { message: 'Votre nom est requis.' }),
    email: z
      .string()
      .min(1, { message: 'Votre email est requis.' })
      .email("Cet email n'est pas valide."),
    password: z.string().min(4, { message: 'Votre mot de passe est requis.' }),
    confirmationPassword: z.string().min(4, { message: 'Votre mot de passe est requis.' }),
  })
  .refine((values) => values.password === values.confirmationPassword, {
    message: 'Les mots de passe ne sont pas identique.',
    path: ['confirmPassword'],
  });

const useRegister = () => {
  const router = useRouter();
  const [authControllerRegister, { isLoading }] = useAuthControllerRegisterMutation();

  const form = useForm<RegisterUserDto>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmationPassword: '',
    },
  });

  //const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: RegisterUserDto) => {
    authControllerRegister({ registerUserDto: values })
      .unwrap()
      .then(() => {
        toast.success('Compte crée avec succès');
        router.push('/auth/connexion');
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return { isLoading, form, onSubmit }
}

export default useRegister;

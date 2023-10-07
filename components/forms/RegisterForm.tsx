'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

import Spinner from '@/components/common/Spinner';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { AuthInput } from '@/components/ui/input';
import { RegisterUserDto, useAuthControllerRegisterMutation } from '@/store/services/authApi';

const formSchema = z
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

const RegisterForm = () => {
  const router = useRouter();
  const [authControllerRegister, { isLoading }] = useAuthControllerRegisterMutation();

  const form = useForm<RegisterUserDto>({
    resolver: zodResolver(formSchema),
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="firstName"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="ms-[4px] text-sm font-normal">Prénom</FormLabel>
              <FormControl>
                <AuthInput type="text" disabled={isLoading} placeholder="Votre prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="lastName"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="ms-[4px] text-sm font-normal">Nom</FormLabel>
              <FormControl>
                <AuthInput type="text" disabled={isLoading} placeholder="Votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="ms-[4px] text-sm font-normal">Email</FormLabel>
              <FormControl>
                <AuthInput
                  type="text"
                  disabled={isLoading}
                  placeholder="Votre adresse email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="ms-[4px] text-sm font-normal">Mot de passe</FormLabel>
              <FormControl>
                <AuthInput
                  type="password"
                  disabled={isLoading}
                  placeholder="Votre mot de passe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="confirmationPassword"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="ms-[4px] text-sm font-normal">
                Répéter le mot de passe
              </FormLabel>
              <FormControl>
                <AuthInput
                  type="password"
                  disabled={isLoading}
                  placeholder="Votre mot de passe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="submit" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner sm /> : "S'INSCRIRE"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

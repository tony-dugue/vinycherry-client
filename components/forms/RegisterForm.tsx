'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AuthInput } from '@/components/ui/input';

const formSchema = z
  .object({
    firstname: z.string().min(1, { message: 'Votre prénom est requis.' }),
    lastname: z.string().min(1, { message: 'Votre nom est requis.' }),
    email: z
      .string()
      .min(1, { message: 'Votre email est requis.' })
      .email("Cet email n'est pas valide."),
    password: z.string().min(4, { message: 'Votre mot de passe est requis.' }),
    confirmPassword: z.string().min(4, { message: 'Votre mot de passe est requis.' }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Les mots de passe ne sont pas identique.",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstname: '', lastname: '', email: '', password: '', confirmPassword: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="firstname"
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
          name="lastname"
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
          name="confirmPassword"
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
          S&apos;INSCRIRE
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

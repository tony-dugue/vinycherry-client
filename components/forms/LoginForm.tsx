'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"


import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AuthInput } from '@/components/ui/input';

const formSchema = z.object({
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

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <FormItem className="mb-4">
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

        {/*
                <p className="ms-[4px] text-sm mb-[0.5rem]">Email</p>
        <input
          type="text"
          className="w-full min-w-0 outline-none appearance-none transition duration-200 ps-4 pe-4 h-[3rem] border hover:border-gray-300 
          focus:border-primary-300 focus:shadow-focus relative rounded-[15px] mb-6 text-sm"
          placeholder="Votre adresse email"
        />

        <p className="ms-[4px] text-sm mb-[0.5rem]">Mot de passe</p>
        <input
          type="password"
          className="w-full min-w-0 outline-none appearance-none transition duration-200 ps-4 pe-4 h-[3rem] border hover:border-gray-300 
          focus:border-primary-300 focus:shadow-focus relative rounded-[15px] mb-6 text-sm"
          placeholder="Votre mot de passe"
        />
        */}

        <Button variant="submit" type="submit" disabled={isLoading}>
          CONNEXION
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

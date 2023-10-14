import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

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
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: '', password: '' },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };

  return { form, isLoading, onSubmit }
}

export default useLogin;
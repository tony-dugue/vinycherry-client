'use client';

import { AuthFormField } from '@/components/elements/forms';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useLogin } from '@/hooks/auth';

const LoginForm = () => {
  const { form, isLoading, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AuthFormField
          name="email"
          type="email"
          label="Email"
          disabled={isLoading}
          placeholder="Votre adresse email"
          autoComplete="email"
        />

        <AuthFormField
          name="password"
          type="password"
          label="Mot de passe"
          disabled={isLoading}
          placeholder="Votre mot de passe"
          autoComplete="current-password"
        />

        <Button variant="submit" type="submit" disabled={isLoading}>
          CONNEXION
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

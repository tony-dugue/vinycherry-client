'use client';

import { AuthFormField } from '@/components/elements/forms';
import { Spinner } from '@/components/elements/spinners';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useRegister } from '@/hooks/auth';

const RegisterForm = () => {
  const { isLoading, form, onSubmit } = useRegister();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AuthFormField
          name="firstName"
          type="text"
          label="Prénom"
          disabled={isLoading}
          placeholder="Votre prénom"
          autoComplete="given-name"
        />

        <AuthFormField
          name="lastName"
          type="text"
          label="Nom"
          disabled={isLoading}
          placeholder="Votre nom"
          autoComplete="family-name"
        />

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
          autoComplete="off"
        />

        <AuthFormField
          name="confirmationPassword"
          type="password"
          label="Répéter le mot de passe"
          disabled={isLoading}
          placeholder="Votre mot de passe"
          autoComplete="off"
        />

        <Button variant="submit" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner sm /> : "S'INSCRIRE"}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

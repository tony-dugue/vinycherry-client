'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { logout as setLogout } from '@/store/features/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { useAuthControllerLogoutMutation } from '@/store/services/authApi';
import { useUserControllerGetUserQuery } from '@/store/services/userApi';

const MonEspacePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [authControllerLogout] = useAuthControllerLogoutMutation();
  const { data: user } = useUserControllerGetUserQuery();

  const handleLogout = () => {
    authControllerLogout()
      .unwrap()
      .then(() => dispatch(setLogout()))
      .finally(() => router.push('/connexion'));
  };

  return (
    <>
      <p>Page - Mon espace</p>
      <Button onClick={handleLogout}>Se déconnecter</Button>
      <div>
        <p>id : {user?.id}</p>
        <p>email : {user?.email}</p>
        <p>prénom : {user?.firstName}</p>
        <p>nom : {user?.lastName}</p>
        <p>role : {user?.role}</p>
      </div>
    </>
  );
};

export default MonEspacePage;

'use client';

import { Spinner } from '@/components/elements/spinners';
import { useAppSelector } from '@/store/hooks';
import { redirect } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const RequireAuth = ({ children }: Props) => {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    redirect('/connexion');
  }
  
  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return <>{children}</>;
};

export default RequireAuth;

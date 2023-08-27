import { AuthFooter } from '@/components/footers';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <main className="w-full">{children}</main>

      <div className="px-6 mx-auto w-[1044px] max-w-full">
        <AuthFooter />
      </div>
    </div>
  );
};

export default AuthLayout;

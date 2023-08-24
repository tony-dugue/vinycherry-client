const AuthLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="w-full">

      {/* AuthNavbar */}

      <main className="w-full">
        {children}
      </main>

      <div className="px-6 mx-auto w-[1044px] max-w-full">
         {/* Footer */}
      </div>
    </div>
  )
}

export default AuthLayout;
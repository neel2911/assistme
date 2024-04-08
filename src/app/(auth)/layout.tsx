import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          AssistMe
        </div>
        <div className="flex h-full justify-center items-center">
          <Image
            className="absolute"
            src="/login.svg"
            alt="auth image"
            width={600}
            height={600}
          />
        </div>
      </div>
      {children}
    </div>
  );
}

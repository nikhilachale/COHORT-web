export default function Home({children}: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="py-2 w-screen h-fit bg-slate-300">
       top layout
        {children}
      </div>
    );
  }
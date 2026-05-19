export default function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="animate-fade-in">{children}</div>;
}

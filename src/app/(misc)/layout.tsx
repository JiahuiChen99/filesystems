export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-20 my-10 text-justify">{children}</main>;
}

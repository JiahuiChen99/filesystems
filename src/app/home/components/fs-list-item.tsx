import Link from "next/link";

export function FSListItem({ href, name }: { href: string; name: string }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="flex cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 justify-center rounded-md px-10 py-4 w-full">
        {name}
      </Link>
    </li>
  );
}

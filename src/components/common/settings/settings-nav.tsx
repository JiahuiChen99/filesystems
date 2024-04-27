import clsx from "clsx";
import { Settings } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SETTINGS_TABS = [
  {
    title: "General",
    icon: <Settings size={22} />,
  },
  {
    title: "EXT2",
    icon: <Settings size={22} />,
  },
  {
    title: "FAT16",
    icon: <Settings size={22} />,
  },
];

export function SettingsNav() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  return (
    <nav className="flex flex-col min-w-60 bg-black px-4 py-10 h-full rounded-tl-lg rounded-bl-lg gap-y-2 text-white">
      {SETTINGS_TABS.map((item) => {
        const { title, icon } = item;
        const selected = title.toLowerCase() === tab?.toLowerCase();
        return (
          <div
            key={item.title}
            className={clsx(
              "w-full flex  rounded-md p-1.5 gap-x-2 text-sm cursor-pointer",
              { "hover:bg-white/30": !selected },
              { "bg-white/40 font-bold": selected }
            )}
            onClick={() => router.push(`${pathname}?tab=${title}`)}>
            {icon}
            <span className="flex-none">{title}</span>
          </div>
        );
      })}
    </nav>
  );
}

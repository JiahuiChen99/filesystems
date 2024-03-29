import Link from "next/link";
import { StorageLottie } from "./home/components/storage-lottie";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between my-24">
      <div className="flex flex-col place-items-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-black">
            The interactive docs for File Systems
          </h1>
          <p className="text-gray-500">
            An engaging and interactive experience to understand file systems,
            the engine that powers the storage of your data.
          </p>
        </div>
        <ul className="my-10 space-y-2.5">
          <li className="flex">
            <Link
              href="/ext2"
              className="flex cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 justify-center rounded-md px-10 py-4 w-full">
              The second Extended File Systems (EXT2)
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/fat16"
              className="flex cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 justify-center rounded-md px-10 py-4 w-full">
              Fat Allocation Table 16 (FAT16)
            </Link>
          </li>
        </ul>
      </div>
      <StorageLottie />
    </main>
  );
}

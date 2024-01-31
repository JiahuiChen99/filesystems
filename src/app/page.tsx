import { StorageLottie } from "./home/components/storage-lottie";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <h1 className="text-5xl font-bold">
            The interactive docs for File Systems
          </h1>
          <p className="text-gray-500 ">
            An engaging and interactive experience to understand file systems,
            the engine that powers the storage of your data.
          </p>
        </div>
        <ul>
          <li>
            <a href="/ext2">The second Extended File Systems (EXT2)</a>
          </li>
          <li>
            <a href="/fat16">Fat Allocation Table 16 (FAT16)</a>
          </li>
        </ul>
      </div>
      <StorageLottie />
    </main>
  );
}

import { StorageLottie } from "./home/components/storage-lottie";
import { FSListItem } from "./home/components/fs-list-item";
import { FSList } from "./home/data/fs-list-data";

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
          {FSList.map((item) => (
            <FSListItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <StorageLottie />
    </main>
  );
}

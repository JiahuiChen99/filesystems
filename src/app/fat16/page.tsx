import { FAT16 as FAT16Graphic } from "./(fat16-parts)/components/graphic/fat16";

export default function FAT16() {
  return (
    <section className="flex p-10 w-full h-full justify-center align-middle">
      <FAT16Graphic />
    </section>
  );
}

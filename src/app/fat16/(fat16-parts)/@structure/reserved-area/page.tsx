import { Metadata } from "next";
import { FAT16ReservedArea } from "../../components/graphic/fat16-reserved-area";
import { TableGraphic } from "@/components/common/table-graphic";
import { fat16ReservedAreaData } from "../../@extended/reserved-area/data/fat16-reserved-area";

export const metadata: Metadata = {
  title: "Reserved Area",
};

const Graphic = (
  <div className="px-24 w-full h-[700px]">
    <FAT16ReservedArea />
  </div>
);

export default function ReservedArea() {
  return <TableGraphic data={fat16ReservedAreaData} graphic={Graphic} />;
}

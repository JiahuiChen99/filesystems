"use client";
import { groupStyle, hoverStyle } from "./ext2-styles";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "@/store/store-hooks";
import {
  changeSelectedFSComponent,
  selectFSComponent,
} from "@/app/store/global-slice";

const EXT2BlockGroup = ({
  dynamicStyles = false,
}: {
  dynamicStyles?: boolean;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedComponent = useStoreSelector(selectFSComponent);

  const onGroupClick = (e: React.MouseEvent<SVGGElement>) => {
    const component = e.currentTarget.parentElement?.getAttribute("data-id");
    if (!component) return;
    dispatch(changeSelectedFSComponent(component));
    const location = window.location;
    router.push(`${location.origin}/ext2/${component}`);
  };

  const getTextStyles = (component: string) => {
    if (!dynamicStyles) return;
    if (component !== selectedComponent)
      return {
        opacity: 0.25,
        color: "grey",
      } as React.SVGProps<SVGTextElement>;
    return { color: "black" };
  };

  const getRectStyles = (component: string) => {
    if (!dynamicStyles) return;
    if (component !== selectedComponent)
      return {
        stroke: "black",
        fill: "white",
      } as React.SVGProps<SVGRectElement>;
    return { stroke: "black" };
  };

  return (
    <svg viewBox="0 0 758 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ext2-all">
        <g id="ext2-block-group-layout">
          <g
            id="data-blocks-g"
            data-id="data-blocks"
            {...getTextStyles("data-blocks")}>
            <g
              id="data-blocks-rect"
              className={groupStyle}
              onClick={onGroupClick}>
              <rect
                x="459.5"
                y="0.5"
                width="298"
                height="44"
                stroke="black"
                {...getRectStyles("data-blocks")}
                className={hoverStyle}
              />
              <text
                id="data blocks"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="574.902" y="26.8636">
                  Data Blocks
                </tspan>
              </text>
            </g>
            <text
              id="# blocks_6"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="583.814" y="59.8636">
                N blocks
              </tspan>
            </text>
          </g>
          <g
            id="inode-table-g"
            data-id="inode-table"
            {...getTextStyles("inode-table")}>
            <g
              id="inode-table-rect"
              className={groupStyle}
              onClick={onGroupClick}>
              <rect
                x="332.5"
                y="0.5"
                width="126"
                height="44"
                fill="white"
                stroke="black"
                {...getRectStyles("inode-table")}
                className={hoverStyle}
              />
              <text
                id="inode table"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="362.488" y="26.8636">
                  Inode Table
                </tspan>
              </text>
            </g>
            <text
              id="# blocks_5"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="370.814" y="59.8636">
                N blocks
              </tspan>
            </text>
          </g>
          <g
            id="inode-bitmap-g"
            data-id="inode-bitmap"
            {...getTextStyles("inode-bitmap")}>
            <g
              id="inode-bitmap-rect"
              className={groupStyle}
              onClick={onGroupClick}>
              <rect
                x="262.5"
                y="0.5"
                width="69"
                height="44"
                fill="white"
                stroke="black"
                {...getRectStyles("inode-bitmap")}
                className={hoverStyle}
              />
              <text
                id="inode bitmap"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="279.416" y="19.3636">
                  Inode &#10;
                </tspan>
                <tspan x="277.242" y="34.3636">
                  Bitmap
                </tspan>
              </text>
            </g>
            <text
              id="# blocks_4"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="277.178" y="59.8636">
                1 block
              </tspan>
            </text>
          </g>
          <g
            id="block-bitmap-g"
            data-id="block-bitmap"
            {...getTextStyles("block-bitmap")}>
            <g
              id="block-bitmap-rect"
              className={groupStyle}
              onClick={onGroupClick}>
              <rect
                x="192.5"
                y="0.5"
                width="69"
                height="44"
                fill="white"
                stroke="black"
                {...getRectStyles("block-bitmap")}
                className={hoverStyle}
              />
              <text
                id="block bitmap"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="209.791" y="19.3636">
                  Block &#10;
                </tspan>
                <tspan x="207.242" y="34.3636">
                  Bitmap
                </tspan>
              </text>
            </g>
            <text
              id="# blocks_3"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="207.178" y="59.8636">
                1 block
              </tspan>
            </text>
          </g>
          <g
            id="block-group-descriptor-g"
            data-id="block-group-descriptor"
            {...getTextStyles("block-group-descriptor")}>
            <g
              id="block-group-descriptor-rect"
              className={groupStyle}
              onClick={onGroupClick}>
              <rect
                x="64.5"
                y="0.5"
                width="127"
                height="44"
                fill="white"
                stroke="black"
                {...getRectStyles("block-group-descriptor")}
                className={hoverStyle}
              />
              <text
                id="block group descriptorr"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="91.7891" y="19.3636">
                  Block Group &#10;
                </tspan>
                <tspan x="98.4395" y="34.3636">
                  Descriptor
                </tspan>
              </text>
            </g>
            <text
              id="# blocks_2"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="103.314" y="59.8636">
                N blocks
              </tspan>
            </text>
          </g>
          <g
            id="super-block-g"
            data-id="super-block"
            {...getTextStyles("super-block")}>
            <g
              id="super-block-rect"
              className={groupStyle}
              onClick={onGroupClick}>
              <rect
                x="0.5"
                y="0.5"
                width="63"
                height="44"
                fill="white"
                stroke="black"
                {...getRectStyles("super-block")}
                className={hoverStyle}
              />
              <text
                id="super block"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="15.3066" y="19.3636">
                  Super &#10;
                </tspan>
                <tspan x="16.4785" y="34.3636">
                  Block
                </tspan>
              </text>
            </g>
            <text
              id="# blocks"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="12.1777" y="59.8636">
                1 block
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};
export { EXT2BlockGroup };

"use client";
import type { MouseEvent } from "react";
import { groupStyle, hoverStyle } from "./ext2-styles";

const EXT2BlockGroup = () => {
  const onGroupClick = (e: MouseEvent<SVGGElement>) => {
    const component = e.currentTarget.getAttribute("data-id");
    const location = window.location;
    location.href = `${location.origin}/ext2/${component}`;
  };
  return (
    <svg viewBox="0 0 646 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ext2-all">
        <g id="ext2-block-layout">
          <g
            id="data-blocks-g"
            data-id="data-blocks"
            onClick={onGroupClick}
            className={groupStyle}>
            <rect
              x="439.5"
              y="0.5"
              width="206"
              height="44"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="data blocks"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="508.902" y="26.8636">
                Data Blocks
              </tspan>
            </text>
          </g>
          <g
            id="inode-table-g"
            data-id="inode-table"
            onClick={onGroupClick}
            className={groupStyle}>
            <rect
              x="326.5"
              y="0.5"
              width="113"
              height="44"
              fill="white"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="inode table"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="349.988" y="26.8636">
                Inode Table
              </tspan>
            </text>
          </g>
          <g
            id="inode-bitmap-g"
            data-id="inode-bitmap"
            onClick={onGroupClick}
            className={groupStyle}>
            <rect
              x="259.5"
              y="0.5"
              width="67"
              height="44"
              fill="white"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="inode bitmap"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="275.416" y="19.3636">
                Inode &#10;
              </tspan>
              <tspan x="273.242" y="34.3636">
                Bitmap
              </tspan>
            </text>
          </g>
          <g
            id="block-bitmap-g"
            data-id="block-bitmap"
            onClick={onGroupClick}
            className={groupStyle}>
            <rect
              x="192.5"
              y="0.5"
              width="67"
              height="44"
              fill="white"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="block bitmap"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="208.791" y="19.3636">
                Block &#10;
              </tspan>
              <tspan x="206.242" y="34.3636">
                Bitmap
              </tspan>
            </text>
          </g>
          <g
            id="block-group-g"
            data-id="block-group-descriptor"
            onClick={onGroupClick}
            className={groupStyle}>
            <rect
              x="85.5"
              y="0.5"
              width="107"
              height="44"
              fill="white"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="block group descriptor"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="102.789" y="19.3636">
                Block Group &#10;
              </tspan>
              <tspan x="109.439" y="34.3636">
                Descriptor
              </tspan>
            </text>
          </g>
          <g
            id="super-block-g"
            data-id="super-block"
            onClick={onGroupClick}
            className={groupStyle}>
            <rect
              x="0.5"
              y="0.5"
              width="85"
              height="44"
              fill="white"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="super block"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="9.09766" y="26.8636">
                Super Block
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};
export { EXT2BlockGroup };

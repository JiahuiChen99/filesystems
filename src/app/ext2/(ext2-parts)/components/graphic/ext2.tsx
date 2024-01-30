"use client";
import React from "react";
import { EXT2BlockGroup } from "./ext2-block-group";
import { groupStyle, hoverStyle } from "./ext2-styles";

export function EXT2() {
  const [isEXT2Expanded, setIsEXT2Expanded] = React.useState<boolean>(false);
  const onBlockGroupClick = () => setIsEXT2Expanded((prevState) => !prevState);
  return (
    <svg viewBox="0 0 646 149" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isEXT2Expanded && (
        <g className="flex">
          <line
            id="line-2"
            x1="199.144"
            y1="44.4787"
            x2="0.144346"
            y2="104.479"
            stroke="black"
            strokeDasharray="2 2"
          />
          <line
            id="line-1"
            x1="316.09"
            y1="44.5081"
            x2="645.09"
            y2="104.508"
            stroke="black"
            strokeDasharray="2 2"
          />
          <g transform="translate(0,52)">
            <EXT2BlockGroup />
          </g>
        </g>
      )}
      <g id="ext2-all">
        <g id="ext2-global-layout">
          <g id="block-group-n-g" cursor="default">
            <rect
              x="528.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group n"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="546.271" y="26.8636">
                Block Group N
              </tspan>
            </text>
          </g>
          <g id="...-g" cursor="default">
            <rect
              x="433.5"
              y="0.5"
              width="95"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="..."
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="476.043" y="26.8636">
                ...
              </tspan>
            </text>
          </g>
          <g id="block-group-2-g" cursor="default">
            <rect
              x="316.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group 2"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="335.156" y="26.8636">
                Block Group 2
              </tspan>
            </text>
          </g>
          <g
            id="block-group-1-g"
            onClick={onBlockGroupClick}
            className={groupStyle}>
            <rect
              x="199.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="block group 1"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="219" y="26.8636">
                Block Group 1
              </tspan>
            </text>
          </g>
          <g id="block-group-0-g" cursor="default">
            <rect
              x="82.5"
              y="0.5"
              width="117"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="block group 0"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="101.039" y="26.8636">
                Block Group 0
              </tspan>
            </text>
          </g>
          <g id="boot-sector-g" cursor="default">
            <rect
              x="0.5"
              y="0.5"
              width="82"
              height="44"
              fill="white"
              stroke="black"
            />
            <text
              id="boot sector"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="7.94336" y="26.8636">
                Boot Sector
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}

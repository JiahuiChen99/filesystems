"use client";
import React from "react";
import { EXT2BlockGroup } from "./ext2-block-group";
import { groupStyle, hoverStyle } from "./ext2-styles";
import { usePathname, useRouter } from "next/navigation";
import {
  changeSelectedFSComponent,
  selectEXT2BlockGroupColors,
} from "@/app/store/global-slice";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "@/store/store-hooks";

export function EXT2() {
  const [isEXT2Expanded, setIsEXT2Expanded] = React.useState<boolean>(false);
  const onBlockGroupClick = () => setIsEXT2Expanded((prevState) => !prevState);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const clickHandle = (id: string) => {
    dispatch(changeSelectedFSComponent(id));
    router.push(`${pathname}/${id}`);
  };

  const EXT2BlockGroupComponentColors = useStoreSelector(
    selectEXT2BlockGroupColors
  );

  const groupHandlers = {
    "super-block": clickHandle,
    "block-group-descriptor": clickHandle,
    "block-bitmap": clickHandle,
    "inode-bitmap": clickHandle,
    "inode-table": clickHandle,
    "data-blocks": clickHandle,
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 758 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {isEXT2Expanded && (
        <g className="flex">
          <line
            id="line-2"
            x1="268.109"
            y1="44.4879"
            x2="0.109233"
            y2="104.488"
            stroke="black"
            strokeDasharray="2 2"
          />
          <line
            id="line-1"
            x1="406.084"
            y1="44.5071"
            x2="757.084"
            y2="104.507"
            stroke="black"
            strokeDasharray="2 2"
          />
          <g transform="translate(0,52)">
            <EXT2BlockGroup
              onGroupClickHandlers={groupHandlers}
              colors={EXT2BlockGroupComponentColors}
            />
          </g>
        </g>
      )}
      <g id="ext2-all">
        <g id="ext2-global-layout">
          <g
            id="block-group-n-g"
            onClick={onBlockGroupClick}
            className={groupStyle}
            cursor="default">
            <g id="block-group-n-rect">
              <rect
                x="616.5"
                y="0.5"
                width="141"
                height="44"
                fill="white"
                className={hoverStyle}
              />
              <rect x="616.5" y="0.5" width="141" height="44" stroke="black" />
              <text
                id="block group n"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="646.271" y="26.8636">
                  Block Group N
                </tspan>
              </text>
            </g>
          </g>
          <g id="...-g" cursor="default">
            <g id="...-rect">
              <rect x="546.5" y="0.5" width="69" height="44" fill="white" />
              <rect x="546.5" y="0.5" width="69" height="44" stroke="black" />
              <text
                id="..."
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="576.043" y="26.8636">
                  ...
                </tspan>
              </text>
            </g>
          </g>
          <g
            id="block-group-2-g"
            cursor="default"
            onClick={onBlockGroupClick}
            className={groupStyle}>
            <g id="block-group-2-rect">
              <rect
                x="406.5"
                y="0.5"
                width="139"
                height="44"
                fill="white"
                className={hoverStyle}
              />
              <rect x="406.5" y="0.5" width="139" height="44" stroke="black" />
              <text
                id="block group 2"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="436.156" y="26.8636">
                  Block Group 2
                </tspan>
              </text>
            </g>
          </g>
          <g
            id="block-group-1-g"
            onClick={onBlockGroupClick}
            className={groupStyle}>
            <g id="block-group-1-rect">
              <rect
                x="268.5"
                y="0.5"
                width="137"
                height="44"
                fill="white"
                className={hoverStyle}
              />
              <rect x="268.5" y="0.5" width="137" height="44" stroke="black" />
              <text
                id="block group 1"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="298" y="26.8636">
                  Block Group 1
                </tspan>
              </text>
            </g>
          </g>
          <g
            id="block-group-0-g"
            onClick={onBlockGroupClick}
            className={groupStyle}
            cursor="default">
            <g id="block-group-0-rect">
              <rect
                x="128.5"
                y="0.5"
                width="139"
                height="44"
                fill="white"
                className={hoverStyle}
              />
              <rect x="128.5" y="0.5" width="139" height="44" stroke="black" />
              <text
                id="block group 0"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="158.039" y="26.8636">
                  Block Group 0
                </tspan>
              </text>
            </g>
          </g>
          <g id="boot-sector-g" cursor="default">
            <g id="boot-sector-rect">
              <rect x="0.5" y="0.5" width="127" height="44" fill="white" />
              <rect x="0.5" y="0.5" width="127" height="44" stroke="black" />
              <text
                id="boot sector"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em">
                <tspan x="30.4434" y="26.8636">
                  Boot Sector
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

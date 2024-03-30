"use client";
import type { MouseEvent } from "react";
import { groupStyle, hoverStyle } from "./fat16-styles";

export function FAT16() {
  const onFAT16SectionClick = (e: MouseEvent<SVGGElement>) => {
    const component = e.currentTarget.getAttribute("data-id");
    const location = window.location;
    location.href = `${location.origin}/fat16/${component}`;
  };

  return (
    <svg viewBox="0 0 649 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="649" height="45" fill="#1E1E1E" />
      <g id="FAT16">
        <rect
          width="732"
          height="389"
          transform="translate(-41 -39)"
          fill="white"
        />
        <g id="fat16-all">
          <g
            id="data-g"
            data-id="data"
            onClick={onFAT16SectionClick}
            className={groupStyle}>
            <rect x="438.5" y="0.5" width="210" height="44" fill="white" />
            <rect
              x="438.5"
              y="0.5"
              width="210"
              height="44"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="data"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="468.447" y="26.8636">
                Data (files and directories)
              </tspan>
            </text>
          </g>
          <g
            id="root-directory-g"
            data-id="root-directory"
            onClick={onFAT16SectionClick}
            className={groupStyle}>
            <rect x="321.5" y="0.5" width="117" height="44" fill="white" />
            <rect
              x="321.5"
              y="0.5"
              width="117"
              height="44"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="root directory"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="339.061" y="26.8636">
                Root Directory
              </tspan>
            </text>
          </g>
          <g
            id="fat-2-g"
            data-id="fat-2"
            onClick={onFAT16SectionClick}
            className={groupStyle}>
            <rect x="230.5" y="0.5" width="91" height="44" fill="white" />
            <rect
              x="230.5"
              y="0.5"
              width="91"
              height="44"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="fat 2"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="260.309" y="26.8636">
                FAT 2
              </tspan>
            </text>
          </g>
          <g
            id="fat-1-g"
            data-id="fat-1"
            onClick={onFAT16SectionClick}
            className={groupStyle}>
            <rect x="142.5" y="0.5" width="89" height="44" fill="white" />
            <rect
              x="142.5"
              y="0.5"
              width="89"
              height="44"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="fat 1"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="172.152" y="26.8636">
                FAT 1
              </tspan>
            </text>
          </g>
          <g
            id="reserved-area-g"
            data-id="reserved-area"
            onClick={onFAT16SectionClick}
            className={groupStyle}>
            <rect x="0.5" y="0.5" width="142" height="44" fill="white" />
            <rect
              x="0.5"
              y="0.5"
              width="142"
              height="44"
              stroke="black"
              className={hoverStyle}
            />
            <text
              id="reserved area"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="30.0566" y="26.8636">
                Reserved Area
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}

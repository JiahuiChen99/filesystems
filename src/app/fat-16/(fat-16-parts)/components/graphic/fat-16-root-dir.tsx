"use client";
import type { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { changeSelection } from "../../../store/fat16-slice";
import { groupStyle, hoverStyle } from "./fat-16-styles";

export function FAT16RootDir() {
  const dispatch = useDispatch();
  const onPropertyClick = (e: MouseEvent<SVGGElement>) => {
    const selection = e.currentTarget.getAttribute("data-id");
    dispatch(changeSelection(selection));
  };

  return (
    <svg viewBox="0 0 308 325" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="308" height="325" fill="#1E1E1E" />
      <g id="FAT16 - Root Directory Area">
        <rect
          width="732"
          height="490"
          transform="translate(-19 -106)"
          fill="white"
          className={hoverStyle}
        />
        <g id="directory-all">
          <g id="fat16-dir-content">
            <g id="dir-content">
              <g
                id="filesize"
                data-id="dir_filesize"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="293.5"
                  width="118"
                  height="31"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="293.5"
                  width="118"
                  height="31"
                  stroke="black"
                />
                <text
                  id="dir_filesize"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="219.994" y="312.636">
                    DIR_FileSize
                  </tspan>
                </text>
              </g>
              <g
                id="fstcluslo"
                data-id="dir_fstcluslo"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="269.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="269.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_fstcluslo"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="213.939" y="285.136">
                    DIR_FstClusLO
                  </tspan>
                </text>
              </g>
              <g
                id="wrtdate"
                data-id="dir_wrtdate"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="245.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="245.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_wrtdate"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="218.534" y="261.136">
                    DIR_WrtDate
                  </tspan>
                </text>
              </g>
              <g
                id="wrttime"
                data-id="dir_wrttime"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="221.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="221.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_wrttime"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="218.222" y="237.136">
                    DIR_WrtTime
                  </tspan>
                </text>
              </g>
              <g
                id="fstclushi"
                data-id="dir_fstclushi"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="197.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="197.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_fstclushi"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="215.395" y="213.136">
                    DIR_FstClusHI
                  </tspan>
                </text>
              </g>
              <g
                id="lstaccdate"
                data-id="dir_lstaccdate"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="173.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="173.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_lstaccdate"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="210.81" y="189.136">
                    DIR_LstAccDate
                  </tspan>
                </text>
              </g>
              <g
                id="crtdate"
                data-id="dir_crtdate"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="149.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="149.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_crtdate"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="219.672" y="165.136">
                    DIR_CrtDate
                  </tspan>
                </text>
              </g>
              <g
                id="crttime"
                data-id="dir_crttime"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="125.5"
                  width="118"
                  height="24"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="125.5"
                  width="118"
                  height="24"
                  stroke="black"
                />
                <text
                  id="dir_crttime"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="219.643" y="141.136">
                    DIR_CtrTime
                  </tspan>
                </text>
              </g>
              <g
                id="crttimetenth"
                data-id="dir_crttimetenth"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="111.5"
                  width="118"
                  height="14"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="111.5"
                  width="118"
                  height="14"
                  stroke="black"
                />
                <text
                  id="dir_crttimetenth"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="206.137" y="122.136">
                    DIR_CrtTimeTenth
                  </tspan>
                </text>
              </g>
              <g
                id="ntres"
                data-id="dir_ntres"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="97.5"
                  width="118"
                  height="14"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="97.5"
                  width="118"
                  height="14"
                  stroke="black"
                />
                <text
                  id="dir_ntres"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="222.46" y="108.136">
                    DIR_NTRes
                  </tspan>
                </text>
              </g>
              <g
                id="attr"
                data-id="dir_attr"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="83.5"
                  width="118"
                  height="14"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="83.5"
                  width="118"
                  height="14"
                  stroke="black"
                />
                <text
                  id="dir_attr"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="229.423" y="94.1364">
                    DIR_Attr
                  </tspan>
                </text>
              </g>
              <g
                id="name"
                data-id="dir_name"
                onClick={onPropertyClick}
                className={groupStyle}
              >
                <rect
                  x="189.5"
                  y="39.5"
                  width="118"
                  height="44"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="189.5"
                  y="39.5"
                  width="118"
                  height="44"
                  stroke="black"
                />
                <text
                  id="dir_name"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="224.286" y="65.1364">
                    DIR_Name
                  </tspan>
                </text>
              </g>
            </g>
            <text
              id="fat16-dir-content-title"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="190.005" y="13.7273">
                FAT16 DIR Content
              </tspan>
            </text>
          </g>
          <g id="Expand Lines">
            <line
              id="Line 2"
              x1="158.594"
              y1="82.7076"
              x2="189.594"
              y2="39.7076"
              stroke="black"
              strokeDasharray="2 2"
            />
            <line
              id="Line 3"
              x1="158.494"
              y1="126.922"
              x2="189.494"
              y2="323.922"
              stroke="black"
              strokeDasharray="2 2"
            />
          </g>
          <g id="root-dir-content">
            <g id="offset-increment">
              <path
                id="Line 1"
                d="M22.6464 126.354C22.8417 126.549 23.1583 126.549 23.3536 126.354L26.5355 123.172C26.7308 122.976 26.7308 122.66 26.5355 122.464C26.3403 122.269 26.0237 122.269 25.8284 122.464L23 125.293L20.1716 122.464C19.9763 122.269 19.6597 122.269 19.4645 122.464C19.2692 122.66 19.2692 122.976 19.4645 123.172L22.6464 126.354ZM23.3536 83.6464C23.1583 83.4512 22.8417 83.4512 22.6464 83.6464L19.4645 86.8284C19.2692 87.0237 19.2692 87.3403 19.4645 87.5355C19.6597 87.7308 19.9763 87.7308 20.1716 87.5355L23 84.7071L25.8284 87.5355C26.0237 87.7308 26.3403 87.7308 26.5355 87.5355C26.7308 87.3403 26.7308 87.0237 26.5355 86.8284L23.3536 83.6464ZM23.5 126L23.5 84H22.5L22.5 126H23.5Z"
                fill="black"
              />
              <text
                id="&#206;&#148;offset"
                transform="translate(0 124) rotate(-90)"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="0.0883789" y="10.5">
                  &#x394;offset
                </tspan>
              </text>
            </g>
            <g id="first-root-dir-pointer">
              <path
                id="Arrow 6"
                d="M16 40H15.5V40.5H16V40ZM29 40L24 37.1132V42.8868L29 40ZM15.5 18.5L15.5 40H16.5L16.5 18.5H15.5ZM16 40.5H24.5V39.5H16V40.5Z"
                fill="black"
              />
              <text
                id="sector = FirstRootDirSecNum"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="2.00977" y="10.5">
                  sector = FirstRootDirSecNum
                </tspan>
              </text>
            </g>
            <g id="fat16-root-dir">
              <g id="fat16-dir-n">
                <rect
                  x="31.5"
                  y="214.5"
                  width="127"
                  height="44"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="31.5"
                  y="214.5"
                  width="127"
                  height="44"
                  stroke="black"
                />
                <text
                  id="fat16 dir n"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="60.4648" y="240.864">
                    FAT16 DIR N
                  </tspan>
                </text>
              </g>
              <g id="suspensive-dots">
                <rect
                  x="31.5"
                  y="170.5"
                  width="127"
                  height="44"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="31.5"
                  y="170.5"
                  width="127"
                  height="44"
                  stroke="black"
                />
                <text
                  id="dots"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="90.043" y="196.864">
                    ...
                  </tspan>
                </text>
              </g>
              <g id="fat16-dir-2">
                <rect
                  x="31.5"
                  y="126.5"
                  width="127"
                  height="44"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="31.5"
                  y="126.5"
                  width="127"
                  height="44"
                  stroke="black"
                />
                <text
                  id="fat16 dir 2"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="61.3496" y="152.864">
                    FAT16 DIR 2
                  </tspan>
                </text>
              </g>
              <g id="fat16-dir-1" className={groupStyle}>
                <rect
                  x="31.5"
                  y="83.5"
                  width="127"
                  height="44"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="31.5"
                  y="83.5"
                  width="127"
                  height="44"
                  stroke="black"
                />
                <text
                  id="fat16 dir 1"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="62.1934" y="109.864">
                    FAT16 DIR 1
                  </tspan>
                </text>
              </g>
              <g id="fat16-dir-0">
                <rect
                  x="31.5"
                  y="39.5"
                  width="127"
                  height="44"
                  fill="white"
                  className={hoverStyle}
                />
                <rect
                  x="31.5"
                  y="39.5"
                  width="127"
                  height="44"
                  stroke="black"
                />
                <text
                  id="fat16 dir 0"
                  fill="black"
                  fontFamily="Inter"
                  fontSize="12"
                  letterSpacing="0em"
                >
                  <tspan x="61.2324" y="65.8636">
                    FAT16 DIR 0
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

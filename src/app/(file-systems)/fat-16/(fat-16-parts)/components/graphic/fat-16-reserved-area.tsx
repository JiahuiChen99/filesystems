"use client";
import type { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { changeSelection } from "../../../store/fat-16-slice";
import { groupStyle, hoverStyle } from "./fat-16-styles";

export function FAT16ReservedArea() {
  const dispatch = useDispatch();
  const onPropertyClick = (e: MouseEvent<SVGGElement>) => {
    const selection = e.currentTarget.getAttribute("data-id");
    dispatch(changeSelection(selection));
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 148 487"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="148" height="487" fill="#1E1E1E" />
      <g id="FAT16 - Reserved Area">
        <rect
          width="732"
          height="632"
          transform="translate(-41 -107)"
          fill="white"
        />
        <g id="reserved-area-content-g">
          <g id="reserved-area-content">
            <g
              id="BS_FilSysType"
              data-id="bs_filsystype"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="447.5"
                width="118"
                height="39"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="447.5" width="118" height="39" stroke="black" />
              <text
                id="text"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="37.6426" y="470.636">
                  BS_FilSysType
                </tspan>
              </text>
            </g>
            <g
              id="BS_VolLab"
              data-id="bs_vollab"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="404.5"
                width="118"
                height="44"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="404.5" width="118" height="44" stroke="black" />
              <text
                id="text_2"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="47.1641" y="430.136">
                  BS_VolLab
                </tspan>
              </text>
            </g>
            <g
              id="BS_VolID"
              data-id="bs_volid"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="375.5"
                width="118"
                height="29"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="375.5" width="118" height="29" stroke="black" />
              <text
                id="text_3"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="50.9824" y="393.636">
                  BS_VolID
                </tspan>
              </text>
            </g>
            <g
              id="BS_BootSig"
              data-id="bs_bootsig"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="361.5"
                width="118"
                height="14"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="361.5" width="118" height="14" stroke="black" />
              <text
                id="text_4"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="44.3418" y="372.136">
                  BS_BootSig
                </tspan>
              </text>
            </g>
            <g
              id="BS_Reserved1"
              data-id="bs_reserved1"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="347.5"
                width="118"
                height="14"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="347.5" width="118" height="14" stroke="black" />
              <text
                id="text_5"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="38.2285" y="358.136">
                  BS_Reserved1
                </tspan>
              </text>
            </g>
            <g
              id="BS_DrvNum"
              data-id="bs_drvnum"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="333.5"
                width="118"
                height="14"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="333.5" width="118" height="14" stroke="black" />
              <text
                id="text_6"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="43.4629" y="344.136">
                  BS_DrvNum
                </tspan>
              </text>
            </g>
            <g
              id="BPB_TotSec32"
              data-id="bpb_totsec32"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="304.5"
                width="118"
                height="29"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="304.5" width="118" height="29" stroke="black" />
              <text
                id="text_7"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="37.1299" y="322.636">
                  BPB_TotSec32
                </tspan>
              </text>
            </g>
            <g
              id="BPB_HiddSec"
              data-id="bpb_hiddsec"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="276.5"
                width="118"
                height="29"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="276.5" width="118" height="29" stroke="black" />
              <text
                id="text_8"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="39.5713" y="294.636">
                  BPB_HiddSec
                </tspan>
              </text>
            </g>
            <g
              id="BPB_NumHeads"
              data-id="bpb_numheads"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="257.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="257.5" width="118" height="19" stroke="black" />
              <text
                id="text_9"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="33.3994" y="270.636">
                  BPB_NumHeads
                </tspan>
              </text>
            </g>
            <g
              id="BPB_SecPerTrk"
              data-id="bpb_secpertrk"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="238.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="238.5" width="118" height="19" stroke="black" />
              <text
                id="text_10"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="35.5332" y="251.636">
                  BPB_SecPerTrk
                </tspan>
              </text>
            </g>
            <g
              id="BPB_FATSz16"
              data-id="bpb_fatsz16"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="219.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="219.5" width="118" height="19" stroke="black" />
              <text
                id="text_11"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="39.5811" y="232.636">
                  BPB_FATSz16
                </tspan>
              </text>
            </g>
            <g
              id="BPB_Media"
              data-id="bpb_media"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="205.5"
                width="118"
                height="14"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="205.5" width="118" height="14" stroke="black" />
              <text
                id="text_12"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="45.0938" y="216.136">
                  BPB_Media
                </tspan>
              </text>
            </g>
            <g
              id="BPB_TotSec16"
              data-id="bpb_totsec16"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="167.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="167.5" width="118" height="19" stroke="black" />
              <text
                id="text_14"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="32.4424" y="180.636">
                  BPB_TotSec16
                </tspan>
              </text>
            </g>
            <g
              id="BPB_RootEntCnt"
              data-id="bpb_rootentcnt"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="186.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="186.5" width="118" height="19" stroke="black" />
              <text
                id="text_13"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="32.4424" y="199.636">
                  BPB_RootEntCnt
                </tspan>
              </text>
            </g>

            <g
              id="BPB_NumFATs"
              data-id="bpb_numfats"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="153.5"
                width="118"
                height="14"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="153.5" width="118" height="14" stroke="black" />
              <text
                id="text_15"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="37.6621" y="164.136">
                  BPB_NumFATs
                </tspan>
              </text>
            </g>
            <g
              id="BPB_RsvdSecCnt"
              data-id="bpb_rsvdseccnt"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="134.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="134.5" width="118" height="19" stroke="black" />
              <text
                id="text_16"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="30.6895" y="147.636">
                  BPB_RsvdSecCnt
                </tspan>
              </text>
            </g>
            <g
              id="BPB_SecPerClus"
              data-id="bpb_secperclus"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="120.5"
                width="118"
                height="14"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="120.5" width="118" height="14" stroke="black" />
              <text
                id="text_17"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="32.4131" y="131.136">
                  BPB_SecPerClus
                </tspan>
              </text>
            </g>
            <g
              id="BPB_BytsPerSec"
              data-id="bpb_bytspersec"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="101.5"
                width="118"
                height="19"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="101.5" width="118" height="19" stroke="black" />
              <text
                id="text_18"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="32.3398" y="114.636">
                  BPB_BytsPerSec
                </tspan>
              </text>
            </g>
            <g
              id="BS_OEMName"
              data-id="bpb_oemname"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="62.5"
                width="118"
                height="39"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="62.5" width="118" height="39" stroke="black" />
              <text
                id="text_19"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="37.916" y="85.6364">
                  BS_OEMName
                </tspan>
              </text>
            </g>
            <g
              id="BS_jmpBoot"
              data-id="bpb_jmpboot"
              onClick={onPropertyClick}
              className={groupStyle}
            >
              <rect
                x="12.5"
                y="38.5"
                width="118"
                height="24"
                fill="white"
                className={hoverStyle}
              />
              <rect x="12.5" y="38.5" width="118" height="24" stroke="black" />
              <text
                id="text_20"
                fill="black"
                fontFamily="Inter"
                fontSize="12"
                letterSpacing="0em"
              >
                <tspan x="42.7012" y="54.1364">
                  BS_jmpBoot
                </tspan>
              </text>
            </g>
          </g>
          <text
            id="Reserved Area Content"
            fill="black"
            fontFamily="Inter"
            fontSize="13"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="0.0117188" y="12.7273">
              Reserved Area Content
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

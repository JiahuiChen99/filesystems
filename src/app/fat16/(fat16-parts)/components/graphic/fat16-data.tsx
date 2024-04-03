export function FAT16DataRegion() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 128 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="220" fill="#1E1E1E" />
      <g id="FAT16 - Data Area">
        <rect
          width="732"
          height="490"
          transform="translate(-56 -154)"
          fill="white"
        />
        <g id="data-clusters">
          <g id="cluster-n">
            <rect x="0.5" y="175.5" width="127" height="44" fill="white" />
            <rect x="0.5" y="175.5" width="127" height="44" stroke="black" />
            <text
              id="text"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="30.5078" y="201.864">
                Cluster N
              </tspan>
            </text>
          </g>
          <g id="suspensive-dots">
            <rect x="0.5" y="131.5" width="127" height="44" fill="white" />
            <rect x="0.5" y="131.5" width="127" height="44" stroke="black" />
            <text
              id="dots"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="59.043" y="157.864">
                ...
              </tspan>
            </text>
          </g>
          <g id="cluster-4">
            <rect x="0.5" y="87.5" width="127" height="44" fill="white" />
            <rect x="0.5" y="87.5" width="127" height="44" stroke="black" />
            <text
              id="text_2"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="31.1758" y="113.864">
                Cluster 4
              </tspan>
            </text>
          </g>
          <g id="cluster-3">
            <rect x="0.5" y="44.5" width="127" height="44" fill="white" />
            <rect x="0.5" y="44.5" width="127" height="44" stroke="black" />
            <text
              id="text_3"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="31.2051" y="70.8636">
                Cluster 3
              </tspan>
            </text>
          </g>
          <g id="cluster-2">
            <rect x="0.5" y="0.5" width="127" height="44" fill="white" />
            <rect x="0.5" y="0.5" width="127" height="44" stroke="black" />
            <text
              id="text_4"
              fill="black"
              fontFamily="Inter"
              fontSize="12"
              letterSpacing="0em">
              <tspan x="31.3926" y="26.8636">
                Cluster 2
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}

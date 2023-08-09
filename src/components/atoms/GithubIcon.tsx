// icon:github-circled | Entypo http://entypo.com/ | Daniel Bruce
import * as React from "react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 960 1000" fill="currentColor" {...props}>
      <path d="M480 496c10.667 0 24.667-.667 42-2s31-2 41-2 20.667 1.333 32 4c11.333 2.667 21 7.333 29 14 17.333 17.333 26 37.333 26 60 0 42.667-14.333 70.667-43 84-28.667 13.333-71 20-127 20s-98.333-6.667-127-20-43-41.333-43-84c0-22.667 8.667-42.667 26-60 8-6.667 17.667-11.333 29-14 11.333-2.667 22-4 32-4s23.667.667 41 2 31.333 2 42 2m-80 128c9.333 0 17-4.667 23-14s9-20 9-32c0-30.667-10.667-46-32-46s-32 15.333-32 46c0 12 3 22.667 9 32 6 9.333 13.667 14 23 14m160 0c9.333 0 17.333-4.667 24-14 6.667-9.333 10-20 10-32 0-13.333-3.333-24.333-10-33-6.667-8.667-14.667-13-24-13-21.333 0-32 15.333-32 46 0 12 3 22.667 9 32 6 9.333 13.667 14 23 14M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20m44 676c125.333 0 188-61.333 188-184 0-37.333-12.667-70-38-98 2.667-2.667 3-16.333 1-41s-7.667-48.333-17-71c-29.333 4-67.333 21.333-114 52-13.333-4-34.667-6-64-6-26.667 0-48 2-64 6-20-13.333-39.667-24.333-59-33-19.333-8.667-33-14.333-41-17l-14-2c-9.333 22.667-15 46.333-17 71s-1.667 38.333 1 41c-25.333 28-38 60.667-38 98 0 122.667 62.667 184 188 184h88" />
    </svg>
  );
}

export default GithubIcon;

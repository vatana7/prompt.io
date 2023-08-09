// icon:copy | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M10 8 H18 A2 2 0 0 1 20 10 V18 A2 2 0 0 1 18 20 H10 A2 2 0 0 1 8 18 V10 A2 2 0 0 1 10 8 z" />
      <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
    </svg>
  );
}

export default ClipboardIcon;

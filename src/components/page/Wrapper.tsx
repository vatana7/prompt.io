import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-screen flex flex-col justify-between h-full">{children}</div>;
};

export default Wrapper;

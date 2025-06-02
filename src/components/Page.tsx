import React from "react";
import "./Page.css";

function Page({ children }: never) {
  return (
    <>
      <div className="body rotate-scale-up ">{children}</div>
    </>
  );
}

export default Page;
//Leave for now

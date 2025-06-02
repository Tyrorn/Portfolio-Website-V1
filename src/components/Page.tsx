import "./Page.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Page({ children }: any) {
  return (
    <>
      <div className="body rotate-scale-up ">{children}</div>
    </>
  );
}

export default Page;
//Leave for now

import { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function LoadingPage() {
  return (
    <div className="w-full h-full flex items-center justify-center mx-auto">
      <HashLoader
        color="text-neutral-800"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

import Wrapper from "@/components/global/wrapper";
import React from "react";

const loading = () => {
  return (
    <Wrapper title="Loading...">
      <div className="flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    </Wrapper>
  );
};

export default loading;
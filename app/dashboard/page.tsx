import CreateDiaryForm from "@/components/auth/create-diary";
import Wrapper from "@/components/global/wrapper";
import React, { Children } from "react";

const DashboardPage = (): React.ReactElement => {
  return (
    <Wrapper title="Dashboard">
        <CreateDiaryForm/>
    </Wrapper>
  );
};

export default DashboardPage;

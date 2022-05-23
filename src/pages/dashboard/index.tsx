import { VStack } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Content from "../../components/Content";
import { getApiClient } from "../../services/axios";

type dashboardProps = {
  user: {
    id: string;
    email: string;
    name: string;
  };
};

const pages: NextPage<dashboardProps> = ({ user }) => {
  return (
    <VStack height="100vh" width="full" overflow="hidden" spacing={0}>
      <Content />
      {/* <Box>
        <h1>dashboard</h1>
        <p>olá, {user?.name}</p>
      </Box> */}
    </VStack>
  );
};
export default pages;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);
  const response = await apiClient.get("/profile");
  return {
    props: {
      user: {
        name: response.data.name,
        email: response.data.email,
        id: response.data.id,
      },
    },
  };
};

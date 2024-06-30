"use client";

import { client } from "@/app/page";
import { ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </div>
  );
};

export default AuthLayout;

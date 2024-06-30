"use client";

import { ApolloProvider } from "@apollo/client";
import React, { PropsWithChildren } from "react";
import { client } from "../page";

const TransactionLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};

export default TransactionLayout;

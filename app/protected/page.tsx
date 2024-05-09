import SignOut from "@/components/buttons/SignOut";
import { mustBeLoggedIn } from "@/lib/auth/mustBeLoggedIn";
import { Code, Text } from "@mantine/core";
import React from "react";

type Props = {};

async function Protected({}: Props) {
  const session = await mustBeLoggedIn();
  return (
    <div>
      <Code block>{JSON.stringify(session, null, 2)}</Code>
      <Text>Logged In</Text>
      <SignOut />
    </div>
  );
}

export default Protected;

export const runtime = "edge";

import Prices from "@/components/Prices";
import { Button, Code, TextInput } from "@mantine/core";
import classes from "./home.module.css";
import AppWrapper from "@/components/AppWrapper";
import SignIn from "@/components/buttons/SignIn";
import SignOut from "@/components/buttons/SignOut";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <AppWrapper>
      <Code block>{JSON.stringify(session, null, 2)}</Code>
      <SignIn />
      <SignOut />
      <TextInput
        className="mb-5"
        label="Email"
        description="Input description"
        classNames={{ root: "text-green-400", description: "text-red-400" }}
      />
      <Button>Hey there</Button>
      <Prices />
    </AppWrapper>
  );
}

export const runtime = "edge";

"use client";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

type Props = { onToggle: () => void };

function NavBurger({ onToggle }: Props) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Burger
      className="md:hidden"
      opened={opened}
      onClick={() => {
        toggle();
        onToggle();
      }}
      aria-label="Toggle navigation"
    />
  );
}

export default NavBurger;

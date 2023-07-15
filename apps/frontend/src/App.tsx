import { Avatar } from "shared/ui/avatar";

export function App() {
  return (
    <>
      <Avatar
        size="xl"
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg"
      />
      <Avatar size="xl" />
      <Avatar
        size="m"
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg"
      />
      <Avatar size="m" />
      <Avatar
        size="xs"
        src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg"
      />
      <Avatar size="xs" />
    </>
  );
}

import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      Stagin_Username: {user?.username}
      Staging_Password: {user?.password}
    </div>
  );
}

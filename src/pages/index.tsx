import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {!user.isSignedIn && (
          <SignInButton>
            <button className="btn-primary btn">Sign in</button>
          </SignInButton>
        )}
        {!!user.isSignedIn && (
          <SignOutButton>
            <button className="btn-secondary btn">Sign Out</button>
          </SignOutButton>
        )}
        {data?.map((post) => (
          <div key={post.id}>{post.content}</div>
        ))}
      </main>
    </>
  );
};

export default Home;

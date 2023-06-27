import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { supabase } from "@/supabase"
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [user, setUser] = useState<User>()
  const [accessToken, setAccessToken] = useState<string>()

  const router = useRouter()

  const session = supabase.auth.getSession()

  const { data, refetch } = api.example.hello.useQuery({
    code: accessToken ? accessToken : "",
  }, { enabled: false });

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event)
    if (event === 'SIGNED_IN') {
      router.push('/dashboard')
    }
  })

  const handleSignIn = async () => {
    supabase.auth.signInWithOAuth({ provider: 'spotify' })
  }

  const handleSignOut = async () => {
    supabase.auth.signOut()
  }

  return (
    <>
      {user ? (<button onClick={handleSignOut}>sign out</button>)
        : <button onClick={handleSignIn}>sign in</button>}
      <input></input>

    </>
  );
};

export default Home;


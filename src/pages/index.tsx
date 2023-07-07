import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { supabase } from "@/supabase"
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const session = await supabase.auth.getSession()

const Home: NextPage = () => {
  const [user, setUser] = useState<User>()
  const [accessToken, setAccessToken] = useState<string>()

  const router = useRouter()


  const { data, refetch } = api.example.hello.useQuery({
    code: accessToken ? accessToken : "",
  }, { enabled: false });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      router.push('/dashboard')
    }
  })

  const handleSignIn = async () => {
    session.data.session?.user ?
      router.push('/dashboard') :
      await supabase.auth.signInWithOAuth({ provider: 'spotify', options: { scopes: 'playlist-modify-public' } })
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


import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { supabase } from "@/supabase"
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import classNames from "classnames";
import BubbleContainer from "./components/BubbleContainer";

const session = await supabase.auth.getSession()

const Home: NextPage = () => {
  const [user, setUser] = useState<User>()
  const [accessToken, setAccessToken] = useState<string>()

  const router = useRouter()

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
    <div className={styles.background}>
      <button onClick={handleSignIn}>sign in</button>
      {/* <BubbleContainer /> */}
    </div>
  );
};

const styles = {
  background: 'bg-gray-900 w-screen h-screen flex justify-center items-center overflow-hidden p-4 relative',
  circleContainer: 'w-screen h-screen absolute flex justify-between items-end -z-100',
}


export default Home;


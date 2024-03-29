import { type NextPage } from "next";
import { supabase } from "@/supabase"
import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import BubbleContainer from "./components/BubbleContainer";
import SpotifyIcon from "./icons/SpotifyIcon";

const session = await supabase.auth.getSession()

const Home: NextPage = () => {

  const router = useRouter()

  const handleSignIn = async () => {
    session.data.session?.user ?
      router.push('/dashboard') :
      await supabase.auth.signInWithOAuth({ provider: 'spotify', options: { scopes: 'playlist-modify-public' } })
  }

  useEffect(() => {
    if (session.data.session?.user) {
      router.push('/dashboard')
    }
  })

  return (
    <div className={styles.background}>
      <div className={styles.headingContainer}>
        <h2 className='text-red-200'>Disclaimer: Due to the Spotify APIs verification process, only accounts specified by the developer can actually create playlists. sorry!</h2>
        <h1 className={styles.heading}>Unlock Your Unique Soundtrack with AI</h1>
        <h2 className={styles.subHeading}>Elevate Your Music Experience with Personalized Playlists, Crafted by the Magic of Artificial Intelligence</h2>
        <button className={styles.button} onClick={handleSignIn}>
          <SpotifyIcon />
          Sign in with Spotify
        </button>
      </div>
      <BubbleContainer />
    </div>
  );
};

const styles = {
  background: 'bg-gray-900 w-screen h-screen flex justify-center items-center overflow-hidden p-4 relative',
  heading: 'text-5xl sm:text-9xl font-bold text-center w-3/4 bg-gradient-to-r from-purple-700 to-pink-400 text-transparent bg-clip-text',
  subHeading: 'text-xl font-bold text-center sm:w-2/4 text-purple-400',
  headingContainer: 'flex flex-col justify-center items-center w-fit gap-12 z-20',
  circleContainer: 'w-screen h-screen absolute flex justify-between items-end -z-100',
  button: 'bg-gradient-to-r from-purple-700 to-pink-400 text-white font-bold sm:p-4 p-2 rounded-full flex justify-center items-center gap-2',
}


export default Home;


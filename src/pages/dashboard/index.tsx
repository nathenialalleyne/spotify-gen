import { useRouter } from 'next/router'
import { supabase } from "@/supabase"
import React, { useEffect } from 'react'
import { useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { api } from '@/utils/api'
import PlaylistView from './PlaylistView'
import { useQueryClient } from '@tanstack/react-query'


export default function Dashbaord() {
    const [sessionInfo, setSessionInfo] = useState<Session | null>()
    const [playlist, setPlaylist] = useState()
    const [playlistDescription, setPlaylistDescription] = useState('')
    const [error, setError] = useState(false)

    const router = useRouter()
    const user = supabase.auth.getUser()

    const { data: playlistData, refetch, isFetching } = api.spotify.createPlaylist.useQuery({ provider_token: sessionInfo?.provider_token as string, playlist_description: playlistDescription }, { enabled: false, })

    useEffect(() => {
        const getSessionInfo = async () => {
            const session = await supabase.auth.getSession()
            setSessionInfo(session.data.session)
        }
        getSessionInfo()
    }, [])

    useEffect(() => {
        if (playlistData) {
            setPlaylist(playlistData);
        }
    }, [playlistData]);

    const check = async () => {
        const provider = await sessionInfo?.provider_token
        console.log(provider)
        if (provider) {
            refetch()
        }
        else {
            await supabase.auth.signOut()
            router.push('/', { query: { error: 'no provider token' } })
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            await check()
        } catch (error) {
            setError(true)
        }

    }





    return (
        <div className={styles.background}>
            <header className={styles.header}>
                <button className={styles.button} onClick={() => {
                    supabase.auth.signOut()
                    router.push('/')
                }}>Sign Out</button>
            </header>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Playlist Description</label>
                    <input className={styles.input} onChange={(e: any) => setPlaylistDescription(e.target.value)} required></input>
                </div>
                {sessionInfo && (<div className={styles.bottomContainer}>

                    {!isFetching ? <button className={styles.button} type='submit'>Create Playlist</button> : <div>loading...</div>}
                    {error && <div>error</div>}
                    {playlist && <PlaylistView playlist={playlist} />}
                </div>)}
            </form>
        </div>
    )
}

const styles = {
    background: 'w-screen h-screen bg-gray-900 text-white p-4 overflow-hidden',
    input: 'bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent rounded-lg w-1/2 h-10',
    inputContainer: 'flex flex-col justify-center items-center w-screen',
    label: 'text-white font-bold text-xl mb-4',
    button: 'bg-gradient-to-r from-purple-700 to-pink-400 text-white font-bold p-4 rounded-full flex justify-center items-center gap-2',
    bottomContainer: 'flex flex-col justify-center items-center w-screen mt-4',
    header: 'flex justify-end items-center w-full h-fit',
    form: 'flex flex-col justify-center items-center w-full h-full'
}
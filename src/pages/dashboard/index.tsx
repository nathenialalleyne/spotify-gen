import { useRouter } from 'next/router'
import { supabase } from "@/supabase"
import React, { useEffect } from 'react'
import { useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { api } from '@/utils/api'


export default function Dashbaord() {
    const [sessionInfo, setSessionInfo] = useState<Session | null>()
    const [playlist, setPlaylist] = useState()
    const [playlistDescription, setPlaylistDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const user = supabase.auth.getUser()

    useEffect(() => {
        const getPlaylist = async () => {
            const session = await supabase.auth.getSession()
            setSessionInfo(session.data.session)
        }
        getPlaylist()
    }, [])

    const check = async () => {
        const provider = await sessionInfo?.provider_token
        console.log(provider)
        provider ? await refetch() : (await supabase.auth.signOut() && router.push('/', { query: { error: 'no provider token' } }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        await check()
        playlistData && setPlaylist(playlistData)
        console.log()
        setLoading(false)
    }



    const { data: playlistData, refetch } = api.spotify.createPlaylist.useQuery({ provider_token: sessionInfo?.provider_token as string, playlist_description: playlistDescription }, { enabled: false })

    return (
        <div className={styles.background}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Playlist Description</label>
                    <input className={styles.input} onChange={(e: any) => setPlaylistDescription(e.target.value)} required></input>
                </div>
                {sessionInfo && (<div>
                    <button type='submit'>Create Playlist</button>
                    {loading && <div>loading...</div>}
                    {playlist && <div>
                        <iframe className="rounded-lg" src={`https://open.spotify.com/embed/playlist/${playlistData}?utm_source=generator`}
                            width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                        </iframe>
                    </div>}
                </div>)}
            </form>
        </div>
    )
}

const styles = {
    background: 'w-screen h-screen bg-black text-white p-10 overflow-hidden',
    input: 'bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent rounded-lg w-1/2 h-10',
    inputContainer: 'flex flex-col justify-center items-center w-screen',
    label: 'text-white font-bold text-xl',
}
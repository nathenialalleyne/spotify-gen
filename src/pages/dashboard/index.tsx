import { useRouter } from 'next/router'
import { supabase } from "@/supabase"
import React, { useEffect } from 'react'
import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import type { Session } from '@supabase/supabase-js'
import getAccessToken from '@/utils/spotifyAccessToken'

export default function Dashbaord() {
    const [userInfo, setUserInfo] = useState<User | null>()
    const [sessionInfo, setSessionInfo] = useState<Session | null>()
    const [data, setData] = useState<any>()

    const router = useRouter()
    const user = supabase.auth.getUser()
    const session = supabase.auth.getSession()

    useEffect(() => {
        user.then(user => {
            console.log(user.data)
            setUserInfo(user.data.user)
        })

        session.then(session => {
            console.log(session)
            setSessionInfo(session.data.session)

        })
    }, [])

    const getPlaylist = async () => {
        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': 'Bearer ' + sessionInfo?.provider_token,
            }
        }).then(res => res.json()).then(data => {
            setData(data.items)
            console.log('data', data.items.map((item: any) => item.name))
        })
    }



    return (
        <div>
            <h1>test</h1>
            {sessionInfo && (<div>
                <h1>{sessionInfo.user.id}</h1>
                <button onClick={getPlaylist}>click to view recent playlists</button>
            </div>)}
        </div >
    )
}
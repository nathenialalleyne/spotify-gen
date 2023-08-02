import React from 'react'

type Props = {
    playlist: string
}

export default function PlaylistView({ playlist }: Props) {
    return (
        <div className='shrink-0 w-10/12 p-4'>
            <iframe className="rounded-lg" src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator`}
                width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>
        </div>
    )
}
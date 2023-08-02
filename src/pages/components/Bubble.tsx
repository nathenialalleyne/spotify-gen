import React from 'react'
import classNames from 'classnames'

type Props = {
    delay: string
    w?: string
    h?: string
}

export default function Bubble({ delay, w, h }: Props) {

    const animations: { [key: string]: string } = {
        'animation-delay-100': 'animate-[move-up_linear_1s_infinite]',
        'animation-delay-150': 'animate-[move-up_linear_1.5s_infinite]',
        'animation-delay-200': 'animate-[move-up_linear_2s_infinite]',
        'animation-delay-250': 'animate-[move-up_linear_2.5s_infinite]',
        'animation-delay-300': 'animate-[move-up_linear_3s_infinite]',
        'animation-delay-350': 'animate-[move-up_linear_3.5s_infinite]',
        'animation-delay-400': 'animate-[move-up_linear_4s_infinite]',
        'animation-delay-450': 'animate-[move-up_linear_4.5s_infinite]',
        'animation-delay-500': 'animate-[move-up_linear_5s_infinite]',
        'animation-delay-550': 'animate-[move-up_linear_5.5s_infinite]',
        'animation-delay-600': 'animate-[move-up_linear_6s_infinite]',
        'animation-delay-650': 'animate-[move-up_linear_6.5s_infinite]',
        'animation-delay-700': 'animate-[move-up_linear_7s_infinite]',
        'animation-delay-750': 'animate-[move-up_linear_7.5s_infinite]',
        'animation-delay-800': 'animate-[move-up_linear_8s_infinite]',
        'animation-delay-850': 'animate-[move-up_linear_8.5s_infinite]',
        'animation-delay-900': 'animate-[move-up_linear_9s_infinite]',
        'animation-delay-950': 'animate-[move-up_linear_9.5s_infinite]',
        'animation-delay-1000': 'animate-[move-up_linear_10s_infinite]',
        'animation-delay-2000': 'animate-[move-up_linear_20s_infinite]',
        'animation-delay-3000': 'animate-[move-up_linear_30s_infinite]',
        'animation-delay-4000': 'animate-[move-up_linear_40s_infinite]',
        'animation-delay-5000': 'animate-[move-up_linear_50s_infinite]',
        'animation-delay-6000': 'animate-[move-up_linear_60s_infinite]',
        'animation-delay-7000': 'animate-[move-up_linear_70s_infinite]',
        'animation-delay-8000': 'animate-[move-up_linear_80s_infinite]',
        'animation-delay-9000': 'animate-[move-up_linear_90s_infinite]',
        'animation-delay-10000': 'animate-[move-up_linear_100s_infinite]',

    }

    const styles = {
        circle: `aspect-w-1 aspect-h-1 opacity-20 block rounded-full bg-gray-100 ${animations[delay]} ${w} ${h} bg-gradient-to-r from-purple-700 to-pink-400 shrink-0 m-2`,
    }
    return (
        <div className={styles.circle} />
    )
}

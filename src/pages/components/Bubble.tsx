import React from 'react'
import classNames from 'classnames'

type Props = {
    delay: string
    time: number
    w?: string
    h?: string
}

export default function Bubble({ delay, time, w, h }: Props) {
    const styles = {
        circle: `block rounded-full bg-gray-100`,
    }
    return (
        <div className={classNames(styles.circle, w ? w : 'w-10', h ? h : 'h-10', `animate-[move-up_linear_${time}s_infinite]`)} />
    )
}

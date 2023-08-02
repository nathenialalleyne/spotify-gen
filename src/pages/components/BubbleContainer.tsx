import React from 'react'
import Bubble from './Bubble'

export default function BubbleContainer() {
    return (
        <div className={styles.circleContainer}>
            <Bubble delay={'animation-delay-450'} w='w-56' h='h-56' />
            <Bubble delay={'animation-delay-200'} w='w-40' h='h-40' />
            <Bubble delay={'animation-delay-1000'} w='w-60' h='h-60' />
            <Bubble delay={'animation-delay-650'} w='w-44' h='h-44' />
            <Bubble delay={'animation-delay-2000'} w='w-52' h='h-52' />
            <Bubble delay={'animation-delay-400'} w='w-32' h='h-32' />
            <Bubble delay={'animation-delay-1000'} w='w-24' h='h-24' />
            <Bubble delay={'animation-delay-3000'} w='w-56' h='h-56' />
            <Bubble delay={'animation-delay-350'} w='w-36' h='h-36' />
            <Bubble delay={'animation-delay-6000'} w='w-60' h='h-60' />
            <Bubble delay={'animation-delay-2000'} w='w-20' h='h-20' />
            <Bubble delay={'animation-delay-4000'} w='w-72' h='h-72' />
            <Bubble delay={'animation-delay-200'} w='w-56' h='h-56' />
            <Bubble delay={'animation-delay-500'} w='w-40' h='h-40' />
            <Bubble delay={'animation-delay-1000'} w='w-60' h='h-60' />
            <Bubble delay={'animation-delay-600'} w='w-44' h='h-44' />
            <Bubble delay={'animation-delay-2000'} w='w-52' h='h-52' />
            <Bubble delay={'animation-delay-100'} w='w-32' h='h-32' />
            <Bubble delay={'animation-delay-1000'} w='w-24' h='h-24' />
            <Bubble delay={'animation-delay-3000'} w='w-56' h='h-56' />
            <Bubble delay={'animation-delay-400'} w='w-36' h='h-36' />
            <Bubble delay={'animation-delay-6000'} w='w-60' h='h-60' />
            <Bubble delay={'animation-delay-2000'} w='w-20' h='h-20' />
            <Bubble delay={'animation-delay-4000'} w='w-72' h='h-72' />
        </div>
    )
}

const styles = {
    circleContainer: 'w-screen h-screen absolute flex justify-between items-end translate-y-full',
}
import React from 'react'
import Bubble from './Bubble'

export default function BubbleContainer() {
    return (
        <div className={styles.circleContainer}>
            <Bubble delay={'animation-delay-800'} time={25} w={'w-30'} h={'h-30'} />
            <Bubble delay={'animation-delay-5000'} time={10} />
            <Bubble delay={'animation-delay-200'} time={14} />
            <Bubble delay={'animation-delay-100'} time={20} />
            <Bubble delay={'animation-delay-2000'} time={17} />
            <Bubble delay={'animation-delay-400'} time={40} />
            <Bubble delay={'animation-delay-200'} time={32} />
            <Bubble delay={'animation-delay-3000'} time={50} />
            <Bubble delay={'animation-delay-4000'} time={9} />
            <Bubble delay={'animation-delay-6000'} time={32} />
            <Bubble delay={'animation-delay-700'} time={28} />
            <Bubble delay={'animation-delay-4000'} time={19} />
        </div>
    )
}

const styles = {
    circleContainer: 'w-screen h-screen absolute flex justify-between items-end',
}
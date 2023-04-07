"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const params = useSearchParams()

  const minutesAmount = params.get('minutes')

  const COUNTDOWN = Number(minutesAmount) * 60

  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN)  

  useEffect(() => {
    if (secondsAmount === 0) {
      alert('TIME ENDED!')
      return
    }
    setTimeout(() => {
      setSecondsAmount(state => state - 1)
    }, 1000)
  }, [secondsAmount])

  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60 

  return (
    <div className='grid h-screen mx-0 w-screen items-center justify-center bg-stone-700'>
      <h1 className="text-9xl text-slate-200 font-bold">
        {minutes.toString().padStart(2, '0')}
        :
        {seconds.toString().padStart(2, '0')}</h1>

        <button onClick={() => window.location.reload()}>
          <p className="text-3xl text-slate-200 font-bold">Restart</p>
        </button>
    </div>
  )

}
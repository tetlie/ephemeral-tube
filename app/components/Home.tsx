'use client'

import { useState } from 'react'

const videoIds = [
  '7iR7bXqUxgY',
  'tcVwJK3-UvY',
  'RLhhF_7nmh8',
  'IiwiJ4jo3KY',
  'Hhu_Hly-1JY',
  'e80lp6F_qmY',
  'kUtguZs7y6E',
  'ycSOA4BP-Ns',
  'cNAyT73exf4',
  'zdXn2GoqAP0',
  'c3Byrsf5MxI',
  'IzRLpus408c',
]

export default function Home() {
  const randomVideoIndex = Math.floor(Math.random() * videoIds.length)
  const [currentVideoId, setCurrentVideoId] = useState(videoIds[randomVideoIndex])

  // Function to load a new video
  const loadNewVideo = () => {
    const nextVideoIndex = (videoIds.indexOf(currentVideoId) + 1) % videoIds.length
    setCurrentVideoId(videoIds[nextVideoIndex])
  }

  return (
    <div className="w-screen h-svh overflow-hidden">
      <div className="h-full w-full relative overflow-hidden bg-black flex items-center justify-center">
        <iframe
          className="scale-[5] md:scale-[3.5] lg:scale-[3] pointer-events-none w-full h-full"
          src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          className="text-sm absolute bottom-4 z-50 text-white bg-black/20 backdrop-blur-3xl rounded-3xl px-4 py-2"
          onClick={loadNewVideo}
        >
          Neste
        </button>
      </div>
    </div>
  )
}

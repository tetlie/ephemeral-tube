'use client'

import { use, useEffect, useState } from 'react'
import Menu from './Menu'

const videos = [
  {
    id: '7iR7bXqUxgY',
    title: 'DSC 0022',
  },
  {
    id: 'tcVwJK3-UvY',
    title: 'MOV 0008#貴族世家 ，#FOODS，#taiwanfoods，#delicious，#taste，#healthy',
  },
  {
    id: 'RLhhF_7nmh8',
    title: 'IMG 0027',
  },
  {
    id: 'IiwiJ4jo3KY',
    title: 'Off-road outlaws all my cars IMG 0104',
  },
  {
    id: 'Hhu_Hly-1JY',
    title: 'DSC 0051',
  },
  {
    id: 'e80lp6F_qmY',
    title: 'IMG 0017',
  },
  {
    id: 'kUtguZs7y6E',
    title: 'IMG 0078',
  },
  {
    id: 'ycSOA4BP-Ns',
    title: 'IMG 0105',
  },
  {
    id: 'cNAyT73exf4',
    title: 'IMG 0009',
  },
  {
    id: 'zdXn2GoqAP0',
    title: 'DSC 0104 MISSA ENCERRAMENTO DO NOVENÁRIO SR BONFIM DE MAATTA S. JOÃO 4/2/24',
  },
  {
    id: 'c3Byrsf5MxI',
    title: 'IMG 0135',
  },
  {
    id: 'IzRLpus408c',
    title: 'IMG 0036',
  },
  {
    id: 'vbvyQBenWT8',
    title: 'MOV 0089',
  },
  {
    id: 'o1kIIltrZ68',
    title: 'IMG 0024',
  },
  {
    id: 'kfYlcFHY_tc',
    title: 'DSC 0012',
  },
  {
    id: '5TD03BzQS2I',
    title: 'IMG 0180',
  },
  {
    id: '5TD03BzQS2I',
    title: 'IMG 0180',
  },
  {
    id: 'eFxMc_WMaRA',
    title: 'IMG 0196',
  },
  {
    id: 'I7jLSslAzwg',
    title: 'IMG 0012',
  },
  {
    id: 'I7jLSslAzwg',
    title: 'IMG 0012',
  },
  {
    id: '-ozZ5A4Vw3k',
    title: "IMG 0045 Two J's Field Wildlife Camera Shots Set In Magical Cornwall.",
  },
  {
    id: 'oTth72-n6rg',
    title: 'IMG 0104',
  },
  {
    id: 'AyNAndBbCi0',
    title: 'IMG 0025',
  },
  {
    id: 'JKKbw6wWo0U',
    title: 'IMG 0184',
  },
  {
    id: 'OBzbqiD6m3s',
    title: 'DSC 0085',
  },
  {
    id: '27DZM27Qdfs',
    title: 'IMG 0199 1',
  },
  {
    id: 'VzR4g0ggpJ4',
    title: 'VzR4g0ggpJ4',
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFading, setIsFading] = useState(true)

  const randomVideoIndex = Math.floor(Math.random() * videos.length)
  const [currentVideo, setCurrentVideo] = useState<{ id: string; title: string }>(
    videos[randomVideoIndex]
  )

  const loadNewVideo = async () => {
    setIsFading(true)
    await new Promise((resolve) => setTimeout(resolve, 500)) // Wait for 1 second
    setCurrentVideo(videos[randomVideoIndex])
    await new Promise((resolve) => setTimeout(resolve, 750)) // Wait for 1 second
    setIsFading(false)
  }

  const removeInitialFading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 750)) // Wait for 1 second
    setIsFading(false)
  }

  useEffect(() => {
    removeInitialFading()
  }, [])

  return (
    <div className="w-screen h-svh overflow-hidden">
      <div></div>
      <div className="h-full w-full relative overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute z-50 top-0 text-white left-0 pt-4 px-4 flex w-full text-lg justify-end items-center">
          <button className="z-50 text-white px-4 py-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Close' : 'Info'}
          </button>
        </div>
        <div
          className={`${
            isFading ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in-out absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black z-30 text-white text-lg`}
        >
          Loading...
        </div>
        <iframe
          className={`absolute scale-[4] md:scale-[3.5] lg:scale-[3]  pointer-events-none w-full h-full`}
          src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute z-30 bottom-0 text-white left-0 pb-4 px-4 flex w-full text-lg justify-between items-end">
          <h2 className="uppercase rounded-3xl px-4 py-2">{currentVideo.title}</h2>
          <button className="z-50 text-white  px-4 py-2" onClick={loadNewVideo}>
            Refresh
          </button>
        </div>
        {isMenuOpen && <Menu />}
      </div>
    </div>
  )
}

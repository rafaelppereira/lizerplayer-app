/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { VideoPlayer } from '@/components/video-player'

export function Home() {
  return (
    <main className="bg-default flex min-h-screen flex-col bg-cover bg-center bg-no-repeat">
      <Header />

      <main className="flex flex-1 transition-all">
        <VideoPlayer />

        <Sidebar />
      </main>
    </main>
  )
}

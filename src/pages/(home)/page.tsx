/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { VideoPlayer } from '@/components/video-player'

export function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-default bg-cover bg-center bg-no-repeat">
      <Header />

      <main className="flex flex-1">
        <VideoPlayer />

        <Sidebar />
      </main>
    </main>
  )
}

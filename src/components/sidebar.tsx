import { ClockIcon, PanelRightCloseIcon } from 'lucide-react'
import { useState } from 'react'

import { Lesson } from './lesson'
import { Button } from './ui/button'

export function Sidebar() {
  const [hasToggleSidebar, setHasToggleSidebar] = useState(true)

  const handleHasToggleSidebar = () => {
    setHasToggleSidebar(!hasToggleSidebar)
  }

  if (!hasToggleSidebar) return

  return (
    <aside className="hidden w-80 border-l-2 border-zinc-800 bg-zinc-900 p-6 lg:block xl:w-96">
      <div className="flex items-center justify-between gap-2 border-b border-zinc-800 pb-4">
        <h2 className="flex items-center text-xl font-bold">
          <ClockIcon className="mr-2 size-5" />
          Cronograma de aulas
        </h2>

        <Button
          size="icon"
          variant="secondary"
          className="bg-zinc-800"
          onClick={handleHasToggleSidebar}
        >
          <PanelRightCloseIcon className="size-4" />
        </Button>
      </div>

      <div className="mt-6 flex flex-col gap-8">
        {Array.from({ length: 5 }).map((_, i) => {
          return <Lesson key={i} />
        })}
      </div>
    </aside>
  )
}

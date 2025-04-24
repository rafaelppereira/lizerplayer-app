import {
  ClockIcon,
  PanelRightCloseIcon,
  PanelRightOpenIcon,
} from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/@config/lib/cn'
import { lessons } from '@/@config/utils/lessons'

import { Lesson } from './lesson'
import { Button } from './ui/button'

export function Sidebar() {
  const [hasToggleSidebar, setHasToggleSidebar] = useState(true)

  const handleHasToggleSidebar = () => {
    setHasToggleSidebar(!hasToggleSidebar)
  }

  return (
    <aside
      className={cn(
        'hidden border-l-2 border-zinc-800 bg-zinc-900 transition-all duration-200 lg:block',
        hasToggleSidebar ? 'w-80 p-6 xl:w-96' : 'w-16 p-2',
      )}
    >
      {hasToggleSidebar ? (
        <div>
          <div className="flex items-center justify-between gap-2 border-b border-zinc-800 pb-4">
            <h2 className="flex items-center truncate text-xl font-bold">
              <ClockIcon className="mr-2 size-5" />
              Vídeos do canal
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
            {lessons.map((lesson, i) => {
              return (
                <Lesson
                  key={i}
                  slug={lesson.slug}
                  type={lesson.type}
                  title={lesson.title}
                  description={lesson.description}
                  availableAt={lesson.availableAt}
                  sourceVideoId={lesson.sourceVideoId}
                />
              )
            })}
          </div>
        </div>
      ) : (
        <div>
          <Button
            size="icon"
            variant="secondary"
            className="bg-zinc-800"
            onClick={handleHasToggleSidebar}
          >
            <PanelRightOpenIcon className="size-4" />
          </Button>

          {lessons.map((lesson, i) => {
            return (
              <Lesson
                key={i}
                isSidebarClosed
                slug={lesson.slug}
                type={lesson.type}
                title={lesson.title}
                description={lesson.description}
                availableAt={lesson.availableAt}
                sourceVideoId={lesson.sourceVideoId}
              />
            )
          })}
        </div>
      )}
    </aside>
  )
}

import { format, isPast } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CheckCircleIcon, LockIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/@config/lib/cn'
import { LessonProps } from '@/@config/utils/lessons'

interface LessonComponentProps extends LessonProps {
  isSidebarClosed?: boolean
}

export function Lesson({
  title,
  slug,
  type,
  availableAt,
  isSidebarClosed = false,
}: LessonComponentProps) {
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormated = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm' ",
    { locale: ptBR },
  )

  return (
    <Link
      to={isLessonAvailable ? `/lessons/${slug}` : ''}
      className={cn('group', !isLessonAvailable && 'cursor-not-allowed')}
    >
      {!isSidebarClosed && (
        <span className="truncate text-sm font-medium text-zinc-400">
          {availableDateFormated}
        </span>
      )}
      <div
        className={cn(
          'mt-2 border border-zinc-800 transition-all group-hover:border-emerald-500',
          isSidebarClosed
            ? 'flex size-10 items-center justify-center rounded-md'
            : 'rounded-xl p-4',
        )}
      >
        <div className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-emerald-500">
              <CheckCircleIcon className="size-4" />

              {!isSidebarClosed && 'Liberado'}
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-amber-500">
              <LockIcon className="size-4" />
              {!isSidebarClosed && 'Em breve'}
            </span>
          )}

          {!isSidebarClosed && (
            <span className="shrink-0 truncate rounded-md bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
              {type === 'live' ? 'AO VIVO' : 'Aula prática'}
            </span>
          )}
        </div>

        {!isSidebarClosed && (
          <h2 className="mt-5 truncate text-zinc-200">{title}</h2>
        )}
      </div>
    </Link>
  )
}

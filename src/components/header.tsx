import { CircleHelpIcon, ClockIcon, PanelRightOpenIcon } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { lessons } from '@/@config/utils/lessons'

import { Lesson } from './lesson'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b-2 border-b-secondary bg-primary/5 px-4 backdrop-blur-md lg:px-8">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          title="Clique para ir ao início"
          className="h-7 select-none"
        >
          <img
            src="/logo.svg"
            className="h-full"
            alt="Logo RP Desenvolvimentos"
          />
        </Link>

        <h2 className="hidden border-l border-zinc-400 pl-4 font-bold uppercase md:block">
          PLATAFORMA RP ACADEMY
        </h2>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" size="icon" className="lg:hidden">
            <PanelRightOpenIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll">
          <h2 className="flex items-center text-xl font-bold">
            <ClockIcon className="mr-2 size-5" />
            Vídeos do canal
          </h2>

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
        </SheetContent>
      </Sheet>

      <div className="hidden items-center gap-3 lg:flex">
        <Button
          asChild
          type="button"
          variant="ghost"
          className="hidden lg:flex"
          title="Clique para entrar em contato com o suporte"
        >
          <Link
            target="_blank"
            to="https://api.whatsapp.com/send?phone=5548996948270"
          >
            <CircleHelpIcon className="mr-2 size-4" /> Suporte
          </Link>
        </Button>

        <Button
          disabled
          type="button"
          className="font-semibold uppercase"
          title="Clique para entrar na comunidade do Discord"
        >
          <FaDiscord className="mr-2 size-5" /> Comunidade no Discord
        </Button>
      </div>
    </header>
  )
}

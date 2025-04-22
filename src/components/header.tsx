import { CircleHelpIcon, ExternalLinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b-2 border-b-secondary bg-primary/5 px-8 backdrop-blur-md">
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

        <h2 className="border-l border-zinc-400 pl-4 font-bold uppercase">
          PROGRAMA LIZER.DEV
        </h2>
      </div>

      <div className="hidden items-center gap-3 md:flex">
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
          asChild
          type="button"
          title="Clique para entrar na comunidade do Discord"
        >
          <Link to="" target="_blank">
            <ExternalLinkIcon className="mr-2 size-4" /> Comunidade no Discord
          </Link>
        </Button>
      </div>
    </header>
  )
}

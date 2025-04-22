import { LockIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Lesson() {
  return (
    <Link to="" className="group cursor-not-allowed">
      <span className="text-sm font-medium text-zinc-400">
        Domingo • 20 de julho • 19h00
      </span>
      <div className="mt-2 rounded-xl border border-zinc-800 p-4 transition-all group-hover:border-emerald-500">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
            <LockIcon className="size-4" />
            Em breve
          </span>

          <span className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
            Aula prática
          </span>
        </div>

        <h2 className="mt-5 text-zinc-200">
          Aula 01 - Criando o projeto e realizando o setup inicial
        </h2>
      </div>
    </Link>
  )
}

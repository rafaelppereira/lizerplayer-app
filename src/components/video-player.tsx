/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileIcon, ImageIcon } from 'lucide-react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link, Navigate, useParams } from 'react-router-dom'

import { lessons } from '@/@config/utils/lessons'

import { SupplementaryMaterialDialog } from './supplementary-material-dialog'
import { Button } from './ui/button'

export function VideoPlayer() {
  const { slug } = useParams()

  const findLesson = lessons.find((lesson) => lesson.slug === slug)

  if (!findLesson) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex-1 transition-all">
      <div className="flex justify-center bg-black backdrop-blur-sm">
        <div className="aspect-video max-h-[70vh] w-full max-w-7xl">
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            src={`https://www.youtube.com/embed/${findLesson.sourceVideoId}?si=2d1_oqFUH-QMg7wS&rel=0&controls=1&modestbranding=1&showinfo=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex-col p-4 md:flex-row lg:p-8">
        <div className="flex flex-col gap-4 md:items-start xl:flex-row xl:gap-14">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{findLesson.title}</h1>
            <p className="mt-4 overflow-auto whitespace-normal leading-relaxed text-zinc-200">
              {findLesson.description.slice(0, 300)}{' '}
              {findLesson.description.length > 300 && '...'}
            </p>

            <div className="mt-6 flex items-center gap-10">
              <div className="flex items-center gap-4">
                <img
                  alt="Rafael Pereira"
                  src="https://github.com/rafaelppereira.png"
                  className="pointer-events-none size-16 touch-none select-none rounded-full border-2 border-primary"
                />

                <div className="leading-relaxed">
                  <h2 className="text-2xl font-bold">Rafael Pereira</h2>
                  <span className="text-sm text-zinc-200">
                    Desenvolvedor full-stack
                  </span>
                </div>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <Button
                  asChild
                  size="icon"
                  type="button"
                  variant="outline"
                  title="Clique para acessar o Github de Rafael Pereira"
                >
                  <Link to="https://github.com/rafaelppereira" target="_blank">
                    <FaGithub className="size-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="icon"
                  type="button"
                  variant="outline"
                  title="Clique para acessar o Linkedin de Rafael Pereira"
                >
                  <Link
                    to="https://www.linkedin.com/in/rafaellppereira"
                    target="_blank"
                  >
                    <FaLinkedin className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-4 xl:w-auto">
            <Button
              disabled
              type="button"
              className="h-14 w-full border-b-4 border-b-white font-semibold uppercase lg:h-12"
              title="Clique para acessar nossa comunidade do Discord"
            >
              <FaDiscord className="mr-2 size-5" />
              Comunidade Discord
            </Button>

            <Button
              disabled
              type="button"
              variant="outline"
              className="h-14 w-full font-semibold uppercase lg:h-12"
              title="Clique para acessar o mapa do desafio"
            >
              <BsFillLightningChargeFill className="mr-2 size-5" />
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-20 xl:grid-cols-2">
          <SupplementaryMaterialDialog description={findLesson.description}>
            <div className="flex w-full cursor-pointer items-stretch gap-6 overflow-hidden rounded-xl bg-zinc-900 transition-all hover:brightness-75">
              <div className="flex h-full items-center bg-primary p-6">
                <FileIcon className="size-10" />
              </div>

              <div className="py-6 pr-6 leading-relaxed">
                <h2 className="text-lg font-bold lg:text-xl">
                  Material complementar
                </h2>
                <p className="mt-2 text-sm font-medium text-zinc-300">
                  Acesse o material complementar para o seu desenvolvimento
                </p>
              </div>
            </div>
          </SupplementaryMaterialDialog>

          <Link
            to=""
            title="Clique para acessar os wallpapers exclusivos da RP Desenvolvimentos"
            className="flex w-full cursor-not-allowed items-stretch gap-6 overflow-hidden rounded-xl bg-zinc-900 opacity-75 transition-all"
          >
            <div className="flex h-full items-center bg-primary p-6">
              <ImageIcon className="size-10" />
            </div>

            <div className="py-6 pr-6 leading-relaxed">
              <h2 className="text-lg font-bold lg:text-xl">
                Wallpapers exclusivos
              </h2>
              <p className="mt-2 text-sm font-medium text-zinc-300">
                Baixe wallpapers exclusivos da RP e personalize a sua máquina
              </p>
            </div>
          </Link>
        </div>
      </div>

      <footer className="bg-zinc-900">
        <div className="flex flex-col items-center justify-between gap-2 px-8 py-4 footer:flex-row">
          <div className="flex flex-col items-center gap-4 footer:flex-row">
            <Link to="/" className="h-6" title="Clique para ir ao início">
              <img
                src="/logo.svg"
                alt="Logo RP Desenvolvimentos"
                className="pointer-events-none h-full touch-none select-none"
              />
            </Link>

            <span className="pl-4 text-sm text-zinc-400 md:border-l md:border-zinc-700">
              RP Desenvolvimentos - Todos os direitos reservados
            </span>
          </div>

          <span className="text-sm text-zinc-400">
            Políticas de privacidade
          </span>
        </div>
      </footer>
    </div>
  )
}

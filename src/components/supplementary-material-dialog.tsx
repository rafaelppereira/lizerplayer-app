import { ReactNode } from 'react'

import { formatDescription } from '@/@config/utils/format-description'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface SupplementaryMaterialDialogProps {
  children: ReactNode
  description: string
}

export function SupplementaryMaterialDialog({
  children,
  description,
}: SupplementaryMaterialDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Material complementar</DialogTitle>
          <DialogDescription>
            Esse material é utilizado para compartilhar informações necessárias
            para desenvolvimento de algumas partes da vídeo aula.
          </DialogDescription>
        </DialogHeader>

        <p
          dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
        />
      </DialogContent>
    </Dialog>
  )
}

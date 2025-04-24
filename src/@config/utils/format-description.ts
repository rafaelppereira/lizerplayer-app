export function formatDescription(text: string): string {
  return (
    text
      // Escapa HTML (opcional, se o input vier de usuário)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Converte links em <a>
      .replace(
        /(https?:\/\/[^\s]+)/g,
        '<a className="underline text-primary" href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
      )
      // Substitui \n por <br>
      .replace(/\n/g, '<br />')
  )
}

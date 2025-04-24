export interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  description: string
  type: 'class' | 'live'
  sourceVideoId: string
}

export const lessons: LessonProps[] = [
  {
    sourceVideoId: 'gYyvFrCbqpk',
    title: 'PRIMEIRO VÍDEO DO CANAL, EXPLICAÇÕES INICIAIS',
    slug: 'primeiro-video-do-canal-explicacoes-iniciais',
    availableAt: new Date('2025-04-02T10:00:00'),
    description:
      'Finalmente estou tirando do papel um projeto que há anos esteve na minha mente: criar meu próprio canal no YouTube para compartilhar meus conhecimentos em programação! 💻✨\n' +
      'Meu objetivo é ajudar você a aprimorar suas habilidades de desenvolvimento, trazendo conteúdos práticos, dicas valiosas e muito código na tela!\n' +
      'Se você quer evoluir na programação, esse canal é para você!🔥\n' +
      'Bora codar! 🚀',
    type: 'class',
  },
  {
    sourceVideoId: '69fAT1zTcsk',
    title:
      'COMO ORGANIZO PROJETOS REACT EM 2025 (FERRAMENTAS + ESTRUTURA DE PASTAS)',
    slug: 'como-organizo-projetos-react-em-2025-ferramentas-estrutura-de-pastas',
    availableAt: new Date('2025-04-07T14:30:00'),
    description:
      'Quer saber como estruturar seus projetos React em 2025?\n' +
      'Nesse vídeo, compartilho as ferramentas que mais gosto de usar no front-end e como organizo as pastas dos meus projetos com React.\n' +
      'Seja você iniciante ou já experiente, esse conteúdo pode te ajudar a ter um setup mais limpo, escalável e fácil de manter!\n\n' +
      '🔗 Links úteis:\n' +
      '- https://gist.github.com/rafaelppereira/0910c726df886e56c1a6df5badb80c07\n' +
      '- https://github.com/rpdesenvolvimentos/interno-template-project-frontend\n' +
      '- https://www.notion.so/nitro-desenvolvimento/Ferramentas-de-desenvolvimento-e-estrutura-de-pastas-1cbea684058b80e1b7c6d8356078a5cc?pvs=4\n\n' +
      '💡 O que você vai ver nesse vídeo:\n' +
      '- Ferramentas que uso no dia a dia (bundlers, linters, formatters, etc)\n' +
      '- Organização de pastas e arquivos\n' +
      '- Boas práticas que sigo nos meus projetos\n' +
      '- Dicas pra manter seu código organizado e produtivo\n\n' +
      '👇 Comenta aí o que você costuma usar e como organiza seus projetos. Vamos trocar ideia!\n\n' +
      '🚀 Se curtir o conteúdo, não esquece de deixar o like, se inscrever no canal e ativar o sininho!\n\n' +
      '#ReactJS #FrontEnd #Dev2025 #WebDev #EstruturaDePastas #FerramentasReact',
    type: 'class',
  },
  {
    sourceVideoId: 'oB1MOMGDPpE',
    title:
      'CRIANDO UM CONTADOR DE TEMPO COM REACT + TAILWINDCSS (EXPLICAÇÕES E PASSO A PASSO)',
    slug: 'criando-um-contador-de-tempo-com-react-tailwindcss-explicacoes-e-passo-a-passo',
    availableAt: new Date('2025-04-16T16:30:00'),
    description:
      'Neste vídeo, você vai aprender como criar um contador de tempo do zero utilizando React e TailwindCSS, com explicações detalhadas de cada etapa do processo! 💡\n\n' +
      '🔗 Links:\n' +
      '- https://github.com/rpdesenvolvimentos/interno-template-project-frontend\n' +
      '- https://github.com/rafaelppereira/temporizer-clone-youtube\n\n' +
      '📌 O que você vai ver:\n' +
      '- Estruturação do projeto com React\n' +
      '- Estilização com TailwindCSS\n' +
      '- Lógica do contador com React\n' +
      '- Dicas práticas para melhorar seu código\n\n' +
      'Se você está começando com React ou quer reforçar seus conhecimentos com um projeto prático e direto ao ponto, esse vídeo é pra você! 🚀\n\n' +
      '👉 Deixe seu like, se inscreva no canal e comente o que achou!\n\n' +
      '#React #TailwindCSS #Programação #DesenvolvimentoWeb #ContadorDeTempo',
    type: 'class',
  },
]

import { NavbarMenuActionProps } from '@/components/navbar/navbar-menu-action'

export const actionsMocks: NavbarMenuActionProps[] = [
  {
    name: 'Recursos Humanos',
    items: [
      {
        name: 'Cadastros',
        items: [
          {
            title: 'Matriculas',
            href: '/matriculas',
            description: 'Cadastro de matricula.',
          },
          {
            title: 'Cargos',
            href: '#',
            description: 'Cadastro de cargo.',
          },
          {
            title: 'Organogramas',
            href: '#',
            description: 'Cadastro de cargo.',
          },
          {
            title: 'Legislações',
            href: '#',
            description: 'Cadastro de legislação.',
          },
          {
            title: 'Previdência',
            href: '#',
            description: 'Cadastro de previdência.',
          },
        ],
      },
      {
        name: 'Lançamentos',
        items: [],
      },
    ],
  },
  {
    name: 'Folha de Pagamento',
    items: [
      {
        name: 'Processamentos',
        items: [
          {
            title: 'Folha Mensal',
            href: '#',
            description: 'Processamento da folha mensal de pagamento.',
          },
          {
            title: 'Alteração Geral - Financeiro',
            href: '#',
            description: 'Processamento da folha mensal de pagamento.',
          },
        ],
      },
    ],
  },
  {
    name: 'Prestação de Contas',
    items: [
      {
        name: 'Tribunal de Contas',
        items: [],
      },
      {
        name: 'e-Social',
        items: [],
      },
    ],
  },
]

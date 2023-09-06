import Link from 'next/link'
import { NavbarMenuActionComponent } from '@/components/navbar/navbar-menu-action'

export default function NavbarRootComponent() {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex items-center space-x-8 px-4">
          <div className="my-2 mt-3 flex flex-col items-center">
            <h1 className="font-mono text-3xl font-bold tracking-tighter">
              Siafic
            </h1>
            <small className="text-xs font-extralight">0.0.1</small>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavbarMenuActionComponent name="Execução Orçamentaria" />
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Execução Orçamentaria
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Financeiro
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contabil
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Configurações
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

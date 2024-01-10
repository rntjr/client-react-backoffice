'use client'

import { Accessibility, Grip } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidenav } from '@/components/sidenav'

export const NavbarRoot = () => {
  const [isDark, setDark] = useState<boolean>(true)
  const { setTheme } = useTheme()

  useEffect(() => {
    if (isDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [isDark, setTheme])

  return (
    <nav className="sticky top-0 border-b border-t-8 border-t-blue-900 bg-white py-2 dark:bg-gray-900">
      <div className="flex flex-row items-center justify-between px-5 md:py-0">
        <h1 className="text-md font-bold tracking-tight text-gray-700 dark:text-white">
          RECURSOS HUMANOS
        </h1>
        <h1 className="text-md hidden font-bold tracking-tight text-gray-700 dark:text-white md:block">
          PREFEITURA MUNICIPAL DE GOIANIA
        </h1>
        <div className={'flex flex-row gap-2 border-s p-1'}>
          <TooltipProvider>
            <Tooltip delayDuration={50}>
              <TooltipTrigger>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'ghost'}
                      size={'sm'}
                      className={'flex flex-col'}
                    >
                      <Accessibility />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex flex-col gap-4">
                      <h4 className="font-medium leading-none">
                        Acessibilidade
                      </h4>
                      <div className={'flex flex-row gap-4'}>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={isDark}
                            onCheckedChange={() => {
                              setDark(!isDark)
                            }}
                            id="airplane-mode"
                          />
                          <Label htmlFor="airplane-mode">Modo escuro</Label>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TooltipTrigger>
              <TooltipContent>Acessibilidade</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={50}>
              <TooltipTrigger>
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  className={'flex flex-col'}
                >
                  <Grip />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Apps</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </nav>
  )
}

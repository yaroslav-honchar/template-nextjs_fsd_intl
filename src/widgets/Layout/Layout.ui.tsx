import cn from "classnames"

import React from "react"

import { ServerProviders } from "@/_app/providers"

import { Header } from "@/features/Footer"
import { Footer } from "@/features/Header"

import { ILayoutProps } from "./Layout.props"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <div className={"min-h-screen w-full flex flex-col"}>
        <Header />
        <main className={cn("flex-grow", "pt-header-offset")}>{children}</main>
        <Footer />
      </div>
    </ServerProviders>
  )
}

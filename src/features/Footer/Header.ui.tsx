import React from "react"

import { ThemeSwitcher } from "@/entities/ThemeSwitcher"

import { Container } from "@/shared/components"

export const Header: React.FC = () => {
  return (
    <header className={"py-4"}>
      <Container className={"flex gap-2 items-center justify-between"}>
        <p>Header</p>
        <ThemeSwitcher />
      </Container>
    </header>
  )
}

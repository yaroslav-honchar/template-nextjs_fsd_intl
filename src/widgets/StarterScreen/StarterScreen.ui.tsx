import { useTranslations } from "next-intl"

import React from "react"

import { Container, Section } from "@/shared/components"

export const StarterScreen: React.FC = () => {
  const tStarterScreen = useTranslations("StarterScreen")
  console.log(tStarterScreen("features"))

  return (
    <Section className={"m-auto"}>
      <Container className={"text-center"}>
        <h1 className={"text-4xl"}>{tStarterScreen("title")}</h1>
        <p className={"text-xl"}>{tStarterScreen("description")}</p>
      </Container>
    </Section>
  )
}

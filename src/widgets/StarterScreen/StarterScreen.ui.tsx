import { useTranslations } from "next-intl"

import React from "react"

import { Container, Section } from "@/shared/components"

const featuresKeys: string[] = ["feature1", "feature2", "feature3"]

export const StarterScreen: React.FC = () => {
  const tStarterScreen = useTranslations("StarterScreen")

  return (
    <Section className={"m-auto"}>
      <Container
        className={"text-center flex flex-col gap-4"}
        size={"lg"}
      >
        <h1 className={"text-4xl"}>{tStarterScreen("title")}</h1>
        <p className={"text-xl"}>{tStarterScreen("description")}</p>
        <ul className={"text-xl"}>
          {featuresKeys.map((key: string) => (
            <li key={key}>{tStarterScreen(`features.${key}`)}</li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

import { Container } from "@/shared/components"

import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./HomePage.props"

export function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <Container>
      <h1>Home page</h1>
    </Container>
  )
}

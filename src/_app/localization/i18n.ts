import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

import { localeConfig } from "./config"

const { locales } = localeConfig

const createLocalizationMiddleware = getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`./translates/${locale}.json`)).default,
  }
})
export default createLocalizationMiddleware

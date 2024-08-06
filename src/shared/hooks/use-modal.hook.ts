import { usePathname } from "@/_app/localization"

import { useRouter, useSearchParams } from "next/navigation"

export const useModal = (modalName: "contact-us" | "confirmation") => {
  const searchParams = useSearchParams()
  const search = new URLSearchParams(searchParams)
  const router = useRouter()
  const pathname = usePathname()
  const isOpen = search.get("modal") === modalName

  const openModalHandle = () => {
    search.set("modal", modalName)
    router.replace(pathname + `?${search.toString()}`)
  }

  const closeModalHandle = () => {
    search.delete("modal", modalName)
    router.replace(pathname + `?${search.toString()}`)
  }

  return {
    isOpen,
    openModalHandle,
    closeModalHandle,
  }
}

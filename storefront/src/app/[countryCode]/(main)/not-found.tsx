import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Page non trouvée",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page non trouvée</h1>
      <p className="text-small-regular text-ui-fg-base">
        La page que vous avez essayé d'accéder n'existe pas.
      </p>
      <InteractiveLink href="/">Retour à l'accueil</InteractiveLink>
    </div>
  )
}

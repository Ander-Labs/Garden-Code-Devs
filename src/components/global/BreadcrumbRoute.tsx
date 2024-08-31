"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadcrumbRoute() {
  const pathname = usePathname();

  // Divide la ruta en segmentos y comienza desde /resources
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  // Solo continúa si estamos en la ruta /resources o una subruta
  if (pathSegments[0] !== "resources") {
    return null; // No mostrar nada fuera de /resources
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {/* Primer breadcrumb: Resources */}
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
          </BreadcrumbItem>

          {pathSegments.length > 1 && <BreadcrumbSeparator />}

          {/* Genera los breadcrumbs dinámicamente para subrutas de /resources */}
          {pathSegments.slice(1).map((segment, index) => {
            // Ruta acumulada para el href
            const href = `/resources/${pathSegments
              .slice(1, index + 2)
              .join("/")}`;

            // Verifica si es el último segmento para saber si es página activa
            const isLast = index === pathSegments.slice(1).length - 1;

            // Mapear segmentos a nombres más amigables si es necesario
            const segmentNameMap: { [key: string]: string } = {
              web: "Web Platforms",
              influencers: "Influencers",
              github: "Repositorios",
            };
            const displayName = segmentNameMap[segment] || segment;

            return (
              <BreadcrumbItem key={index}>
                {isLast ? (
                  // Si es la página actual, no es un link, muestra el último segmento como el nombre del recurso
                  <BreadcrumbPage>
                    {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink href={href}>
                      {displayName.charAt(0).toUpperCase() +
                        displayName.slice(1)}
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}


import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        Docs of <span className="text-primary">MLBB API Stats</span>{" "}
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        An API for Mobile Legends: Bang Bang
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        This API documentation, created by ridwaanhall, provides comprehensive data for Mobile Legends: Bang Bang, including statistics, hero information, and other relevant details. Example usage of this API documentation is provided in Python and Direct API Access.
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Get Stared
        </Link>
      </div>
    </div>
  );
}

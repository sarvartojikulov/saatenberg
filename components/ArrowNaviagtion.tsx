import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Arrow from "./Icons/Arrow";

const directions = ["home", "products", "services", "about", "contact"];
function ArrowNaviagtion() {
  const [links, setLinks] = useState<{ next: string; prev: string }>({
    next: "products",
    prev: "contact",
  });
  const router = useRouter();
  const { pathname } = router;
  function handleArrow() {
    console.log(pathname);
    const indexes = directions.length - 1;
    const currentRouteIndex =
      pathname !== "/"
        ? directions.findIndex((item) => pathname.includes(item))
        : 0;
    const next = currentRouteIndex === indexes ? 0 : currentRouteIndex + 1;
    const prev = currentRouteIndex === 0 ? indexes : currentRouteIndex - 1;
    return {
      next: directions[next] === "home" ? "/" : directions[next],
      prev: directions[prev] === "home" ? "/" : directions[prev],
    };
  }

  useEffect(() => {
    const newRoutes = handleArrow();
    setLinks(newRoutes);
    console.log(links);
  }, [router]);
  return (
    <div className="row-start-3 w-full h-full flex justify-between">
      <Link href={links.prev}>
        <div>
          <Arrow className="transform rotate-180 opacity-20 cursor-pointer" />
        </div>
      </Link>
      <Link href={links.next}>
        <div>
          <Arrow className="opacity-20 cursor-pointer" />
        </div>
      </Link>
    </div>
  );
}

export default ArrowNaviagtion;

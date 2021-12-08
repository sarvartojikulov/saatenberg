import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

const Languages: React.FC = () => {
  let router = useRouter();
  function changeLanguage(locales: string[], currLang: string) {
    const curr_index = locales.indexOf(currLang);
    const next_lang = locales.length - 1 === curr_index ? 0 : curr_index + 1;
    return locales[next_lang];
  }
  return (
    <h1 className="text-md">
      <Link
        href={router.asPath}
        locale={changeLanguage(router.locales!, router.locale!)}
      >
        <a>{router.locale}</a>
      </Link>
    </h1>
  );
};

export default Languages;

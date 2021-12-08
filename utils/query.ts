import { NextRouter } from "next/dist/client/router"




const deleteQuery = (router : NextRouter, key: string) => {
  const queries = router.query
  delete queries[key]
  router.push({
    pathname: router.pathname,
    query: queries,
  });
}

const updateOrAddQuery = (router : NextRouter, object : Record<string,any>) => {
  const queries = router.query
  router.push({
    pathname: router.pathname,
    query: Object.assign(queries, object),
  });
}






export {updateOrAddQuery, deleteQuery}
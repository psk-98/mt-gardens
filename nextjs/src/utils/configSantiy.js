import { createClient } from "next-sanity"

export const sanityClient = createClient({
  projectId: "c5p4auzl",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
})

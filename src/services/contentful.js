import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "q4u2qwufkgf9",
  accessToken: "2mKDYtR3Md_m_Y8Pn7cYrUM9uvrNzggBWrf5yD8ZxKM",
  environment: "master",
});

export default function useContentful(page) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadContent() {
      try {
        const content = await client.getEntries({
          "sys.contentType.sys.id": page,
        });
        console.log("content", content);
        setData(content);
      } catch (err) {
        console.err(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadContent();
  }, [page]);

  return { data, isLoading, error };
}

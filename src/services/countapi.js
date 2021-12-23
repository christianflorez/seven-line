import { useState, useEffect } from "react";
import countapi from "countapi-js";

const KEY = "counter";
const NAMESPACE = "sevenlineprayercounter";

export async function getCount() {
  try {
    return await countapi.get(NAMESPACE, KEY);
  } catch (err) {
    console.error("There was an error getting the counter");
    console.error(err);
  }
}

export async function setCount(newValue) {
  try {
    return await countapi.set(NAMESPACE, KEY, newValue);
  } catch (err) {
    console.error("There was an error setting the counter");
    console.error(err);
  }
}

export function useGetCount(page) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCount() {
      try {
        const count = await getCount();
        setData(count);
      } catch (err) {
        console.err(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadCount();
  }, []);

  return { data, isLoading, error };
}

export default {
  getCount,
  useGetCount,
};

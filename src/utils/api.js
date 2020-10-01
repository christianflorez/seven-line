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

export default {
  getCount,
};

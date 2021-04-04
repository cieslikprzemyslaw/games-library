import { useState } from "react";

const Planets = (url: string) => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }
}
import { useEffect, useState } from "react";

const blogDetail = (blogId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${blogId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [blogId]);
  return [service];
};

export default blogDetail;
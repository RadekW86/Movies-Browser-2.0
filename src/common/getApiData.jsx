export default async function getApiData(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
    next: {
      revalidate: 60,
    },
  };

  const response = await fetch(url, options);

  return await response.json();
}

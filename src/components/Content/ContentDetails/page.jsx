import Loading from "@/components/Loading/page";

export default function ContentDetails({
  status,
  type,
  title,
  data,
  dataExtra,
}) {
  console.log(data, dataExtra);
  return (
    <>
      <h2>
        {title[0]}, {title[1]}
      </h2>
      <div>{type}</div>
      <div>{status}</div>
      {status === "success" ? (
        <>
          <div>OK</div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

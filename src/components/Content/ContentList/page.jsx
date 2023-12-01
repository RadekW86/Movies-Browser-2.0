import Loading from "@/components/Loading/page";

export default function ContentList({ status, type, title, data }) {
  console.log(data);
  return (
    <>
      <h2>{title}</h2>
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

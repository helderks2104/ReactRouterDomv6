import { useParams, useSearchParams, Outlet } from "react-router-dom";

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <>
      <h1>
        Posts {`Para: ${id}`} {`QS ${qs.get("page")} `}{" "}
        {`Segundo QS ${qs.get("segunda")}`}
      </h1>
      <Outlet />
    </>
  );
};

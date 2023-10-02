import { useLocation } from "react-router-dom";

export const Home = () => {
  // Pegando estado do componente anterior
  const { state } = useLocation();

  return (
    <>
      <h1>Chama la</h1>
      <p>{state as string}</p>
    </>
  );
};

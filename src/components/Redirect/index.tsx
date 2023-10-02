import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Componente para redirecionar a pagina >>>
export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      // Pagina a ser redirecionado
      navigate("/", {
        state: `This is the estate: ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [time, navigate]);

  return (
    <>
      <h1>Get out of here in: {time}</h1>
    </>
  );
};

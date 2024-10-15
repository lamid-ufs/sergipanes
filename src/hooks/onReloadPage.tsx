import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectOnReload = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnLoad = () => {
      const currentPath = window.location.pathname;
      if (currentPath !== "/sergipanes") {
        navigate("/sergipanes");
      }
    };

    window.addEventListener("load", handleOnLoad);

    return () => {
      window.removeEventListener("load", handleOnLoad);
    };
  }, [navigate]);
};

export default useRedirectOnReload;

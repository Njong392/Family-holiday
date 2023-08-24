import { useEffect, useState } from "react";
import DiscoverPage from "../../components/DiscoverPage";
import { useUserContext } from "../../hooks/useUserContext";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const {
    state: { hosts },
    dispatch,
  } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
 
  const fetchHosts = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:4000/api/user");
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_HOSTS", payload: json });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHosts();

  }, []);

  return <DiscoverPage hostFamily={hosts} isLoading={isLoading}/>;
}

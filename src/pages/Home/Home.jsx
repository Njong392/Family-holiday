import { useEffect } from "react";
import DiscoverPage from "../../components/DiscoverPage";
import { useUserContext } from "../../hooks/useUserContext";

export default function Home() {
  const {
    state: { user, hosts },
    dispatch,
  } = useUserContext();

  const fetchHosts = async () => {
    const response = await fetch("http://localhost:4000/api/user", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "GET_HOSTS", payload: json });
    }
  };

  useEffect(() => {
    fetchHosts();
    console.log(hosts);
  }, []);

  return <DiscoverPage hostFamily={hosts} />;
}

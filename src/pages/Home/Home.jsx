import DiscoverPage from "../../components/DiscoverPage";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";

export default function Home(fetchHost){
    const {state: {user, hosts}, dispatch} = useAuthContext()

    const fetchHosts = async () => {
        const response = await fetch('http://localhost:4000/api/user', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'GET_HOSTS', payload: json})
        }
    }


    useEffect(() => {
        
            fetchHosts()
            console.log(hosts)
        
    }, [])
  
    return(
       <>
            <DiscoverPage hostFamily={hosts} />
    
        
       </>
    )
}
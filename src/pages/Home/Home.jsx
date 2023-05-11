import DiscoverPage from "../../components/DiscoverPage";

//import Navbar from "../../layouts/NavLayout";

export default function Home(){
    //    useEffect(() => {
//     const fetchUser = async () => {
//         const response = await fetch('http://localhost:4000/api/user/' + user.id, {
//             headers:{
//                 'Authorization': `Bearer ${user.token}`
//             }
//         })
//         const json =  await response.json()

//         if(response.ok){
//             dispatch({type: 'SET_USER_DETAILS', payload:json})
//         }
//     }
              
//     if(user){
//         fetchUser()
//         console.log(userDetails)
//     }
        
//    }, []);
    return(
       <>
      
        <DiscoverPage/>
        
       </>
    )
}
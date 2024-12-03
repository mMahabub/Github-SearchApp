import { useEffect, useContext } from 'react';
import Spinner from '../Layout/spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
    const { users, loading, fetchUsers} = useContext(GithubContext)
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    // const fetchUsers = async () => {
    //     try {
    //         // সঠিক URL ব্যবহার করুন
    //         const response = await fetch(`${import.meta.env.VITE_APP_GITHUB_URL}/users`, {
    //             headers: {
    //                 // সঠিক Authorization ফরম্যাট
    //                 Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
    //             },
    //         });

    //         // HTTP Status চেক করুন
    //         if (!response.ok) {
    //             throw new Error(`Error: ${response.status} - ${response.statusText}`);
    //         }

    //         const data = await response.json();
    //         setUsers(data); // API রেসপন্স দেখুন
    //         setLoading(false); // API রেসপন্স দেখুন
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //     }
    // };
    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {users.map((user) => (
                <UserItem key={user.id} user={user}/>
              ))}
        
            </div>
            )
        
    }else{
        return <Spinner/>
    }
    

  
}

export default UserResults;
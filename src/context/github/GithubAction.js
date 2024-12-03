import axios from "axios";
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}`}
})


// Get search results
export const searchUsers = async (text) => {
    
    
        const params = new URLSearchParams({
            q: text
        })

    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         },
    //     });

    //     // HTTP Status চেক করুন
    //     if (!response.ok) {
    //         throw new Error(`Error: ${response.status} - ${response.statusText}`);
    //     }

    //     const {items} = await response.json();
    //     // setUsers(data); // API রেসপন্স দেখুন
    //     // setLoading(false); // API রেসপন্স দেখুন
    //   return items
    // } catch (error) {
    //     console.error('Fetch error:', error);
    // }
    const response = await github.get(`/search/users?${params}`)
    return response.data.items

}
// get user and repo
export const getUsersAndRepos = async (login)=> {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
    ])
    return {user: user.data, repos: repos.data}

}



//  // Get user singular
//  export const getUser = async (login) => {
//     try {
//         // setLoading()
//         const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//             },
//         });

//         // HTTP Status চেক করুন
//        if(response.status === 404){
//         window.location = '/notfound'
//        }else{
//         const data = await response.json();
//         return data
//         // dispatch({
//         //     type: 'GET_USER',
//         //     payload: data,
//         // })

//        }  
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// };
// // get repos
// export const getUsersRepos = async (login) => {
//     try {
//         // setLoading()

//         const params = new URLSearchParams({
//             sort: 'created',
//             per_page: 10,

//         })
       
//         const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//             },
//         });

//         // HTTP Status চেক করুন
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`);
//         }

//         const data = await response.json();
//         return data
//         // setUsers(data); // API রেসপন্স দেখুন
//         // setLoading(false); // API রেসপন্স দেখুন
//         // dispatch({
//         //     type: 'GET_REPOS',
//         //     payload: data,
//         // })
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// }
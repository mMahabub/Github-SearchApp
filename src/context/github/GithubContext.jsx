import {  createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
// import { searchUsers } from "./GithubAction";



const GithubContext = createContext();

// const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initialState = {
        users: [],
        repos: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer (githubReducer,initialState)


// // Get search results
//     const searchUsers = async (text) => {
//         try {
//             setLoading()
//             const params = new URLSearchParams({
//                 q: text
//             })

//             const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                 },
//             });

//             // HTTP Status চেক করুন
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} - ${response.statusText}`);
//             }

//             const {items} = await response.json();
//             // setUsers(data); // API রেসপন্স দেখুন
//             // setLoading(false); // API রেসপন্স দেখুন
//             dispatch({
//                 type: 'GET_USERS',
//                 payload: items,
//             })
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     };

//     // Get user singular
//     const getUser = async (login) => {
//         try {
//             setLoading()
//             const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                 },
//             });

//             // HTTP Status চেক করুন
//            if(response.status === 404){
//             window.location = '/notfound'
//            }else{
//             const data = await response.json();
//             dispatch({
//                 type: 'GET_USER',
//                 payload: data,
//             })

//            }  
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     };
// // get repos
//     const getUsersRepos = async (login) => {
//         try {
//             setLoading()

//             const params = new URLSearchParams({
//                 sort: 'created',
//                 per_page: 10,

//             })
           
//             const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                 },
//             });

//             // HTTP Status চেক করুন
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} - ${response.statusText}`);
//             }

//             const data = await response.json();
//             // setUsers(data); // API রেসপন্স দেখুন
//             // setLoading(false); // API রেসপন্স দেখুন
//             dispatch({
//                 type: 'GET_REPOS',
//                 payload: data,
//             })
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     };
    // Clear users from status
    // const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

    // set loading
    // const setLoading = () => dispatch ({type: 'SET_LOADING'})
     return <GithubContext.Provider value={{
        // Move to searchUser to action file only state is used instead of all those item and same working..
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        ...state,
        dispatch,
        // searchUsers
        // clearUsers,
        // getUser,
        // getUsersRepos,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext

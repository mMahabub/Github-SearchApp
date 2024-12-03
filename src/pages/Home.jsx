import React from 'react'
import UserResults from '../Components/user/UserResults'
import UserSearch from '../Components/user/UserSearch'


function Home() {
   
  return (
    <div>
        <UserSearch/>
      <UserResults/>
     {/* {import.meta.env.VITE_APP_GITHUB_TOKEN} */}
      
    </div>
  )
}

export default Home
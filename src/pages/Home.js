import React from 'react'
import withlayout from './withLayout'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <div className='banner'>
      <h1>welcome to my webpage</h1>
      <p>This is a website about myself.I love programming and willing to
       teach anyone who wish to learn as well</p>
       <div className='actions-wrap'>
       <button className='btn-outline'onClick={()=>navigate("./about")}>about me</button>
       <button className='btn-contain'onClick={()=>navigate("./blog")}>read blog</button>


       </div>

      </div>
    </div>
  )
}

export default withlayout(Home) 


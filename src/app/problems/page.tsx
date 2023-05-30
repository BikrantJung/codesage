import React from 'react'
import Demo from './demo'

async function getAllProblems(){
    try {
        const response = await fetch('http://localhost:3000/api/problem?skip=2&take=3')
        const data = await response.json()
        return data.data
        
    } catch (error) {
        console.log("Error in problem page",error)
    }
}

async function Page() {
    const data = await getAllProblems()
    console.log("Data in page", data)
  return (
    <div>
        {data ? <Demo data={data}/> : "NO PROBLEMS"}
    </div>
  )
}

export default Page
'use client'
import { useRouter } from "next/navigation"
import Link from "next/link"

const Home = () => {
  const router = useRouter()

  function navigate(page){
router.push(page)
  }
  return (
    <section>
    
    <h1>UseRouter</h1>
    <Link className="bg-purple-300 p-2" href="portfolio">portfolio</Link> <br />
    <button className="bg-red-500 rounded p-2" onClick={()=>{navigate("about")}}>Go to about page</button>
    <button className="bg-blue-500 rounded p-2" onClick={()=>router.push("contact")}>Go to contact</button>
    </section>
  )
}

export default Home
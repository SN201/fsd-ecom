import { useState , useEffect } from "react";
import { Link } from "react-router-dom"

import { Button } from '@/shared/ui/Button';

import styles from "./HomePage.module.scss"

import { Footer, Header } from "@/widgets";

function HomePage() {
const [error , setError] = useState(false);
useEffect(()=>{
if(error) throw new Error();
},[error])
  return (
    <div className= {styles.pageWraper}>
      <Header/>
          <main className={styles.container}>
            <Link to={"/login"}>Login Page</Link>
            <br/>
            <Button theme="primary" onClick={ ()=>{setError(true)}}>Click for Error </Button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad provident voluptatem quibusdam quae mollitia cum neque assumenda eveniet. Sequi suscipit optio dolorem necessitatibus magnam. Veritatis laboriosam laborum ratione suscipit!</p>
         </main>  
      <Footer/>
    </div>
  )
}

export default HomePage

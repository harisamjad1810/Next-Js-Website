import React from 'react'
import Moviecard from '../components/MovieCard.js';
import styles from "@/app/styles/common.module.css"
const page = async () => {

  const url = process.env.Rapid_Key;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eb0449a1dbmshf50791a75ceada2p185defjsn0bc340df37f4',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options)
  const data = await res.json()
  const main_data = data.titles

  console.log(data)

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and Movies</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <Moviecard key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default page

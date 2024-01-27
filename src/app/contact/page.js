import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from "@/app/contact/contact.module.css"
import ContactForm from '../components/ContactForm'

function page() {
  return (
    <>
    <div className={styles.container}>
      <h1>Contact us</h1>
     <ContactCard />

       <section className={styles.contact_section}>
        <h2>We'd love to hear <span>from you</span></h2>

        <ContactForm />

       </section>
     </div>

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13596.294551854793!2d74.41738088869016!3d31.577028467727715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919101fe628dc2f%3A0x20b9ee546bfcb741!2sHarbanspura%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706163964745!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>

    </>
  )
}

export default page

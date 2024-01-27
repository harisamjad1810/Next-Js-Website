'use client'

import React, { useState } from 'react';
import styles from "@/app/contact/contact.module.css";
import {submitContact} from "../contact/action"
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const ContactForm = () => {


  const handleSubmit = async (formData) => {
    try {

      const response = await submitContact({
        username : formData.get("username"),
        email : formData.get("email"),
        phone : formData.get("phone"),
        message : formData.get("message")
      })

      if (response.status === 200) {
        setStatus('success');
      } 
      else {
        setStatus('error');
      }

    } 
    
    catch (e) {
      console.log(e)
    }

  }

  return (
    <>
      <form className={styles.contact_form} action={handleSubmit} >

        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Username
            <input
              type="text"
              name='username'
              id='username'
              placeholder='Enter Your Name'
              className={mulish}
            // value={user.username}
            // onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="text"
              name='email'
              id='email'
              placeholder='Enter Your Email'
              className={mulish}
            // value={user.email}
            // onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Phone No
            <input
              type="number"
              name='phone'
              id='phone'
              placeholder='Enter Your Phone #'
              className={mulish}
            // value={user.phone}
            // onChange={handleChange}
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              rows={5}
              type="text"
              name='message'
              id='message'
              placeholder='Enter Your Message Here'
              className={mulish}
            // value={user.message}
            // onChange={handleChange}
            />
          </label>
        </div>

        <button type='submit' className={mulish}>
          Send Message
        </button>
      </form>


    </>
  );
};

export default ContactForm;

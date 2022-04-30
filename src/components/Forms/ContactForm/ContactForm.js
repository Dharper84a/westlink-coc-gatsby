import React, {useState} from 'react';

import * as styles from './ContactForm.module.scss'

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const onSubjectChangeHandler = (e) => {
    setSubject(e.target.value);
  }

  const onMessageChangeHandler = (e) => {
    setMessage(e.target.value);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    },3000)
  }
  return (
    <form className={styles.form}>
          {showMessage && 
          <p className={styles.notice}>Thank you! Your message has been sent. We will get back to you as soon as possible.</p>
          }
          
          <div className={styles.formInput}>
            <label htmlFor="from" aria-hidden="true" className={styles.accessHidden}>Email</label>
            <input type="email" name="email" id="email" value={email} onChange={onEmailChangeHandler} placeholder="Email" />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="subject" aria-hidden="true" className={styles.accessHidden}>Subject</label>
            <input type="text" name="subject" id="subject" value={subject} onChange={onSubjectChangeHandler} placeholder="Subject" />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="mesage" aria-hidden="true" className={styles.accessHidden}>Message</label>
            <textarea name="message" id="message" onChange={onMessageChangeHandler} defaultValue={message} placeholder="Message"></textarea>
          </div>
          <div className={styles.formInput}>
            <input type="submit" value="Contact Us" onClick={onSubmitHandler} />
          </div>
        </form>
  )
}

export default ContactForm
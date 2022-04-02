import React, {useState} from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

import * as styles from "./styles.module.scss"


const ContactPageTemplate = (props) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);


  const position = { lat: props.data.address.lat, lng: props.data.address.lon };
 
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '400px',
    minWidth: '300px',
    maxWidth: '800px'
  };

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
    }, 3000);

    
  }
  return (
    <main className={styles.pageContent}>
   
      <section itemScope itemType="https://schema.org/Organization">
        <h1 itemProp="name">Contact Westlink</h1>
        <ul>
          <li>
            <a itemProp="telephone" href="tel:13167221111" title="Call Westlink Church of Christ">
              (316) 722-1111
            </a>
          </li>
          <li>
            <address
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">10025 W. Central Ave.</span>
              <br />
              <span itemProp="addressLocality">Wichita</span>,{" "}
              <span itemProp="addressRegion">Kansas</span>{" "}
              <span itemProp="postalCode">67212</span>
              <br />
            </address>
            <a href="https://goo.gl/maps/UHi39pNBDV6Q9HhH8" title="Get directions to Westlink Church of Christ" target="_blank" rel="noreferrer">Directions</a>
          </li>
        </ul>

        <form>
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
      </section>

      <aside>
        <Map 
          google={props.google} 
          zoom={14} 
          initialCenter={position}
          // style={style}
          scrollwheel={false}
          draggable={false}
          keyboardShortcuts={false}
          disableDoubleClickZoome={true}
          containerStyle={containerStyle}
        >
          <Marker
            title="Westlink Church of Christ"
            position={position} />

        </Map>
      </aside>
    </main>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCMTSxkxHnoFHFJsC3l2fi8xcBC5aGbok8'
})(ContactPageTemplate)
// export default ContactPageTemplate

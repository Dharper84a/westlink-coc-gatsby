import React from 'react';
import Website from "../templates/Website"
import Header from "../templates/Header"
import Footer from "../templates/Footer"


import DonatePageTemplate from "../templates/donatePage/donatePage"

const Donate = () => {
  return (
    <Website>
      <Header />
        <DonatePageTemplate />
      <Footer />
    </Website>
  );
}

export default Donate;
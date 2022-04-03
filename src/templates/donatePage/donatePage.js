import React from 'react';
import { Helmet } from 'react-helmet';

import * as styles from './styles.module.scss';

const TemplateDonatePage = () => {
  return (
    <>
    <Helmet>
      <title>Donate - Westlink Church of Christ</title>
    </Helmet>
    <main className={styles.pageContent}>
      Donate Page
    </main>
    </>
  );
}

export default TemplateDonatePage;
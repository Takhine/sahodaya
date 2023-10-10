import React, { useEffect, useState } from 'react';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet"
import { CircularProgress } from '@material-ui/core';

function NationalSahodayaConference() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])

  return (
    <>
      <Helmet>
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"></link>
        <link href="css/theme.min.css" rel="stylesheet" type="text/css"></link>

        <script src="js/bootstrap.min.js"></script>
        <script src="js/theme.js"></script>

      </Helmet>
      {loading && <div className='nsc23-page'>
        <div className='loader-wrapper' style={{ background: 'white', zIndex: 100, position: 'fixed', height: '100%', width: '100%' }}>
          <CircularProgress />
        </div>
      </div>}
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default NationalSahodayaConference;
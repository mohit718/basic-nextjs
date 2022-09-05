import '../styles/globals.css'
import Script from 'next/script'
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Navitem from '../components/Navitem';
import Navbar from '../components/Navbar';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  navitem: Navitem,
  navbar: Navbar
};
storyblokInit({
  accessToken: 'rFYxm39EU17Xg5KYShu2XQtt',
  use: [apiPlugin],
  components
});

function MyApp({ Component, pageProps }) {  
  return <>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></Script>
  <Component {...pageProps} />
  </>
}



export default MyApp

import React from "react";
import Layout from '../components/Layout/Layout';
import classes from '../components/Home/Home.module.css';

const Home = () => {
  return (
    <Layout mainClassName={classes.pageContainer}>
      <div className={classes.hero}>
        <h1 className={classes.pageHeader}>Welcome to Space</h1>
      </div>

    </Layout>
  );
}

export default Home;
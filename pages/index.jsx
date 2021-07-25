import React from 'react';
import Layout from '../components/Layout/Layout';
import HomepageHero from '../components/Sections/Homepage/HomepageHero';
import ProductsIntro from '../components/Sections/Homepage/ProductsIntro';

const Index = () => (
  <>
    <Layout title="Schemes SG">
      <HomepageHero />
      <div className="products-intro-container">
        <ProductsIntro />
      </div>
    </Layout>

    <style jsx>
      {`
        .index-root {
          position: relative;
        }

        .products-intro-container {
        }
      `}
    </style>
  </>
);

export default Index;

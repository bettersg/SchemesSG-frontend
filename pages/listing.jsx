/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { uuid } from 'uuidv4';
import { colors } from '../constants/design';
import PageHero from '../components/Sections/PageHero';
import Layout from '../components/Layout/Layout';
import AddListingForm from '../components/Form/AddListingForm';
import EditListingForm from '../components/Form/EditListingForm';
import FeedbackForm from '../components/Form/FeedbackForm';

const forms = [
  {
    name: 'Add a listing',
    icon: <AddIcon style={{ marginRight: 8 }} />,
    form: <AddListingForm />,
  },
  {
    name: 'Edit a listing',
    icon: <EditIcon style={{ marginRight: 8 }} />,
    form: <EditListingForm />,
  },
  {
    name: 'Feedback',
    icon: <FeedbackIcon style={{ marginRight: 8 }} />,
    form: <FeedbackForm />,
  },
];

const Listing = ({ form }) => {
  // SET State Variables!
  // to manage Accordion state-expanded or retracted
  const [expanded, setExpanded] = useState(form === 'feedback' ? 2 : 0);

  // FN to set which panel is expanded based on url:
  const expandUrlPanel = (url) => {
    // according to the url, get the path
    const panelPath = url.split('/')[3];
    // according to the url set which panel index to expand
    switch (panelPath) {
      case 'listing':
        setExpanded(0);
        break;
      case 'listing?form=feedback#feedback':
        setExpanded(2);
        break;
      default:
        console.log('error at Listing');
    }
  };

  // run useEffect to grab url from Window
  // run useEffect once each time window is loaded
  useEffect(() => {
    // grab URL from the window.
    // due to next, this has to run before JSX elements are created.
    const currentURL = window.location.href;
    console.log('currentURL =', currentURL);
    expandUrlPanel(currentURL);
  }, []);

  // OnChange, change expanded panel to this panel if not expanded?
  const handleAccordion = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : 0);
  };

  return (
    <>
      <Layout title="Listing | Schemes SG">
        <PageHero
          title="Add or Edit a Listing"
          subtitle="Help us make the Schemes Bank more complete and accurate, and improve Schemes SG on the whole."
        />
        <Container
          maxWidth="lg"
          style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        >
          <div className="Listing-accordions" id="listaccordions">
            {forms.map((f, i) => (
              <Link href="/listing#listaccordions" key={uuid()}>
                <Accordion
                  elevation={3}
                  expanded={expanded === i}
                  onChange={handleAccordion(i)}
                  style={{ margin: '16px 0' }}
                  id={i === 2 ? 'feedback' : ''}
                  TransitionProps={{ timeout: 0, unmountOnExit: true }}
                >
                  <AccordionSummary
                    expandIcon={expanded !== i && <ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      variant="h6"
                      style={{
                        color: colors.primary.dark,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {f.icon}
                      {' '}
                      {f.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>{f.form}</AccordionDetails>
                </Accordion>
              </Link>
            ))}
          </div>
        </Container>
        <Container maxWidth="lg">
          <div className="disclaimer">
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              Please note
            </Typography>
            <Typography variant="body1">
              Schemes SG is only an
              {' '}
              <strong>aggregator</strong>
              {' '}
              of public domain
              listings and crowdsourcing. We are not a VWO, nor any
              assistance-giving body, and we do not guarantee successful
              application of any schemes listed above. For more info on the
              listings and the thinking process behind their inclusion, see our
              {' '}
              <Link href="/about" passHref>
                <a href="/about">"About"</a>
              </Link>
              {' '}
              page.
            </Typography>
          </div>
        </Container>
      </Layout>

      <style jsx>
        {`
          .Listing-root {
            position: relative;
          }

          .disclaimer {
            display: inline-block;
            margin: 3rem 0;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: ${colors.error.main};
            border: 1px solid ${colors.error.main};
          }
        `}
      </style>
    </>
  );
};

export default Listing;

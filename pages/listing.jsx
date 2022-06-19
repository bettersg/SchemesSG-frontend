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
    hashLoc: 'add',
  },
  {
    name: 'Edit a listing',
    icon: <EditIcon style={{ marginRight: 8 }} />,
    form: <EditListingForm />,
    hashLoc: 'edit',
  },
  {
    name: 'Feedback',
    icon: <FeedbackIcon style={{ marginRight: 8 }} />,
    form: <FeedbackForm />,
    hashLoc: 'feedback',
  },
];

const Listing = () => {
  // State Variables
  // to manage Accordion state, expanded (true) or retracted(false)
  const [expanded, setExpanded] = useState(false);

  // FN to set which panel is expanded based on url:
  const expandUrlPanel = (url) => {
    // according to the url, get the path
    const panelPath = url.split('/')[3];
    // according to the url set which panel index to expand
    switch (panelPath) {
      /* add listing doesn't use # tag so that Navbar, title is seen */
      case 'listing':
        setExpanded(0);
        break;
      case 'listing#add':
        setExpanded(0);
        break;
      case 'listing#edit':
        setExpanded(1);
        break;
      case 'listing#feedback':
        setExpanded(2);
        break;
      case 'listing#listaccordions':
        setExpanded(false);
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
    expandUrlPanel(currentURL);
  }, []);

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
          {/* accordion grp uses #edit tag so that other accordion summaries can be seen  */}
          {/* key added in Link tag as each Link is a child component when mapped */}
          <div className="Listing-accordions">
            {forms.map((f, i) => (
              <div key={`Link#${f.hashLoc}`} id={`LinkHref${i}`}>
                <Accordion
                  elevation={3}
                  expanded={expanded === i}
                  onChange={handleAccordion(i)}
                  key={f.name}
                  style={{ margin: '16px 0' }}
                  id={`Accordion0${i}`}
                  /* timeout has to be zero to ensure
                  correct position of expanded panels
                  when toggling between the 3 panels */
                  /* unmountOnExit change to false to keep
                  state and help with response */
                  TransitionProps={{ timeout: 0, unmountOnExit: false }}
                >
                  <AccordionSummary
                    expandIcon={expanded !== i && <ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id={f.hashLoc}
                    /* previous id: */
                    /* id="panel1bh-header" */
                    key={`AccordionSumm${f.hashLoc}`} /* added key here to speed up react rendering */
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
              </div>
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

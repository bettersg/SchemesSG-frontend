import React from 'react';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SettingsIcon from '@material-ui/icons/Settings';
import Layout from '../components/Layout/Layout';
import PageHero from '../components/Sections/PageHero';
import { colors } from '../constants/design';

const about = [
  {
    name: 'How it started',
    description: (
      <>
        Schemes SG started as a side project by our product lead. A long-time volunteer, he collated a "help-list" to facilitate referral work and built a front-end to share these resources. The tool gained unexpected traction with social workers and volunteers. Sensing that this could address care workers' pain point of navigating the confusing social assistance landscape, he gathered like-minded individuals from the
        <a href='https://better.sg' target='_blank' rel='noopener noreferrer'> better.sg </a>
        tech community to improve the tool.
        <br />
        <br />
        The team engaged social workers, caregivers and friends to understand lived experiences and help-seeking practices. They found that social needs are often intertwined, and if technology could improve the search process by making sense of the entangled issues that people face, it would immensely reduce help-seekers' mental burden. This inspired our natural language tool and indexing.
        <br />
        <br />
        Schemes SG is ultimately built for the community, with the community. Your continued usage, feedback, searches and contribution of crowdsourced assistance info help this tool get better everyday.
      </>
    ),
    icon: <WbIncandescentIcon style={{ marginRight: 8 }} />,
  },
  {
    name: 'What this platform tries to solve',
    description: (
      <>
        Serious thought was put in before building Schemes SG. Our landscape scans helped us realise that:
        <br />
        <br />
        1. Social assistance information was often piecemeal and fragmented across various sites. There were some compilations, but they were often PDF files hidden within the repositories of organisations' websites, and were hard to find. Search engines might also miss them.
        <br />
        <br />
        2. Even if one could get their hands on a compilation, it would take painstaking "Ctrl + F" excavation to find schemes, given how complex social assistance is. The volume of information was simply mind-boggling.
        <br />
        <br />
        3. The listings might not necessarily be updated. New versions were usually held in completely different links. PDF listings also meant that social workers and volunteers depended on the original compiler to issue a new version when things changed.
        <br />
        <br />
        4. There were intuitive directories (e.g. SupportGoWhere has done a great job), but they were primarily government portals and might not include NGO or VWO schemes. Again, the power of the crowdsourcing could be useful here, given the size of the non-profit sector.
        <br />
        <br />
        This portal hopes to address the above issues by tapping on the power of
        the crowd to make social assistance info{' '}
        <strong>1) comprehensive</strong> and <strong>2) updated</strong>, and
        then using technologies like AI/NLP and filters in data visualisation to
        make this info <strong>3) navigable.</strong> 😊
      </>
    ),
    icon: <LockOpenIcon style={{ marginRight: 8 }} />,
  },
  {
    name: 'Considerations behind the listings',
    description: (
      <>
        <u>Here are the parameters behind how the Bank was populated</u>:<br />
        <br />
        1. All information is <strong>public-domain</strong>. Schemes SG only
        agglomerates info that is out there to help navigate complexity. Where
        individual schemes are concerned, we think the best descriptions come
        from the organisations themselves and use their writeups wherever
        possible to avoid misrepresenting their good work :) If we make edits,
        it is to improve search functionality, and we ensure they are minor and
        factually accurate. <br />
        <br />
        2. Currently, Schemes SG only lists schemes that{' '}
        <strong>provide benefits</strong> in cash (financial assistance,
        subsidies) or in kind (free food, food vouchers, free clinics, special
        cards which ascribe certain benefits). While <strong>services</strong>
        (e.g. subsidised special education) are not yet included, we may start
        to look into it in the near future once the team has more capacity.
        <br />
        <br />
        <u>Schemes SG does not include</u>:
        <br />
        <br />
        1.<strong> Auto-inclusion schemes</strong>. The purpose of a
        consolidated public aid portal is to help reduce bandwidth tax, so we
        see no need to put in extra information that social workers and
        volunteers have no requirement to act on.
        <br />
        <br />
        2.
        <strong>
          {' '}
          Schemes that do not have a public listing, or are not verified
        </strong>
        . We understand that sometimes, organisations may have reasons for
        keeping their social assistance informal. Hence, if there is no public
        info on it, we will not include it. If the info is crowdsourced, we ask
        the contributor for a link, and if there is none, we will contact the
        organisation or even the private individual to verify first.
        <br />
        <br />
      </>
    ),
    icon: <GroupWorkIcon style={{ marginRight: 8 }} />,
  },
  {
    name: 'Technical details for geeks',
    description: (
      <>
        If you are interested, Schemes Pal's natural language model involves the
        following transformation: Bag of Words (BoW) -&gt; TF-IDF -&gt; latent
        semantic indexing (LSI). Some resources that I used include{' '}
        <a
          href='https://radimrehurek.com/gensim/auto_examples/core/run_topics_and_transformations.html'
          target='_blank'
          rel='noopener noreferrer'>
          this
        </a>
        ,{' '}
        <a
          href='https://markroxor.github.io/gensim/static/notebooks/Topics_and_Transformations.html'
          target='_blank'
          rel='noopener noreferrer'>
          this
        </a>{' '}
        and{' '}
        <a
          href='https://www.kaggle.com/devendra45/movies-similarity'
          target='_blank'
          rel='noopener noreferrer'>
          this
        </a>
        . I am still experimenting if this is the most appropriate for our use
        case. If you have any ideas on model improvement, tuning or other
        aspects that could help users get more accurate listings, reach out via
        the{' '}
        <a href='/listing' target='_blank' rel='noopener noreferrer'>
          "Feedback"
        </a>{' '}
        form.
        <br />
        <br />
        The envisioned technical steady-state is a{' '}
        <a
          href='https://towardsdatascience.com/the-virtuous-cycle-of-ai-driven-growth-c3fbf35f70c'
          target='_blank'
          rel='noopener noreferrer'>
          virtuous data cycle
        </a>
        . As the user base grows, we get more Schemes Bank contributions and
        Schemes Pal queries, allowing us to train more robust and accurate
        semantic matches. Schemes Case requests cover the blind spots from a
        domain perspective and act as sanity checks on the model. The three
        components work in tandem to create an ever-improving, ever more robust
        Schemes SG.
        <br />
        <br />
      </>
    ),
    icon: <SettingsIcon style={{ marginRight: 8 }} />,
  },
];

const About = () => {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : 0);
  };
  return (
    <>
      <Layout title='About | Schemes SG'>
        <PageHero
          title='About'
          subtitle='A little more information about how Schemes SG came to be and thinking behind it.'
        />
        <section className='About-content'>
          <Container maxWidth='lg'>
            <div className='vision-container'>
              <Typography
                variant='h5'
                color='primary'
                style={{ fontWeight: 700 }}>
                Our vision
              </Typography>
            </div>
            <Typography variant='h6'>
              To empower social workers, volunteers and vulnerable groups in Singapore to find relevant social assistance quickly, easily and accurately. We tap on crowdsourcing to keep information updated, and use AI to help users better navigate all this information.
            </Typography>

            <div className='About-accordions'>
              {about.map((a, i) => (
                <Accordion
                  elevation={3}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  key={a.name}
                  style={{ margin: '16px 0' }}
                  TransitionProps={{timeout: 0}}>
                  <AccordionSummary
                    expandIcon={expanded !== i && <ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'>
                    <Typography
                      variant='h6'
                      style={{
                        color: colors.primary.dark,
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                      {a.icon} {a.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body1' color='textSecondary'>
                      {a.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Container>
        </section>
      </Layout>

      <style jsx>
        {`
          .About-root {
            position: relative;
          }

          section {
            padding: 3rem 0;
          }

          .vision-container {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            border: 1px solid ${colors.primary.main};
            border-radius: 6px;
            margin-bottom: 1rem;
          }

          .About-accordions {
            padding-top: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default About;

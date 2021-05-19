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
        Having volunteered with various social sector organisations since 2012,
        I mentally accumulated a list of assistance schemes provided by various
        institutions. This information was shared informally with my social
        worker friends or volunteers when they had to refer beneficiaries to
        sources of help. Over the years, I realised my friends also had their
        own lists, and we would share these resources. I have always thought
        that, if all this tacit knowledge were properly KM-ed, they could be
        quite a powerful resource for the social sector.
        <br />
        <br />
        In 2017, I picked up AI and full stack programming. The idea continued
        sitting at the back of my head, until I had to create an app for a
        polytechnic class project. I built a quick prototype with this topic,
        and people started asking me to take this idea further. After some quick
        user research and iteration, I revamped the product and launched an MVP
        in Jan 2021 which quickly gained traction amongst social workers and
        volunteers.
        <br />
        <br />
        That was when I realised: hey, there is a chance to build something
        really impactful with this!
      </>
    ),
    icon: <WbIncandescentIcon style={{ marginRight: 8 }} />,
  },
  {
    name: 'What this platform tries to solve',
    description: (
      <>
        Very serious thought was put in before investing effort to build Schemes
        SG. My initial landscape scans and user research led me to realise:
        <br />
        <br />
        1. Social assistance listings are piecemeal and information is
        fragmented across multiple sites. There are several compilations, but
        they are often PDF files hidden deep within the file repositories of
        organisations' websites, so they may not be easy to find.
        <br />
        <br />
        2. Even if one can get their hands on a compilation, no one will Ctrl +
        F all of them to find different schemes given how complex and
        multifaceted social assistance is. The volume of information is just
        mind-boggling.
        <br />
        <br />
        3. The listings may not necessarily be updated. New versions are usually
        held in completely different links. These PDF listings also mean that
        social workers and volunteers have to depend on the original poster to
        issue a new version.
        <br />
        <br />
        4. There are actually some intuitive directories (e.g. SupportGoWhere
        has done a great job). But these are primarily government portals and
        may not include NGO or VWO schemes. Again, the power of the
        crowdsourcing could be useful here.
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
              Our vision is to empower social workers, volunteers, and in the
              long run even self-help users, to navigate and obtain relevant
              information on social assistance in Singapore quickly, easily and
              accurately. We tap on the power of crowdsourcing to keep
              information comprehensive and updated. We then leverage technology
              to make this information more navigable.
            </Typography>

            <div className='About-accordions'>
              {about.map((a, i) => (
                <Accordion
                  elevation={3}
                  expanded={expanded === i}
                  onChange={handleChange(i)}
                  key={a.name}
                  style={{ margin: '16px 0' }}>
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

import BrowserOnly from '@docusaurus/BrowserOnly'
import Link from '@docusaurus/Link'

import ContactMeBtn from '@site/src/components/ContactMeBtn'
import { isMobile } from '@site/src/utils'
import profile from '@site/static/img/profile.png'
import Layout from '@theme/Layout'
import clsx from 'clsx'


import styles from './styles.module.css'

type HomepageHeaderProps = {
  isMobileDevice: boolean
}

export default function Home(): JSX.Element {
  return (
    <BrowserOnly fallback={undefined}>
      {() => {
        const isMobileDevice: boolean = isMobile()
        return (
          <Layout
            title="Home"
            description="Description will go into a meta tag in <head />"
          >
            <HomepageHeader isMobileDevice={isMobileDevice} />
          </Layout>
        )
      }}
    </BrowserOnly>
  )
}

function HomepageHeader({ isMobileDevice }: HomepageHeaderProps): JSX.Element {

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroBannerBackground}></div>
      <div className={clsx(styles.heroTextContainer)}>

        <div className={styles.heroTextArea}>

          {/* About Me Card */}
          <div className={styles.aboutMeCard}>
            <div className={styles.avatarArea}>
            <Link
              className={clsx(styles.avatarArea)}
              to="/about"
            ><img
                src={profile}
                alt="Lucas"
              />
            </Link>

          </div>

            <p className={styles.aboutMeText}>
              Hi, I'm <strong>Lucas</strong>, an electronics engineer, roboticist, classical guitarist, and autistic individual. <br /><br />
              I'm also a <strong>master's student at the <a href="https://www.ualberta.ca/en/index.html">University of Alberta</a></strong>, where I focus my research on <strong>reinforcement learning</strong>. <br /><br />
              This is my personal notebook and second brain. Here, you'll find my thoughts on various topics, from reinforcement and machine learning to statistics and beyond.
            </p>


            {/* Go to Learning Button */}
            <div className={styles.heroTextAreaButton}>
              <Link
                className={clsx(
                  'button',
                  'button--secondary',
                  'button--sm',
                  styles.heroTextAreaButton
                )}
                to="/wiki"
              >
                {"Go to Wiki"}
              </Link>
            </div>
            <ContactMeBtn />
          </div>

        </div>

      </div>
    </header>
  )
}

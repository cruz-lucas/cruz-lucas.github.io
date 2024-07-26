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
        <div className={styles.heroTextArea}>
          <div className={styles.heroTextAreaButton}>
            <Link
              className={clsx(
                'button',
                'button--secondary',
                'button--sm',
                styles.heroTextAreaButton
              )}
              to="/learning"
            >
              {"Go to Learning"}
            </Link>
          </div>
        </div>
       <ContactMeBtn/>
      </div>
    </header>
  )
}

import BrowserOnly from '@docusaurus/BrowserOnly'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  contactMeData,
} from '@site/src/data'
import { isMobile, setClipBoardText } from '@site/src/utils'
import profile from '@site/static/img/profile.png'
import GitHubIcon from '@site/src/components/Icons/GitHubIcon';
import MailIcon from '@site/src/components/Icons/MailIcon';
import LinkedInIcon from '@site/src/components/Icons/LinkedInIcon';
import TwitterIcon from '@site/src/components/Icons/TwitterIcon';
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React, { useState } from 'react'
import Notification from '@site/src/components/Notification';

import styles from './styles.module.css'

type HomepageHeaderProps = {
  isMobileDevice: boolean
}

type ContactMeBtnProps = {
  readonly title?: string
  readonly Icon: React.ComponentType;
  link?: string
  isCopyBtn?: boolean
  copySuccess?: () => void
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
  const { siteConfig } = useDocusaurusContext()
  const [show, setShow] = useState<boolean>(false)

  const copySuccess = (): void => {
    setShow(true)
    if (!show) {
      setTimeout(() => {
        setShow(false)
      }, 4000)
    }
  }

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx(styles.heroTextContainer)}>
        {!isMobileDevice && (
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
        )}
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
        <div className={styles.navLinkIconArea}>
          <ContactMeBtn
            title={contactMeData.github}
            Icon={GitHubIcon}
            link={contactMeData.githubLink}
          />
          <ContactMeBtn
            title={contactMeData.linkedin}
            Icon={LinkedInIcon}
            link={contactMeData.linkedinLink}
          />
          <ContactMeBtn
            title={contactMeData.twitter}
            Icon={TwitterIcon}
            link={contactMeData.twitterLink}
          />
          <ContactMeBtn
            title={contactMeData.mail}
            Icon={MailIcon}
            link={contactMeData.mailAddress}
            isCopyBtn
            copySuccess={copySuccess}
          />
        </div>
      </div>
      <Notification show={show} message="Email successfully copied to clipboard!" />
    </header>
  )
}

function ContactMeBtn({
  title,
  Icon,
  link,
  isCopyBtn = false,
  copySuccess,
}: ContactMeBtnProps): JSX.Element {
  if (isCopyBtn && typeof link !== 'undefined') {
    return (
      <div
        className={styles.navLink}
        onClick={() => {
          setClipBoardText(link);
          if (copySuccess) {
            copySuccess();
          }
        }}
      >
        <div className={styles.imageWrapper}>
          <Icon title={title} />
        </div>
      </div>
    );
  }
  return (
    <Link
      className={styles.navLink}
      to={link}
      href="_blank"
    >
      <div className={styles.imageWrapper}>
        <Icon title={title} />
      </div>
    </Link>
  );
}
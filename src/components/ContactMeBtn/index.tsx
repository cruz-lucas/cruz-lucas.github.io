import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import {
    contactMeData,
  } from '@site/src/data'
import { setClipBoardText } from '@site/src/utils'
import Notification from '@site/src/components/Notification';

import GitHubIcon from '@site/src/components/Icons/GitHubIcon';
import MailIcon from '@site/src/components/Icons/MailIcon';
import LinkedInIcon from '@site/src/components/Icons/LinkedInIcon';
import TwitterIcon from '@site/src/components/Icons/TwitterIcon';

import styles from './styles.module.css'


type ContactMeBtnProps = {
    readonly title?: string
    readonly Icon: React.ComponentType;
    link?: string
    isCopyBtn?: boolean
    copySuccess?: () => void
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

function ContactMe({ }): JSX.Element {
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
        <Notification show={show} message="Email successfully copied to clipboard!" />
        </div>
        
    );
}

export default ContactMe;

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: '📦 CodeSandbox',
    url: 'https://docusaurus.new/codesandbox',
    urlTS: 'https://docusaurus.new/codesandbox-ts',
    description: (
      <Translate id="playground.codesandbox.description">
        CodeSandbox is an online code editor and development environment that
        allows developers to create, share and collaborate on web development
        projects in a browser-based environment
      </Translate>
    ),
  },
  {
    name: '⚡ StackBlitz 🆕',
    url: 'https://docusaurus.new/stackblitz',
    urlTS: 'https://docusaurus.new/stackblitz-ts',
    description: (
      <Translate
        id="playground.stackblitz.description"
        values={{
          webContainersLink: (
            <Link href="https://blog.stackblitz.com/posts/introducing-webcontainers/">
              WebContainers
            </Link>
          ),
        }}>
        {
          'StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser.'
        }
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  url: string;
  urlTS: string;
  description: JSX.Element;
}

function PlaygroundCard({name, url, urlTS, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div style={{textAlign: 'center'}}>
            <b>
              <Translate id="playground.tryItButton">Try it now!</Translate>
            </b>
          </div>
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              JavaScript
            </Link>
            <Link className="button button--secondary" to={urlTS}>
              TypeScript
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
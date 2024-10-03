import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Innovative Cloud Platform',
    imgUrl: 'https://www.breezeware.net/assets/img/Customer_Experience.png', // Replace with your HTTPS image URL
    description: (
      <>
        Dynamo, our open-source platform, simplifies cloud-native app development through a collection of reusable building blocks, enabling developers to focus on innovation and business growth.
      </>
    ),
  },
  {
    title: 'Empathy-Driven Solutions',
    imgUrl: 'https://www.breezeware.net/assets/img/Startup_Acceleration.png', // Replace with your HTTPS image URL
    description: (
      <>
        At Breezeware, empathy is the core of our philosophy. We build trust and relationships by understanding people's motivations and experiences, empowering us to create meaningful solutions that challenge the status quo.
      </>
    ),
  },
 
  {
    title: 'Agile and Sustainable Growth',
    imgUrl: 'https://www.breezeware.net/assets/img/Platform.png', // Replace with your HTTPS image URL
    description: (
      <>
        We prioritize agile methodologies and sustainability, fostering a resilient and adaptable environment that ensures long-term impact for our clients and community.
      </>
    ),
  },
];

function Feature({ imgUrl, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureImg} alt={title} role="img" /> {/* Use img tag with HTTPS URL */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

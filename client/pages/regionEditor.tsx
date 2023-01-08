import Head from 'next/head';
import styles from '../styles/Home.module.css';
import RegionList from '../components/regionList';
import { getAllRegions } from '../services/region.services';

interface Region {
  id: String,
  name: String
}

interface RegionEditorProps {
  regions: Region[];
}

export default function RegionEditor(props: RegionEditorProps) {
  const { regions = [] } = props;
  return (
    <>
      <Head>
        <title>Backpacking Trip Planner</title>
        <meta name="description" content="Backpacking Trip Planner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>region list</div>
        <RegionList regions={regions} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const allRegions = await getAllRegions();
  return { props: { ...allRegions } };
};

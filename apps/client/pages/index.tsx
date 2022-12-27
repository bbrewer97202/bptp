import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import GetServerSideProps from 'next';
// import graphQLQuery from '../services/graphql.services';
// import RegionList from '../components/regionList';


interface HomeProps {
  hello: string
}

export default function Home(props:HomeProps) {
  console.log('home props', props.hello);
  return (
    <>
      <Head>
        <title>Backpacking Trip Planner</title>
        <meta name="description" content="Backpacking Trip Planner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>hello: {props.hello}</div>
      </main>
    </>
  )
}


// // export const getServerSideProps: GetServerSideProps = async () => {
//   export const getServerSideProps = async () => {
//   // const res = await fetch(`${process.env.SERVER_URL}/heartbeat`)
//   // const data = await res.json();
//   // console.log('=== loaded data', data);
//   const query = `
//     query {
//       regions {
//         name
//         id
//       }
//     }
//   `;
//   const response = await graphQLQuery.graphQLQuery({ query })
//   console.log('.... front end response', response);
//   return { props: { hello: 'there '} }
// }
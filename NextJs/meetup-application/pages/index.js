import { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    address: "234 Street",
    description: "meeting 1",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>This is a title</title>
        <meta name="description" content="this is a description" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// data fetching to server side during build process
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;

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
  return <MeetupList meetups={props.meetups} />;
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

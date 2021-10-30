import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image=""
      title="First"
      address="234 Street"
      description="First meet"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "",
        title: "First",
        address: "234 Street",
        description: "First meet",
      },
    },
  };
}

export default MeetupDetails;

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
        address: '234 Street',
        description: 'meeting 1'
    }
];

function HomePage(){
    return ( 
        <MeetupList meetups={DUMMY_MEETUPS} />
    );
}

export default HomePage;
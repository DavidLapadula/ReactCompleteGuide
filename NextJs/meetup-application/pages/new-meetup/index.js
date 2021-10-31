import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    const router = useRouter();

    async function addMeetupHandler(data) {
        const reponse = await fetch('/api/new-meeting',, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = reponse.json();

        router.push('/');
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}

export default NewMeetupPage;
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 1, author: "John", text: "Book 1"},
    {id: 2, author: "Jane", text: "Book 2"}
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;
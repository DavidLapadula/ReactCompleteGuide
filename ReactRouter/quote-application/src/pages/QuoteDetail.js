import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 1, author: "John", text: "Book 1"},
    {id: 2, author: "Jane", text: "Book 2"}
];


const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES[0];

    if (!quote) {
        return <p>No Quote Found</p>
    }
    
    return (
        <Fragment>
           <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;
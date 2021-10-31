import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
    return (
      <Fragment>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href="news/1">
              1
            </Link>
          </li>
          <li>
            <Link>
              2
            </Link>
          </li>
          <li>
            <Link>
              3
            </Link>
          </li>
        </ul>
      </Fragment>
    ); 
  }
  
  export default NewsPage;
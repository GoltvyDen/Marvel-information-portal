import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Error. Page not found"
                />
                <title>Page not found</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '30px', 'color': '#9f0013'}}>Apparently this page belonged to the unlucky half</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'textDecoration': 'underline'}} to='/'>Back to the main page</Link>
        </div>
    )
}

export default Page404;
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps! page not found</h2>
            <Link to={'/'}>Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
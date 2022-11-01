import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Spinner from "../components/spinner/Spinner";

const setListContent = (process, Component, data) => {
    switch (process) {
        case 'waiting' :
            return <Spinner/>;
        case 'loading' :
            return data ? <Component/> : <Spinner/>;
        case 'confirmed' :
            return <Component/>;
        case 'error' :
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected procces state');        
        }
}

export default setListContent;
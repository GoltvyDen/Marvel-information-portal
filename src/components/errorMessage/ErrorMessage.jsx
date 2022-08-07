import gif from './error.gif'

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', height: '260px', objectFit: 'contain', margin: '0 auto'}}src={gif} alt='Error (gif with dancing Groot)' />
    )
}

export default ErrorMessage
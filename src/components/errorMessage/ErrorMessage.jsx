import gif from './error.gif'

const ErrorMessage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center', color: '#9f0013'}}>Something went wrong</h1>
            <img style={{display: 'block', height: '180px', weigth: '180px', objectFit: 'contain', margin: '0 auto'}}src={gif} alt='Error (gif with dancing Groot)' />
        </div>
    )
}

export default ErrorMessage
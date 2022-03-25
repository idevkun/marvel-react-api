import img from './error.gif'

const ErrorMessage = () => {
    return (
        <img alt='Error image' style={{ display: 'block', width: "250px", height: "250px", objectFit: "contain", margin: "0 auto" }} src={img} />
    )
}
export default ErrorMessage;
//  <img src={process.env.PUBLIC_URL + '/error.gif'} />
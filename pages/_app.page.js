import '../styles/global.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='container mx-auto px-5 pb-5'>
      { <Component {...pageProps} /> }
    </div>
  )
}

export default MyApp

import Footer from "./Footer"
import Header from "./Header"

// eslint-disable-next-line react/prop-types
const Common = ({children}) => {
  return (
<>
<Header/>
    <div className="h-screen">{children}</div>
<Footer/>
</>
  )
}

export default Common
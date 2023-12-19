
import classes from '../styles/error.module.css'

import imgError from '../images/notFound.png'

function ErrorPage() {

    return (
        <div className='pageCtn' >
<div className={classes.mainCtn}>

<img src={imgError} alt="404" className={classes.img} />
<h1>Page not found</h1>
</div>
</div>
    )
}

export default ErrorPage
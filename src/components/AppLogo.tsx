import logoSrc from '@/assets/images/logo.svg';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';


interface Props {
    className: any;
}

const AppLogo: FunctionComponent<Props> = props => {

    const {className} = props;

    return (
        <Link to="/" className={className}>
            <img src={logoSrc} alt="Application Logo" className='w-full' />
        </Link>
    )
}

export default AppLogo;
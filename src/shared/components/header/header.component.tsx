import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    Container, 
    ArrowBack, 
    ContentLinkPages
} from './styles';
import { Logo } from '@components';

export const Header: React.FC = () => {
    const router = useRouter();

    function GoBackLink(){
        return (
            <>
            { router.pathname !== '/' && 
                <ArrowBack size={40} onClick={()=>router.back()}/> 
            }
            </>
        )
    }

    return (
        <Container>
            <GoBackLink />
            <ContentLinkPages>
                <Link href="/products">
                    <a>Products</a>
                </Link>
                
                <Link href="/prices">
                    <a>Prices</a>
                </Link>
                
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </ContentLinkPages>
            <Logo />
        </Container>
    );
}
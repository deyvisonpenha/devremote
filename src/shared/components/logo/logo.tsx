import { useEffect, useState } from 'react';

import { Container, Title, SubTitle} from './styles';
import { SwitchToggle } from '@components';
import { useTheme, themes } from '@context-theme';

export const Logo = () => {
    const [state, setState] = useState(false);
    const { setTheme } = useTheme();

    function handleChange(childrenState: boolean){
        setState(childrenState);
        
        if(childrenState) {
            setTheme(themes.light);
        }
        else{
            setTheme(themes.dark);
        }
    }

    return (
        <Container>
            <Title>DEV</Title>
            <SubTitle>
                <p>REM</p>
                <SwitchToggle switchSate={state} onChange={handleChange}/>
                <p>TE</p>
            </SubTitle>
        </Container>
    )
}
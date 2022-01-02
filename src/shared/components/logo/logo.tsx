import { useEffect, useState } from 'react';

import { Container, Title, SubTitle} from './styles';
import { SwitchToggle } from '@components';
import { useTheme, themes } from '@context-theme';

export const Logo = () => {
    const { theme, setTheme } = useTheme();
    
    const defaultState = theme.type === 'light' ? true : false;

    const [state, setState] = useState(defaultState);

    useEffect(()=>{
        if(state) {
            setTheme(themes.light);
        }
        else{
            setTheme(themes.dark);
        }
    },[setTheme, state]);

    function handleChange(childrenState: boolean){
        setState(childrenState);
    }

    return (
        <Container>
            <Title>DEV</Title>
            <SubTitle>
                <p>REM</p>
                <SwitchToggle switchSate={state || false} onChange={handleChange}/>
                <p>TE</p>
            </SubTitle>
        </Container>
    )
}
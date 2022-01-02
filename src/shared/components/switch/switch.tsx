import { 
  Container,
  SwitchToggleButton,
  Toggle,
} from './styles';

import { SwitchToggleProps } from './types';

export const SwitchToggle = ({switchSate, onChange}: SwitchToggleProps) => {
  return (
    <>
      <Container >
        <SwitchToggleButton 
          type= 'checkbox'
          onChange={event => onChange(event.currentTarget.checked)}
          checked={switchSate}
        />
        <Toggle />
      </Container>
    </>
  );
}

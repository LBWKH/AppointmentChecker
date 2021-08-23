import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Container, Wrapper, WrapperButton} from './styles'


const Login = () => {
  return (
    <Container>
      <Wrapper>
      <img src="" alt="App logo"/>
      <TextField label="E-mail" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <WrapperButton>
      <Button variant="contained" color="primary" size="large">Log In</Button>
      </WrapperButton>
      </Wrapper>
    </Container>

    )
}

export { Login }
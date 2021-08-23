import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    width: 200px;
  }

`
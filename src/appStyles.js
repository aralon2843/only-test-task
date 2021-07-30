import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #ffffff;
  overflow: hidden;
`

export const Content = styled.div`
  padding: 60px 40px 40px 40px;
  max-width: 768px;
  margin: 0 auto;
  min-height: 100vh;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
`
export const NoToDosTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
`

export const Button = styled.button`
  width: 86px;
  height: 27px;
  background-color: #f2f2f2;
  border-radius: 4px;
  border: none;
  outline: none;
`
export const AddButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border: none;
  outline: none;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background: url(${(props) => props.background}) center no-repeat;
  background-color: #ffffff;
  cursor: pointer;
`

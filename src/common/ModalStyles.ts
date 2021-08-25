import styled from 'styled-components'

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 78vh;
  padding: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 40px 40px 0px 0px;
  background-color: #ffffff;
  animation: 0.5s slidein forwards;
  @keyframes slidein {
    0% {
      bottom: -100vh;
    }
    100% {
      bottom: 0;
    }
  }
`
export const Buttons = styled.div`
  margin-top: 39px;
  display: flex;
`

interface IButton {
  add?: boolean
  close?: boolean
}

export const Button = styled.button<IButton>`
  width: 137px;
  height: 40px;
  background-color: ${(props) => (props.add ? '#23A3FF' : '#F2F2F2')};
  color: ${(props) => (props.add ? '#ffffff' : '#4D4D4D')};
  border-radius: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  &:first-child {
    margin-right: 21px;
  }
`
interface ITextArea {
  height: number
  edit: boolean
}

export const TextArea = styled.textarea<ITextArea>`
  width: 295px;
  height: ${(props) => props.height}px;
  padding: ${(props) => (props.edit ? '12px' : '20px')} 20px;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  resize: none;
  color: #333333;
  &::placeholder {
    color: #999999;
  }
  box-sizing: border-box;
`
export const ErrorMessage = styled.p`
  line-height: 22px;
  color: #e85c5c;
  font-size: 14px;
`

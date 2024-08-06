import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  max-width: 100%;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

export const ModalTitle = styled.h2`
  margin: 0 0 20px;
`

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  > div {
    display: flex;
    gap: 8px;
  }
`

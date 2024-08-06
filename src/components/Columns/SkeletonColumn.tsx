import styled from 'styled-components'

const StyledSkeletonColumn = styled.div`
  background: #e0e0e0;
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #c0c0c0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`

const SkeletonColumn = () => {
  return <StyledSkeletonColumn />
}

export default SkeletonColumn

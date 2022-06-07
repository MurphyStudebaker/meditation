import styled from 'styled-components'

export default function ProgressBar ({ duration, minutesLeft, secondsLeft }) {
    return (
            <ProgressWrapper className="bg-gray-700">
                <Bar style={{ "--progress": `${(1 - (secondsLeft / (duration*60)))*100}%` }} className='bg-gray-900'/>
            </ProgressWrapper>
    )
}

const ProgressWrapper = styled.div`
  width: full; 
  height: 20px;
  position: relative;
`

const Bar = styled.div`
  height: 20px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  clip-path: polygon(
      0% 0%,
      var(--progress) 0%,
      var(--progress) 100%,
      0% 100%
  );
  transition: clip-path 1s linear;
`
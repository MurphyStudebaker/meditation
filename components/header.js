import MeditateModal from './modal.js'
import PreferencesModal from './preferences'
import styled from 'styled-components'
export default function Header ({ bell, setBell, ambience, setAmbience }) {
    return (
        <HeaderWrapper className="text-source-sans">
          <MeditateModal />
          <PreferencesModal bell={bell} setBell={setBell} ambience={ambience} setAmbience={setAmbience} />
      </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
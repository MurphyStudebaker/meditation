import MeditateModal from './modal.js'
import PreferencesModal from './preferences'
export default function Header ({ bell, setBell, ambience, setAmbience }) {
    return (
        <header className="relative text-source-sans flex flex-row justify-between min-w-full">
          <div>
          <MeditateModal />

          </div>
          <div>
          <PreferencesModal bell={bell} setBell={setBell} ambience={ambience} setAmbience={setAmbience} />

          </div>
      </header>
    )
}
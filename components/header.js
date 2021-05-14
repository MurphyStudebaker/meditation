import MeditateModal from './modal.js'
import PreferencesModal from './preferences'
export default function Header ({ bell, setBell }) {
    return (
        <header className="relative text-source-sans flex flex-row justify-between min-w-full">
          <div>
          <MeditateModal />

          </div>
          <div>
          <PreferencesModal bell={bell} setBell={setBell} />

          </div>
      </header>
    )
}
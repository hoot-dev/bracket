import Team from "./components/Team"

function App() {
  const upper = true;
  const left = true;
  const team = {
    college: 'Iowa',
    mascot: 'Hawkeyes',
    logo: 'https://storage.googleapis.com/hawkeyesports-com/2021/02/cf540990-logo.png'
  }
  return (
    <div>
      <Team upper={upper} left={left} team={team} />
    </div>
  )
}

export default App

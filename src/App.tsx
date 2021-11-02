const MembersProfile = {
  '6288018': {
    name: ['Thanapat', 'Jumnongrat'],
    img: 'Palm.jpg',
  },
  '6288030': {
    name: ['Sorawit', 'Ongsiriporn'],
    img: 'Pure.jpg',
  },
  '6288035': {
    name: ['Veerakit', 'Prasertpol'],
    img: 'Pete.jpg',
  },
  '6288087': {
    name: ['Supakarn', 'Laorattanakul'],
    img: 'Prompt.jpg',
  },
  '6288123': {
    name: ['Thanaboon', 'Sapmontree'],
    img: 'Time.jpg',
  },
}

const App = () => {
  return (
    <div className="from-[#F2652B] to-[#FCC355] bg-gradient-to-r min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10">
        <p className="font-h text-4xl sm:text-5xl md:text-6xl text-white">we are</p>
        <h1 className="font-h text-7xl sm:text-8xl md:text-9xl text-white font-bold">NAKAMA</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 max-w-screen-xl mx-10 gap-10">
        {Object.entries(MembersProfile).map(([id, profile]) => {
          return (
            <div key={id} className="flex flex-col items-center text-white">
              <img src={`members/${profile.img}`} alt={profile.name.join(' ')} className="rounded-full mb-5" />
              <p className="font-bold text-5xl md:text-4xl">{profile.name[0]}</p>
              <p className="text-3xl md:text-2xl xl:text-xl">{profile.name[1]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

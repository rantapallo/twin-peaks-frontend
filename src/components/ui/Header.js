import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="Twin Peaks" />
      </div>
    </div>
  )
}

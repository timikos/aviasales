import './Header.scss'

import logo from '../../static/logo.svg'

const Header = () => {
  return (
    <header className="header__container">
      <img alt="Logo" src={logo} />
      <div className="EMPTY" />
    </header>
  )
}

export default Header

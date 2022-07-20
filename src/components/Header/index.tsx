import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="">
          <NavLink to="/" title='Timer'>
            <Timer size={24}/>
          </NavLink>
        </a>
        <a href="">
          <NavLink to="/history" title='Histórico'>
            <Scroll size={24}/>
          </NavLink>
        </a>
      </nav>
    </HeaderContainer>
  )
}
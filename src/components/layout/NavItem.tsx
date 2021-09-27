import type { JSX } from 'solid-js'
import { tw } from 'twind'

import { NavLink } from '@rturnq/solid-router'

type Props = {
  title: string
  href: string
  icon?: JSX.Element
}

function NavItem(props: Props) {
  return (
    <NavLink
      className={tw`flex w-full items-center p-3 text-secondary transition-colors duration-150 hover:text-primary focus:text-primary focus:bg-light-gray focus:rounded-lg`}
      activeClass={tw`text-primary bg-light-gray rounded-lg`}
      href={props.href}
      end
    >
      <span className={tw``}>{props.icon && props.icon}</span>
      {props.title}
    </NavLink>
  )
}

export default NavItem

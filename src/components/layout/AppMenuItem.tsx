import { tw } from 'twind'

import { NavLink } from '@rturnq/solid-router'

type Props = {
  id: string
  image: string
  name: string
}

function AppMenuItem(props: Props) {
  const href = `/app/${props.id}`

  return (
    <NavLink
      class={tw`text-inactive flex py-2`}
      href={href}
      end
      activeClass={tw`text-black`}
    >
      <img class={tw`mr-3 h-7 w-7 rounded-full`} src={props.image} />
      <span>{props.name}</span>
    </NavLink>
  )
}

export default AppMenuItem

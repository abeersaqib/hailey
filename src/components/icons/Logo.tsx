import type { JSX } from 'solid-js'

type Props = {} & JSX.SvgSVGAttributes<SVGSVGElement>

function Logo(props: Props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="7" fill="#060607" />
      <path
        d="M13.25 14.2133C13.25 12.3713 13.4079 10.8274 13.868 9.76413C14.0921 9.24622 14.373 8.87853 14.71 8.63801C15.0409 8.40178 15.4791 8.25 16.0897 8.25H16.4487C17.7669 8.25 20.2438 8.94508 22.4103 10.1249C23.4828 10.709 24.4304 11.3863 25.1002 12.1097C25.7736 12.837 26.109 13.5463 26.109 14.2133V25.4021C26.109 28.8584 23.8881 31.3654 21.4744 31.3654H17.8846C15.4709 31.3654 13.25 28.8584 13.25 25.4021V14.2133Z"
        fill="#060607"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  )
}

export default Logo

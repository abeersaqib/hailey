type Props = {
  fill?: string
}

function ClockIcon(props: Props) {
  return (
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346627 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346627 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM8 1.14286C6.64379 1.14286 5.31803 1.54502 4.19038 2.2985C3.06273 3.05197 2.18383 4.12291 1.66483 5.37589C1.14583 6.62887 1.01003 8.00761 1.27462 9.33776C1.5392 10.6679 2.19228 11.8897 3.15127 12.8487C4.11026 13.8077 5.33209 14.4608 6.66224 14.7254C7.9924 14.99 9.37114 14.8542 10.6241 14.3352C11.8771 13.8162 12.948 12.9373 13.7015 11.8096C14.455 10.682 14.8571 9.35622 14.8571 8C14.8571 6.18138 14.1347 4.43723 12.8487 3.15127C11.5628 1.86531 9.81863 1.14286 8 1.14286Z" fill="#727F8B"/>
<path d="M10.295 11L7.5 8.205V3.5H8.5V7.79L11 10.295L10.295 11Z" 
fill={props.fill || 'currentColor'}
/>
</svg>

  )
}

export default ClockIcon

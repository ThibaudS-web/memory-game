interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick: (arg?: string) => void
  children: string
}

const Button = ({ handleClick, children, ...props }: ButtonProps) => {

  return (
    <button className={props.className} onClick={() => handleClick()}>{children}</button>
  )
}

export default Button
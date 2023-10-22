interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void
  children: string
}

const Button = ({ handleClick, children, ...props }: ButtonProps) => {

  return (
    <button onClick={handleClick} className={props.className}>{children}</button>
  )
}

export default Button
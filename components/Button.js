const MyButton = ({
  label = '',
  disabled = false,
  onClick = () => null
}) => {
  return (
    <button
      onClick={disabled ? () => null : onClick}
      className={`w-auto flex flex-0 bg-blue-500 px-4 py-0.5 rounded-md text-white ${disabled ? 'opacity-30' : ''}`}
    >
      <span>{label}</span>
    </button>
  )
}

export default MyButton

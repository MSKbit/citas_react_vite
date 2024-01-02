const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 text-white uppercase p-3 text-center font-bold mb-3 rounded-md'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error
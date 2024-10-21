
function ErrorMsg({children}: {children: React.ReactNode}) {
  return (
    <p className="text-center my-4 text-red-600  ">{children}</p>
  )
}

export default ErrorMsg
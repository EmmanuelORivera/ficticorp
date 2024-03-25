const FormWrapper = ({
  children,
  handleSubmit,
}: {
  children: React.ReactNode
  handleSubmit: () => React.FormEventHandler<HTMLFormElement>
}) => {
  return (
    <form
      onSubmit={handleSubmit()}
      className="max-w-xl mx-auto border p-4 rounded"
    >
      {children}
    </form>
  )
}

export default FormWrapper

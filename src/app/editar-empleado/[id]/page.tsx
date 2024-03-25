import EditEmployeeForm from '@/components/EditEmployeeForm/EditEmployeeForm'

const page = ({ params }: { params: { id: string } }) => {
  return <EditEmployeeForm id={params.id}></EditEmployeeForm>
}

export default page

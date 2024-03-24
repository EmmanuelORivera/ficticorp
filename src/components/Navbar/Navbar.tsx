import { ModeToggle } from '../ModeToggle/ModeToggle'
import { Button } from '../ui/button'
import { PersonIcon } from '@radix-ui/react-icons'

const Navbar = () => {
  return (
    <nav className="py-4 flex justify-between items-center">
      <p className="text-lg font-medium">FictiCorp</p>
      <div className="flex justify-center items-center gap-4">
        <Button>
          <PersonIcon height={14} className="mr-4" />
          Nuevo Empleado
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar

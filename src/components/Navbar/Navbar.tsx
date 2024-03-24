import { ModeToggle } from '../ModeToggle/ModeToggle'

const Navbar = () => {
  return (
    <nav className="py-4 flex justify-between items-center">
      <p className="text-lg font-medium">FictiCorp</p>
      <ModeToggle />
    </nav>
  )
}

export default Navbar

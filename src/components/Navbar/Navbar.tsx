import { ModeToggle } from '../ModeToggle/ModeToggle'

const Navbar = () => {
  return (
    <nav className="pt-4 pb-6 flex justify-between items-center">
      <p className="text-lg font-medium">
        <a href="/">FictiCorp</a>
      </p>
      <div className="flex justify-center items-center gap-4">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar

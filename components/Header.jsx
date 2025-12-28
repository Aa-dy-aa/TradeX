import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/icons/Logo.svg"
            alt="TradeX"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-white font-bold text-lg tracking-wide">
            TradeX
          </span>
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
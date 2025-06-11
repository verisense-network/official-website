import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/verisense-logo.svg" alt="Verisense" width={200} height={60} />
    </Link>
  )
}

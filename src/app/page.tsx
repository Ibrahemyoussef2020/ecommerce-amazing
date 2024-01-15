import { Bannar, Shopping } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="min-h-screen">
      <Bannar />
      <Shopping />
    </main>
  )
}

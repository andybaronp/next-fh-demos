import Link from 'next/link'
import MainLayout from '../components/layout/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1 className='title'>
        Ir a <Link href='/about'>About!</Link>
      </h1>

      <p className='description'>
        Get started by editing <code className='code'>pages/index.js</code>
      </p>
    </MainLayout>
  )
}

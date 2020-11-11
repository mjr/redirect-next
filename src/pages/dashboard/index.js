import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useUser = () => ({ user: null, loading: false })

export default function Dashboard() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      const nextUrl = router.pathname ? `?next=${router.pathname}` : ''
      router.push(`/login/${nextUrl}`)
    }
  }, [user, loading])

  return (
    <h1>Dashboard</h1>
  )
}
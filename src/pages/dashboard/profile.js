import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useUser = () => ({ user: { name: 'Manaia Junior' }, loading: false })

export default function DashboardProfile() {
  const { user, loading } = useUser()
  const router = useRouter()

  console.log(router.query)
  useEffect(() => {
    if (!(user || loading)) {
      const nextUrl = router.pathname ? `?next=${router.pathname}` : ''
      router.push(`/login/${nextUrl}`)
    }
  }, [user, loading])

  return (
    <h1>Profile</h1>
  )
}
import { useRouter } from 'next/router'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Login() {
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    await sleep(1200)

    const nextUrl = router.query.next ?? '/dashboard'
    router.push(nextUrl)
  }

  return (
    <>
      <h1>Login</h1>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Login To Continue
      </button>
    </>
  )
}
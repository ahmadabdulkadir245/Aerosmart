import { useRouter } from 'next/router'

function NoOrders() {
    const router = useRouter()
  return (
    <div className='capitalize mt-5'>
        no orders made.
        <button className="mt-2 w-full bg-yellow-400 text-white  p-3 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide "
                 onClick={() => router.push('/')}>
                continue shopping
              </button>
        
    </div>
  )
}

export default NoOrders
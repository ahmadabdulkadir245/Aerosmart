import Header from '../components/Header'
import Footer from '../components/Footer'
import AccountOptionsCard from '../components/AccountOptionsCard'

function Account() {
  return (
        <>
        <Header />
        <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            <AccountOptionsCard />
        </div>
    <Footer />
        </>
  )
}

export default Account
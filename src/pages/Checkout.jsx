import { useSelector } from 'react-redux'
import { CheckoutForm, SectionTitle, CartTotals } from '../components/index'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const loader = (store) => async () => {
  const user = store.getState().user.user

  if (!user) {
    toast.warn('You must be logged in to checkout')
    return redirect('/login')
  }
  return null
}

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal)
  if (cartTotal.length === 0) {
    return <SectionTitle text="Your cart is empty" />
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}
export default Checkout

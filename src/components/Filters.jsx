import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, order, shipping, price } = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        type="select company"
        label="company"
        name="company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />
      <FormSelect
        type="select category"
        label="category"
        name="category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />
      <FormSelect
        label="sort by"
        name="order"
        size="select-sm"
        list={['A-Z', 'Z-A', 'High', 'Low']}
        defaultValue={order}
      />
      <FormRange
        size="range-sm"
        name="price"
        label="select price"
        defaultValue={price}
      />
      <FormCheckbox
        size="checkbox-sm"
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />

      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}
export default Filters

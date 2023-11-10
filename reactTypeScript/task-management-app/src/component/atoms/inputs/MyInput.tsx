import { Input } from '@chakra-ui/react'
interface MyInput {
   placeholder?: string
   type?: string
}

function MyInput({ placeholder, type }: MyInput) {
   return <Input placeholder={placeholder} type={type} />
}

export default MyInput

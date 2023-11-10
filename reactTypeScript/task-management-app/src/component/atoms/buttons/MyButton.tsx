import { Button } from '@chakra-ui/react'

interface buttonProps {
   color: string
   title: string
   size?: string
}

function MyButton({ color, title }: buttonProps) {
   return <Button colorScheme={color}>{title}</Button>
}

export default MyButton

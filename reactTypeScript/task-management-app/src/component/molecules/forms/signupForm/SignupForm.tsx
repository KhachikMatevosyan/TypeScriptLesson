import { useState } from 'react'
import {
   Box,
   InputGroup,
   Input,
   InputRightElement,
   Button,
} from '@chakra-ui/react'
import MyInput from '../../../atoms/inputs/MyInput'
import MyButton from '../../../atoms/buttons/MyButton'

function SignupForm() {
   const [show, setShow] = useState(false)
   const handleClick = () => setShow(!show)
   return (
      <Box
         bg="#F7FAFC"
         w="100%"
         p={4}
         color="white"
         borderRadius="50px"
         m={10}
         alignItems="center"
      >
         <Box m={5} color={'black'}>
            <MyInput type="email" placeholder="Enter your email" />
         </Box>
         <Box m={5} color={'black'}>
            <MyInput type="text" placeholder="User Name" />
         </Box>
         <Box m={5} color={'black'}>
            <InputGroup size="md">
               <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
               />
               <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                     {show ? 'Hide' : 'Show'}
                  </Button>
               </InputRightElement>
            </InputGroup>
         </Box>
         <Box m={5} w={'200px'}>
            <MyButton title={'Sign up'} color={'purple'} />
         </Box>
      </Box>
   )
}

export default SignupForm

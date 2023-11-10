import { Link, Outlet } from 'react-router-dom'
import { Spacer, Box, Heading, ButtonGroup } from '@chakra-ui/react'
import MyButton from '../../atoms/buttons/MyButton'

function Header() {
   return (
      <>
         <Box
            bg="#FAF5FF"
            w="300%"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
         >
            <Box p="2">
               <Heading size="md">To Do</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap="4">
               <Link to="/login">
                  <MyButton title={'Log in'} color={'purple'} />
               </Link>
               <Link to="/signup">
                  <MyButton title={'Sing up'} color={'gray'} />
               </Link>
            </ButtonGroup>
         </Box>
         <Outlet />
      </>
   )
}

export default Header

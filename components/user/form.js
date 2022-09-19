
import { Box, Button, FormControl, FormLabel, Input, Text, Link } from '@chakra-ui/react'

const Form = ({ isLogin, errorMessage, onSubmit }) => {

    return (

        <Box
            as="form"
            onSubmit={onSubmit}
            width="100%"
            maxWidth="400px"
            margin="0 auto"
            padding="1rem"
            borderRadius="0.5rem"
            boxShadow="0 0 60px rgba(0,0,0,0.05)"
            backgroundColor="white"
        >
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="username" />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
            </FormControl>
            <FormControl id="submit">
                {isLogin ? (
                    <>
                        <Text>Don&apos;t have an account?&nbsp; 
                            <Link href="/signup">Sign up</Link>
                        </Text>
                        <Button type="submit">Login</Button>
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            <Text>Already have an account? Login</Text>
                        </Link>
                        <Button type="submit">Sign Up</Button>
                    </>
                )}
            </FormControl>
            {errorMessage
                && (
                    <Text color="red" marginTop="1rem">
                        {errorMessage
                        }
                    </Text>
                )}
        </Box>
    )
}

export default Form



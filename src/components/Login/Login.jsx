import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
const Login = () => {
  return (
    <VStack
      as="form"
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <FormControl>
        <FormLabel fontsize="lg">Username</FormLabel>
        <Input
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          size="lg"
        />
        <FormErrorMessage>Invalid username</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel fontsize="lg">Password</FormLabel>
        <Input
          name="Passwword"
          placeholder="Enter Password"
          autoComplete="off"
          size="lg"
        />
        <FormErrorMessage>Invalid password</FormErrorMessage>
      </FormControl>
      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          {" "}
          Log In
        </Button>
        <Button>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;

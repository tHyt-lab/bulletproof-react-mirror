import logo from "@/assets/logo.svg";
import { Head } from "@/components/Head";
import { Box, Button, Flex, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BrandGithub, Home } from "tabler-icons-react";

export const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <Head description="Welcome to bulletproof react" />
      <Flex sx={{ height: "100vh" }} align="center" justify="center">
        <Box sx={{ textAlign: "center" }}>
          <Title order={1} weight="bold">
            <span>Bulletproof React</span>
          </Title>
          <img src={logo} alt="react" />
          <p>Showcasing Best Practices For Building React Applications</p>
          <Flex direction="row" gap="md" justify="center" mt="xl">
            <Button
              variant="filled"
              leftIcon={<Home size="1.5rem" />}
              onClick={handleStart}
            >
              Get started
            </Button>
            <Button
              component="a"
              href="https://github.com/tHyt-lab/bulletproof-react-mirror"
              target="_blank"
              rel="noreferrer"
              variant="outline"
              leftIcon={<BrandGithub size="1.5rem" />}
            >
              Github repo
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

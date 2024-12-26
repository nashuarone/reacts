import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    Anchor,
    Box,
    Button,
    Center,
    Container,
    Group,
    Paper,
    Title,
} from "@mantine/core";
import { useAuth } from "../../context/AuthProvider";
import classes from "./Login.module.scss";

export function Login() {
  const auth = useAuth();
    const navigate = useNavigate();
    const Location = useLocation();

    const from = Location.state?.from || "/";

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get("username");
        auth.signin(String(username), () => {
            navigate(from, { replace: true });
        });
    };
    return (
        <Container size={460} my={30}>
            <Title className={classes.title} ta="center">
                Save your name
            </Title>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" name="username" />
                </label>
                <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <Group
                    justify="space-between"
                    mt="lg"
                    className={classes.controls}
                >
                    <Button type="submit" className={classes.control}>Login</Button>
                    <Anchor c="dimmed" size="sm" className={classes.control}>
                        <Center inline>
                            <Box ml={5}>
                                <Link to="/">Back to the Home page</Link>
                            </Box>
                        </Center>
                    </Anchor>
                </Group>
            </Paper>
            </form>
        </Container>
    );
}

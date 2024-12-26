import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, Text } from "@mantine/core";
import { CharacterProps } from "../../pages/types";
import { useGetOneElement } from "../../hooks/useGetOneElement";
import classes from "./Character.module.scss";

export function Character() {
    const { id } = useParams();

    const { loading, error, element } = useGetOneElement(
        "character",
        Number(id)
    );

    const { name, status, species, gender, image } = element as CharacterProps;

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : (
                <Card
                    withBorder
                    padding="xl"
                    radius="md"
                    className={classes.card}
                >
                    <Card.Section
                        h={140}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <Avatar
                        src={image}
                        size={80}
                        radius={80}
                        mx="auto"
                        mt={-30}
                        className={classes.avatar}
                    />
                    <Text ta="center" fz="lg" fw={500} mt="sm">
                        {name}
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                        Gender: {gender}
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                        Species: {species}
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                        Status: {status}
                    </Text>
                    <Button
                        fullWidth
                        radius="md"
                        mt="xl"
                        size="md"
                        variant="default"
                    >
                        <Link to="/categories/characters">
                            Go back to characters
                        </Link>
                    </Button>
                </Card>
            )}
        </>
    );
}

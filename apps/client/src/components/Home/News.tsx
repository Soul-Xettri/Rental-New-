import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
  SimpleGrid,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  description: {
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
    textAlign: "center",
  },
}));

// interface BadgeCardProps {
//   image: string;
//   title: string;
//   country: string;
//   description: string;
//   badges: {
//     emoji: string;
//     label: string;
//   }[];
// }
const data = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "Sunny weather" },
    { emoji: "🦓", label: "Onsite zoo" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};

export function News() {
  const { classes, theme } = useStyles();
  let button = " buttonDark";

  if (document.body.style.backgroundColor === "white") {
    button = "buttonWhite";
  }
  const features = data.badges.map((badge) => (
    <Badge
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title
          order={1}
          sx={(theme) => ({
            color: theme.colorScheme === "dark" ? theme.white : "#002247",
            textAlign: "center",
            fontWeight: 600,
            [theme.fn.smallerThan("md")]: {
              maxWidth: "100%",
              fontSize: rem(34),
              lineHeight: 1.15,
            },
          })}
          display={"flex"}
          className="line"
        >
          Lastest News
        </Title>
        <Text className={classes.description} mt={10} mb={30}>
          Find Of The Most Popular Real Estate Company All Around The World.
        </Text>
      </div>
      <SimpleGrid
        cols={3}
        spacing="28px"
        verticalSpacing="50px"
        breakpoints={[
          {
            maxWidth: "70rem",
            cols: 2,
            spacing: "60px",
            verticalSpacing: "60px",
          },
          { maxWidth: "48rem", cols: 2, spacing: "50px" },
          { maxWidth: "36rem", cols: 1, spacing: "sm" },
        ]}
        style={{
          justifyItems: "center",
        }}
      >
        <Card withBorder radius="0" p="md" className={classes.card}>
          <Card.Section>
            <Image src={data.image} alt={data.title} height={180} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group position="apart">
              <Text fz="lg" fw={500}>
                {data.title}
              </Text>
              <Badge size="sm" radius={0}>
                {data.country}
              </Badge>
            </Group>
            <Text fz="sm" mt="xs">
              {data.description}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect for you, if you enjoy
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </Card.Section>

          <Group mt="xs">
            <Button className={`${button}`} radius="0" style={{ flex: 1 }}>
              Show details
            </Button>
            <ActionIcon variant="default" radius="0" size={36}>
              <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card>
        <Card withBorder radius="0" p="md" className={classes.card}>
          <Card.Section>
            <Image src={data.image} alt={data.title} height={180} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group position="apart">
              <Text fz="lg" fw={500}>
                {data.title}
              </Text>
              <Badge size="sm" radius={0}>
                {data.country}
              </Badge>
            </Group>
            <Text fz="sm" mt="xs">
              {data.description}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect for you, if you enjoy
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </Card.Section>

          <Group mt="xs">
            <Button className={` ${button}`} radius="0" style={{ flex: 1 }}>
              Show details
            </Button>
            <ActionIcon variant="default" radius="0" size={36}>
              <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card>
        <Card withBorder radius="0" p="md" className={classes.card}>
          <Card.Section>
            <Image src={data.image} alt={data.title} height={180} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group position="apart">
              <Text fz="lg" fw={500}>
                {data.title}
              </Text>
              <Badge size="sm" radius={0}>
                {data.country}
              </Badge>
            </Group>
            <Text fz="sm" mt="xs">
              {data.description}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect for you, if you enjoy
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </Card.Section>

          <Group mt="xs">
            <Button className={` ${button}`} radius="0" style={{ flex: 1 }}>
              Show details
            </Button>
            <ActionIcon variant="default" radius="0" size={36}>
              <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Card>
      </SimpleGrid>
    </>
  );
}

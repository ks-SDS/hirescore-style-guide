import {
  AppShell,
  Center,
  NavLink,
  Title,
  Text,
  Stack,
  Container,
  Table,
  Badge,
  SimpleGrid,
  Button,
  Loader,
  TextInput,
  Modal,
  Accordion,
  ActionIcon,
  Space,
  Divider,
  Alert,
  Notification,
  Input,
  Pagination,
  Indicator,
  Group,
  Image,
} from "@mantine/core";
import { useState } from "react";
import textInputExample from './assets/textInputExample.png'
import {
  IconTrash,
  IconAffiliate,
  IconChartAreaLine,
  IconMapPin,
  IconHelpCircle,
  IconInfoCircle,
  IconBell,
  IconFilter,
  IconArrowBigLeft,
  IconArrowDownBar,
  IconChevronDown,
  IconSettings,
  IconAlarm,
  IconAlertTriangle,
  IconX,
  IconLock,
  IconSearch,
  IconAdjustments,
  IconArchive,
  IconBriefcase,
  IconChevronRight,
  IconChevronsLeft,
  IconCopy,
  IconDotsVertical,
  IconEye,
  IconLink,
  IconMail,
  IconMailForward,
  IconPackages,
  IconPhoto,
  IconRefresh,
  IconReportAnalytics,
  IconSelector,
  IconStar,
  IconUserCircle,
  IconUsers,
  IconUsersGroup,
  IconVocabulary,
} from "@tabler/icons-react";

const sections = [
  { label: "Colors" },
  { label: "Icons" },
  {
    label: "Components",
    children: [
      "Action Icon",
      "Badge",
      "Buttons",
      "Text Input",
      "Loader",
      "Modal",
    ],
  },
];

const colorData = [
  {
    purpose: "Primary Actions",
    colorName: "blue",
    usage: "Toggles, links, primary buttons, selected states",
    example: "Filter options on a table, a highlighted/active menu item",
  },
  {
    purpose: "Success/Completion",
    colorName: "teal",
    usage: "Confirmations, success messages, positive indicators",
    example: "Saving edits to an assessment",
  },
  {
    purpose: "Caution",
    colorName: "orange",
    usage: "Caution states, non-critical alerts",
    example: "Clearing module data/scores from a Portal cycle",
  },
  {
    purpose: "Error/Destruction",
    colorName: "red",
    usage: "Destructive actions, validation errors, critical alerts",
    example: "Deleting button a module from a Portal cycle",
  },
  {
    purpose: "Neutral/Informational",
    colorName: "gray",
    usage: "Disabled states, canceling actions, borders and text",
    example: '"Cancel" button to dismiss or back out of an action',
  },
];

const swatchData = [
  {
    name: "blue",
    description: (
      <>
        <Text>
          Use HireScore blue as the dominant color for primary actions,
          active/selected states, and important information.
        </Text>
        <Text>
          Blue does not carry a specific semantic meaning and it should not be
          used in situations where a semantic color is more appropriate.
        </Text>
      </>
    ),
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! This button initiates an action">
          <Button variant="filled" color="blue">
            Add Filter
          </Button>
        </Example>
        <Example
          type="dont"
          caption="No! Buttons that complete actions should use teal"
        >
          <Button variant="filled" color="blue">
            Save Assessment
          </Button>
        </Example>
        <Example
          type="do"
          caption="Yes! Blue indicates the current active page"
        >
          <Pagination total={5}></Pagination>
        </Example>
        <Example
          type="dont"
          caption="No! Unread notifications should be indicated in Red"
        >
          <Indicator color="blue">
            <IconBell size={25} color="gray" />
          </Indicator>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: "teal",
    description:
      'Use teal to signal the successful completion of a processes- eg, save buttons and confirmation messages. Teal can also indicate "good" metrics such as high test scores.',
    examples: (
      <ExampleSection cols={2}>
        <Example
          type="do"
          caption="Yes! Teal indicates success or completion of a process"
        >
          <Button variant="filled" color="teal">
            Save Assessment
          </Button>
        </Example>
        <Example type="dont" caption="No! Use Blue to initiate actions">
          <Button variant="filled" color="teal">
            Create Assessment
          </Button>
        </Example>
        <Example type="do" caption="Yes! Use Teal for confirmation messages">
          <Notification color="teal" title="Successfully Saved Changes">
            Your changes have been saved.
          </Notification>
        </Example>
        <Example
          type="dont"
          caption="No! Teal should not be used for poor/negative assessment scores"
        >
          <Text
            fw={700}
            c="teal"
            style={{
              backgroundColor: "var(--mantine-color-teal-0)",
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            -50
          </Text>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: "orange",
    description:
      "Use orange for situations where the user should use caution, such as reversibly destructive actions (clearing/resetting scores, etc) or when a minor error has occurred.",
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Orange used to caution the user">
          <Text
            ta="center"
            fw={500}
            p="sm"
            style={{
              backgroundColor: "var(--mantine-color-yellow-1)",
              border: "1px solid var(--mantine-color-yellow-5)",
              borderRadius: 5,
              color: "var(--mantine-color-yellow-9)",
            }}
          >
            This section of the system is a work-in-progress and is not ready to
            be used for deliverables.
          </Text>
        </Example>
        <Example
          type="dont"
          caption="No! Orange should never be used for success messages"
        >
          <Notification color="orange" title="Message Sent">
            Successfully sent emails to applicants
          </Notification>
        </Example>
        <Example type="do" caption="Yes! Orange used to indicate bugs/errors">
          <Button type="filled" color="orange">
            View Detected Issues
          </Button>
        </Example>
        <Example
          type="dont"
          caption="No! Orange should only be used for reversibly destructive actions like clearing"
        >
          <Button
            type="filled"
            color="orange"
            leftSection={<IconTrash size={16} />}
          >
            Delete
          </Button>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: "red",
    description:
      'Use red for alerts critical warnings- eg, to indicate an unread notification, to confirm irreversibly destructive actions, or to tell the user about a major error. Red can also indicate "bad" metrics such as failing test scores and blocked actions',
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Red indicates destruction or deletion">
          <Button
            variant="filled"
            color="red"
            leftSection={<IconTrash size={16} />}
          >
            Delete Module
          </Button>
        </Example>
        <Example
          type="dont"
          caption="No! Reversibly clearing scores should use orange"
        >
          <Button
            variant="filled"
            color="red"
            leftSection={<IconAlertTriangle size={16} />}
          >
            Clear Scores
          </Button>
        </Example>
        <Example
          type="do"
          caption="Yes! Red indicates a blocked/'illegal' action"
        >
          <Notification color="red" title="Action not available">
            This action is not permitted for demo cycles
          </Notification>
        </Example>
        <Example type="dont" caption="No! Search filters should use blue">
          <Badge
            color="red"
            variant="outline"
            leftSection={<IconLock size={16} />}
            rightSection={<IconX size={16} />}
          >
            Status: Inactive
          </Badge>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: "gray",
    description:
      "Use gray for user actions like canceling or backing out of a process. Use gray on interactible elements to indicate that they are disabled or unavailable. Other than these two cases, gray is neutral and should be used for most text and formatting elements (borders, etc).",
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Gray indicates canceling an action">
          <Button variant="filled" color="gray">
            Cancel
          </Button>
        </Example>
        <Example
          type="dont"
          caption="No! Gray cancels actions-- use teal for save buttons"
        >
          <Button variant="filled" color="gray">
            Save Assessment
          </Button>
        </Example>
        <Example
          type="do"
          caption="Yes! Gray can be used for neutral purposes, like input labels/placeholders"
        >
          <TextInput
            leftSection={<IconSearch size={16} />}
            placeholder="Search Applicants"
          ></TextInput>
        </Example>
        <Example type="dont" caption="No! Loaders should always be blue">
          <Loader color="gray"></Loader>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: "other colors",
    description: (
      <Stack gap="xs">
        <Text>
          The colors{" "}
          {[
            "Pink",
            "Grape",
            "Violet",
            "Indigo",
            "Cyan",
            "Green",
            "Lime",
            "Yellow",
          ]
            .map((c) => (
              <Text
                key={c}
                component="span"
                style={{
                  backgroundColor: `var(--mantine-color-${c.toLowerCase()}-6)`,
                  color: "#fff",
                  padding: "1px 5px",
                  borderRadius: 3,
                }}
              >
                {c}
              </Text>
            ))
            .reduce(
              (acc, el, i) =>
                i === 0 ? [el] : [...acc, i === 7 ? ", and " : ", ", el],
              [],
            )}{" "}
          are not assigned any particular semantic meaning and should not be
          used for any purpose already covered by blue, teal, orange, red, or
          gray.
        </Text>
        <Text>
          These colors may be used for data visualization, custom tags, and
          other cases where colors are arbitrary.
        </Text>
      </Stack>
    ),
  },
];

const iconData = [
  {
    icon: <IconAdjustments size={40} />,
    name: "adjustments",
    useCase: "Advanced settings / configuration options",
  },
  {
    icon: <IconAffiliate size={40} />,
    name: "affiliate",
    useCase: "Integrations/connections to other websites and systems",
  },
  {
    icon: <IconArchive size={40} />,
    name: "archive",
    useCase: "Archive an item",
  },
  {
    icon: <IconBell size={40} />,
    name: "bell",
    useCase: "Account notifications",
  },
  {
    icon: <IconBriefcase size={40} />,
    name: "briefcase",
    useCase: "Hire section of the side menu",
  },
  {
    icon: <IconChartAreaLine size={40} />,
    name: "chart-area-line",
    useCase: "Cycle or organization-level analytics/stats",
  },
  {
    icon: <IconChevronDown size={40} />,
    name: "chevron-down",
    useCase: "Expand/collapse dropdowns",
  },
  {
    icon: <IconChevronRight size={40} />,
    name: "chevron-right",
    useCase: "Navigate forward",
  },
  {
    icon: <IconChevronsLeft size={40} />,
    name: "chevrons-left",
    useCase: "Collapse a panel or navigate back multiple steps",
  },
  {
    icon: <IconCopy size={40} />,
    name: "copy",
    useCase: "Copy value(s) to clipboard",
  },
  {
    icon: <IconDotsVertical size={40} />,
    name: "dots-vertical",
    useCase: "More options/context menu",
  },
  { icon: <IconEye size={40} />, name: "eye", useCase: "Show/hide module" },
  {
    icon: <IconFilter size={40} />,
    name: "filter",
    useCase: "Table filter settings",
  },
  {
    icon: <IconHelpCircle size={40} />,
    name: "help-circle",
    useCase:
      "Reserved for the Help button that lives in the top bar menu next to account info",
  },
  {
    icon: <IconInfoCircle size={40} />,
    name: "info-circle",
    useCase: "Information and explanatory text",
  },
  { icon: <IconLink size={40} />, name: "link", useCase: "Hyperlink" },
  {
    icon: <IconLock size={40} />,
    name: "lock",
    useCase: "Locked/restricted/ content",
  },
  { icon: <IconMail size={40} />, name: "mail", useCase: "Email/messaging" },
  {
    icon: <IconMailForward size={40} />,
    name: "mail-forward",
    useCase: "An email or message that has already been sent",
  },
  { icon: <IconMapPin size={40} />, name: "map-pin", useCase: "Location" },
  {
    icon: <IconPackages size={40} />,
    name: "packages",
    useCase: "Build/create/assemble",
  },
  {
    icon: <IconPhoto size={40} />,
    name: "photo",
    useCase: "Images and other media",
  },
  {
    icon: <IconRefresh size={40} />,
    name: "refresh",
    useCase: "Reset table to default",
  },
  {
    icon: <IconReportAnalytics size={40} />,
    name: "report-analytics",
    useCase: "Reports / data analytics",
  },
  { icon: <IconSearch size={40} />, name: "search", useCase: "Search" },
  {
    icon: <IconSelector size={40} />,
    name: "selector",
    useCase: "Sort/reorder or edit pagination settings",
  },
  {
    icon: <IconSettings size={40} />,
    name: "settings",
    useCase: "Settings / preferences",
  },
  { icon: <IconStar size={40} />, name: "star", useCase: "Favorite/highlight" },
  {
    icon: <IconTrash size={40} />,
    name: "trash",
    useCase: "Permanently delete",
  },
  {
    icon: <IconUserCircle size={40} />,
    name: "user-circle",
    useCase: "Individual user/profile",
  },
  {
    icon: <IconUsers size={40} />,
    name: "users",
    useCase: "Account roles/assume a user",
  },
  {
    icon: <IconUsersGroup size={40} />,
    name: "users-group",
    useCase: "Client organizations and organization groups",
  },
  {
    icon: <IconVocabulary size={40} />,
    name: "vocabulary",
    useCase: "Skillbuilder-- learning/reading/upskilling",
  },
];

function WIPBanner() {
  return (
    <Text
      ta="center"
      fw={600}
      p="sm"
      style={{
        backgroundColor: "var(--mantine-color-yellow-1)",
        border: "1px solid var(--mantine-color-yellow-5)",
        borderRadius: 5,
        color: "var(--mantine-color-yellow-9)",
      }}
    >
      ⚠ Work in progress — this page is currently under construction
    </Text>
  );
}

function ExampleSection({ cols = 2, children }) {
  return (
    <SimpleGrid cols={cols} spacing="sm">
      {children}
    </SimpleGrid>
  );
}

function Example({ type, caption, children }) {
  const borderColor = type === "do" ? "teal" : type === "dont" ? "red" : "gray";
  return (
    <Stack
      align="center"
      justify="center"
      h="100%"
      style={{
        border: `1px solid var(--mantine-color-${borderColor}-6)`,
        borderRadius: 5,
        padding: 16,
      }}
    >
      {children}
      {caption && (
        <Text size="sm" c="dimmed" mt={4} ta="center">
          {caption}
        </Text>
      )}
    </Stack>
  );
}

function App() {
  const [active, setActive] = useState("Colors");
  const [copied, setCopied] = useState(null);
  const [iconSearch, setIconSearch] = useState("");
  const [iconSortAsc, setIconSortAsc] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  function copyName(name) {
    const reactName =
      "Icon" +
      name
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("");
    navigator.clipboard.writeText(reactName);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <AppShell navbar={{ width: 200, breakpoint: "sm" }} padding="md">
      <AppShell.Navbar p="md">
        <Title order={4} mb="md">
          Style Guide
        </Title>
        {sections.map((section) =>
          section.children ? (
            <NavLink
              key={section.label}
              label={section.label}
              defaultOpened={section.children.includes(active)}
            >
              {section.children.map((child) => (
                <NavLink
                  key={child}
                  label={child}
                  active={active === child}
                  onClick={() => setActive(child)}
                />
              ))}
            </NavLink>
          ) : (
            <NavLink
              key={section.label}
              label={section.label}
              active={active === section.label}
              onClick={() => setActive(section.label)}
            />
          ),
        )}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size="md" py={40}>
          <Stack gap="xl">
            <Title order={1}>{active}</Title>
            {/* COLORS */}
            {active === "Colors" && (
              <Stack gap="lg">
                <Table withBorder striped highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Purpose</Table.Th>
                      <Table.Th>Color Name</Table.Th>
                      <Table.Th>Usage</Table.Th>
                      <Table.Th>Example</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {colorData.map((row) => (
                      <Table.Tr key={row.colorName}>
                        <Table.Td>{row.purpose}</Table.Td>
                        <Table.Td>{row.colorName}</Table.Td>
                        <Table.Td>{row.usage}</Table.Td>
                        <Table.Td>{row.example}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
                <Accordion
                  multiple
                  defaultValue={[
                    "blue",
                    "teal",
                    "orange",
                    "red",
                    "gray",
                    "other colors",
                  ]}
                >
                  {swatchData.map(({ name, description, examples }) => (
                    <Accordion.Item key={name} value={name}>
                      <Accordion.Control>
                        <Title order={3} tt="capitalize" c={name}>
                          {name}
                        </Title>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Stack gap="sm">
                          {description}
                          {examples}
                        </Stack>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                  <Accordion.Item value="other-colors"></Accordion.Item>
                </Accordion>
              </Stack>
            )}
            {/* BUTTONS */}
            {active === "Buttons" && (
              <Stack gap="lg">
                <Text>
                  Buttons are interactive elements that allow users to navigate
                  and perform actions on the site.
                </Text>
                <Accordion
                  multiple
                  defaultValue={[
                    "when-to-use",
                    "variants",
                    "labels",
                    "sections",
                  ]}
                >
                  <Accordion.Item value="variants">
                    <Accordion.Control>
                      <Title order={3}>Variants</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Buttons should generally use the filled variant by
                          default.
                        </Text>
                        <Text>
                          If there are multiple buttons on-screen that use the
                          same{" "}
                          <Text
                            component="span"
                            c="blue"
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => setActive("Colors")}
                          >
                            color
                          </Text>
                          , items lower on the action hierarchy may be
                          differentiated by using the light variant.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Buttons use the filled variant"
                          >
                            <div style={{ display: "flex", gap: 8 }}>
                              <Button variant="filled" color="teal">
                                Save
                              </Button>
                              <Button variant="filled" color="gray">
                                Cancel
                              </Button>
                              <Button variant="filled" color="red">
                                Delete
                              </Button>
                            </div>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Unnecessary use of the light variant"
                          >
                            <div style={{ display: "flex", gap: 8 }}>
                              <Button variant="light" color="teal">
                                Save
                              </Button>
                              <Button variant="light" color="gray">
                                Cancel
                              </Button>
                              <Button variant="light" color="red">
                                Delete
                              </Button>
                            </div>
                          </Example>
                        </ExampleSection>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Actions differentiated by hierarchy"
                          >
                            <div style={{ display: "flex", gap: 8 }}>
                              <Button variant="filled" color="blue">
                                Add Question
                              </Button>
                              <Button variant="light" color="blue">
                                Add Answer
                              </Button>
                              <Button variant="light" color="blue">
                                Add Logic
                              </Button>
                            </div>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Actions have no differentiation"
                          >
                            <div style={{ display: "flex", gap: 8 }}>
                              <Button variant="filled" color="blue">
                                Add Question
                              </Button>
                              <Button variant="filled" color="blue">
                                Add Answer
                              </Button>
                              <Button variant="filled" color="blue">
                                Add Logic
                              </Button>
                            </div>
                          </Example>
                        </ExampleSection>
                        <Space h="l" />
                        <Text>
                          The outline, subtle, transparent, and "default"
                          variants should be used to indicate links inline with
                          text, or in circumstances where you need to indicate
                          levels of hierarchy with buttons beyond filled and
                          light.
                        </Text>
                        <ExampleSection cols={6}>
                          <Example>
                            <Button variant="filled">Filled</Button>
                          </Example>
                          <Example>
                            <Button variant="light">Light</Button>
                          </Example>
                          <Example>
                            <Button variant="outline">Outline</Button>
                          </Example>
                          <Example>
                            <Button variant="subtle">Subtle</Button>
                          </Example>
                          <Example>
                            <Button variant="transparent">Transparent</Button>
                          </Example>
                          <Example>
                            <Button variant="default">Default</Button>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="labels">
                    <Accordion.Control>
                      <Title order={3}>Labels</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Buttons should always be labeled with text that
                          clearly describes what the button does.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Function is clearly described"
                          >
                            <Button variant="filled">Import Questions</Button>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Function is unclear"
                          >
                            <Button variant="filled">Import</Button>
                          </Example>
                        </ExampleSection>
                        <Space h="xl" />
                        <Text>Button labels should always be capitalized.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Text is capitalized">
                            <Button variant="filled">Edit Scores</Button>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Text is not fully capitalized"
                          >
                            <Button variant="filled">Edit scores</Button>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="sections">
                    <Accordion.Control>
                      <Title order={3}>Sections</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Illustrative{" "}
                          <Text
                            component="span"
                            c="blue"
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => setActive("Icons")}
                          >
                            icons
                          </Text>{" "}
                          (images that depict objects or concepts) should go in
                          the leftSection
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Icon in the leftSection"
                          >
                            <Button
                              leftSection={<IconFilter size={20} />}
                              variant="filled"
                            >
                              Filters
                            </Button>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Icon in the rightSection"
                          >
                            <Button
                              rightSection={<IconFilter size={20} />}
                              variant="filled"
                            >
                              Filters
                            </Button>
                          </Example>
                        </ExampleSection>
                        <Space h="xl" />
                        <Text>Arrows should go in the rightSection</Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Dropdown arrow in the rightSection"
                          >
                            <Button
                              rightSection={<IconChevronDown size={20} />}
                              variant="filled"
                            >
                              Cycle Actions
                            </Button>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Dropdown arrow in the leftSection"
                          >
                            <Button
                              leftSection={<IconChevronDown size={20} />}
                              variant="filled"
                            >
                              Button Label
                            </Button>
                          </Example>
                        </ExampleSection>
                        <Space h="xl" />
                        <Text>
                          Buttons should generally have an illustration or an
                          arrow, not both. If a case comes up where you think a
                          button needs both an icon and an arrow, discuss with
                          other developers + project managers.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! One icon, no arrow">
                            <Button
                              variant="filled"
                              color="red"
                              leftSection={<IconTrash size={20} />}
                            >
                              Delete
                            </Button>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Has both an icon and an arrow"
                          >
                            <Button
                              variant="filled"
                              color="red"
                              leftSection={<IconTrash size={20} />}
                              rightSection={<IconChevronDown size={20} />}
                            >
                              Delete
                            </Button>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Stack>
            )}
            {/* LOADER */}
            {active === "Loader" && (
              <>
                <Text>
                  Loaders indicate buffering/loading states for asynchronous
                  actions like sending form submissions or retrieving data.
                </Text>
                <Text>
                  Loaders should always be{" "}
                  <Text component="span" c="blue" fw={700}>
                    HireScore blue
                  </Text>
                  .
                </Text>
                <Text>
                  Use the Bars variant when loading/populating a table. Use the
                  Oval variant everywhere else.
                </Text>
                <ExampleSection cols={2}>
                  <Example type="do" caption="For loading tables">
                    <Loader type="bars"></Loader>
                  </Example>
                  <Example
                    type="do"
                    caption="For loading everything that isn't a table"
                  >
                    <Loader type="oval"></Loader>
                  </Example>
                </ExampleSection>
              </>
            )}
            {active === "Action Icon" && (
              <Stack gap="lg">
                <Text>
                  Action Icons are interactive elements that allow users to
                  navigate and perform actions on the site (just like Buttons,
                  except these don't have a label). Use Action Icons as an
                  alternative to Buttons when an action can be concisely
                  represented by an icon alone, without accompanying text.{" "}
                </Text>
                <Text>
                  See the{" "}
                  <Text
                    component="span"
                    c="blue"
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => setActive("Icons")}
                  >
                    Icons page
                  </Text>{" "}
                  for guidance on selecting icons.
                </Text>
                <Accordion
                  multiple
                  defaultValue={[
                    "accessibility",
                    "variants",
                    "size",
                    "grouping",
                  ]}
                >
                  <Accordion.Item value="accessibility">
                    <Accordion.Control>
                      <Title order={4}>Accessibility</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Because Action Icons show no text, it is very
                          important to include both an aria-label and a title
                          property. That way, if someone is using a screenreader
                          or has trouble interpreting the icon, they can still
                          understand the purpose of the element.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! This Action Icon has the required information attached. Hold your cursor over it for a moment to see the title."
                          >
                            <ActionIcon
                              aria-label="Configure"
                              title="Configure"
                              variant="filled"
                              size="lg"
                            >
                              <IconAdjustments size={22} />
                            </ActionIcon>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! This Action Icon has no title or aria-label"
                          >
                            <ActionIcon variant="filled" size="lg">
                              <IconAdjustments size={22} />
                            </ActionIcon>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="variants">
                    <Accordion.Control>
                      <Title order={4}>Variants</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          The Subtle variant is used in the top menu, Applicant
                          Cards, and Create/Edit Assessment
                        </Text>
                        <ExampleSection cols={1}>
                          <Example
                            type="do"
                            caption="Yes! Subtle variant for most use cases"
                          >
                            <ActionIcon
                              aria-label="Delete"
                              title="Delete"
                              color="gray"
                              variant="subtle"
                            >
                              <IconTrash size={32} />
                            </ActionIcon>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="grouping">
                    <Accordion.Control>
                      <Title order={4}>Grouping</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          When displaying multiple Action Icons together, use
                          consistent spacing and keep variants uniform within
                          the group. If more than ~4 icons are needed, consider
                          a dropdown menu instead.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Consistent variants and spacing"
                          >
                            <Group gap="xs">
                              <ActionIcon
                                aria-label="Settings"
                                title="Settings"
                                variant="subtle"
                              >
                                <IconSettings size={22} />
                              </ActionIcon>
                              <ActionIcon
                                aria-label="Filter"
                                title="Filter"
                                variant="subtle"
                              >
                                <IconFilter size={22} />
                              </ActionIcon>
                              <ActionIcon
                                aria-label="Delete"
                                title="Delete"
                                variant="subtle"
                                color="red"
                              >
                                <IconTrash size={22} />
                              </ActionIcon>
                            </Group>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Mixed variants within a group"
                          >
                            <Group gap="xs">
                              <ActionIcon
                                aria-label="Settings"
                                title="Settings"
                                variant="filled"
                              >
                                <IconSettings size={22} />
                              </ActionIcon>
                              <ActionIcon
                                aria-label="Filter"
                                title="Filter"
                                variant="subtle"
                              >
                                <IconFilter size={22} />
                              </ActionIcon>
                              <ActionIcon
                                aria-label="Delete"
                                title="Delete"
                                variant="transparent"
                                color="red"
                              >
                                <IconTrash size={22} />
                              </ActionIcon>
                            </Group>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Stack>
            )}
            {active === "Badge" && (
              <Stack gap="lg">
                <Text>
                  Badges are elements that contain short, discrete pieces of
                  information that you can read at a glance. Badges are perfect
                  for use cases like search filters and status indicators.
                </Text>
                <Accordion
                  multiple
                  defaultValue={["variants", "labels", "radius", "size"]}
                >
                  <Accordion.Item value="variants">
                    <Accordion.Control>
                      <Title order={4}>Variants</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          When a badge is used to display{" "}
                          <Text component="span" fw={700}>
                            search filters
                          </Text>
                          , use the outline variant. Include an "X" in the
                          rightSection to close/clear the filter. Use the color
                          Blue.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Correct variant, includes close button"
                          >
                            <Badge
                              variant="outline"
                              rightSection={<IconX size={16} />}
                            >
                              Status: Active
                            </Badge>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Wrong variant, no close button"
                          >
                            <Badge variant="filled">Status: Active</Badge>
                          </Example>
                        </ExampleSection>
                        <Space h="l" />
                        <Text>
                          When a badge is used to display{" "}
                          <Text component="span" fw={700}>
                            a status
                          </Text>
                          , use the Filled variant. Do not include a close
                          button. Use the the correct{" "}
                          <Text
                            component="span"
                            c="blue"
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => setActive("Colors")}
                          >
                            semantic color
                          </Text>
                          , if applicable.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! Semantic color use, no close button"
                          >
                            <Badge color="green">Offer Accepted</Badge>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Incorrect color, should not have close button"
                          >
                            <Badge
                              variant="outline"
                              rightSection={<IconX size={16} />}
                            >
                              Offer Accepted
                            </Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="labels">
                    <Accordion.Control>
                      <Title order={4}>Labels</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Badge labels/content should be as short as possible
                          without removing any information.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example
                            type="do"
                            caption="Yes! This badge label is succinct"
                          >
                            <Badge
                              variant="outline"
                              rightSection={<IconX size={16} />}
                            >
                              Organization: ACME
                            </Badge>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! This badge contains more detail than necessary"
                          >
                            <Badge
                              variant="outline"
                              rightSection={<IconX size={16} />}
                            >
                              Name of client organization: ACME
                            </Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="radius">
                    <Accordion.Control>
                      <Title order={4}>Radius</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Do not use radius options — the default radius (XL) is
                          the one we want.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Default radius">
                            <Badge>Lorem Ipsum</Badge>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Don't use a custom radius"
                          >
                            <Badge radius="sm">Lorem Ipsum</Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="size">
                    <Accordion.Control>
                      <Title order={4}>Size</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>Badges should be size medium.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Size medium">
                            <Badge size="md">Lorem Ipsum</Badge>
                          </Example>
                          <Example
                            type="dont"
                            caption="No! Don't use a custom size"
                          >
                            <Badge size="xl">Lorem Ipsum</Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Stack>
            )}
            {/* INPUTS */}
            {active === "Text Input" && (
              <Stack gap="lg">
                <Text>
                  Inputs collect information from users. Text Inputs capture
                  strings and are used all over the site for everything from search boxes to free-response assessment questions.
                </Text>
                <Accordion multiple defaultValue={["labels", "descriptions", "asterisks", "error-messages", "placeholders", "exceptions"]}>
                  <Accordion.Item value="labels">
                    <Accordion.Control>
                      <Title order={4}>Labels</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          The label identifies what the field is asking for. It is displayed above the input, always visible, and read by screen readers. Labels should be used in most contexts — they help users visually identify what the input is for, and are critical for screen reader accessibility. Labels should be concise and specific.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Input with a concise label">
                            <TextInput label="Job Title" />
                          </Example>
                          <Example type="dont" caption="No! Unnecessarily long label">
                            <TextInput label="Enter A Job Title Below:" />
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="descriptions">
                    <Accordion.Control>
                      <Title order={4}>Descriptions</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          The description is optional supporting text below the label that provides context, constraints, or instructions. Use it when a concise label on its own isn't enough.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="The description adds useful context the label alone can't convey">
                            <TextInput label="Degree Type" description="e.g. Associate, Bachelor's, etc" />
                          </Example>
                          <Example type="dont" caption="Don't use the description to repeat what the label already says">
                            <TextInput label="Degree Type" description="Enter type of degree" />
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="asterisks">
                    <Accordion.Control>
                      <Title order={4}>Asterisks</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>Use asterisks to mark a field as required. Required fields should be the exception, not the rule-- if most fields in a form are required, consider omitting the asterisk and noting which fields are <Text component="span" fs="italic">optional</Text> instead.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Required field clearly marked with an asterisk">
                            <TextInput label="Email Address" required />
                          </Example>
                          <Example type="dont" caption="Don't mark every field as required — it loses meaning">
                            <Stack gap="xs">
                              <TextInput label="First Name" required />
                              <TextInput label="Last Name" required />
                              <TextInput label="Job Title" required />
                            </Stack>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="error-messages">
                    <Accordion.Control>
                      <Title order={4}>Error Messages</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>Errors display a validation message below the input. Error messages should be specific and actionable. Tell the user what went wrong and how to fix it. Avoid generic messages like "Invalid input."</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Specific error message that tells the user what to do">
                            <TextInput label="Email Address" value="hfgisdufhudshf" error="Please enter a valid email address (e.g. name@example.com)" />
                          </Example>
                          <Example type="dont" caption="Vague error message that doesn't help the user">
                            <TextInput label="Email Address" value="hfgisdufhudshf" error="Invalid input" />
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="placeholders">
                    <Accordion.Control>
                      <Title order={4}>Placeholders</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>
                          Placeholder text is shown inside the input when it's empty and disappears as soon as the user starts typing. It should not carry information the user needs to complete the field (use a description for that). Placeholders are best used for showing format examples.
                        </Text>
                        <ExampleSection>
                          <Example type="do" caption="Yes! Placeholder indicating the expected format">
                            <TextInput label="Phone Number" placeholder="(XXX)XXX-XXXX" />
                          </Example>
                          <Example type="dont" caption="No! The placeholder is not a substitute for a label">
                            <TextInput placeholder="Phone Number" />
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="exceptions">
                    <Accordion.Control>
                      <Title order={4}>Exceptions</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                      </Stack>
                      <Text>
                          Because they're used for so many things in so many places, there are some contexts where Text Inputs can break the above rules. An input without a visible label is acceptable if its purpose is clearly communicated another way.
                        </Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Text Input with an icon and placeholder indicating its purpose. Note that the placeholder text disappears as soon as you start typing, but the icon is persistent">
                            <TextInput leftSection={<IconSearch size={16} />} placeholder="Search" />
                          </Example>
                          <Example
                          type="do"
                          caption="This assessment question does not have a label, but the question stem above the input serves the same purpose."
                          >
                            <Image src={textInputExample} alt="Text input example" h="auto" fit="contain" />
                          </Example>
                        </ExampleSection>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Stack>
            )}
            {/* MODALS */}
            {active === "Modal" && (
              <>
                <WIPBanner />
                <Text>
                  A Modal displays content that temporarily blocks interactions
                  with the main view of a site.
                </Text>
                <Modal
                  opened={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="This is a Modal!"
                >
                  <Text>This is placeholder modal content! :^)</Text>
                </Modal>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              </>
            )}
            {/* ICONS */}
            {active === "Icons" && (
              <Stack gap="sm">
                <TextInput
                  placeholder="Search icons..."
                  value={iconSearch}
                  onChange={(e) => setIconSearch(e.currentTarget.value)}
                />
                <Table striped highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Icon</Table.Th>
                      <Table.Th
                        onClick={() => setIconSortAsc((v) => !v)}
                        style={{ cursor: "pointer", userSelect: "none" }}
                      >
                        Name {iconSortAsc ? "↑" : "↓"}
                      </Table.Th>
                      <Table.Th>Use Case</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {iconData
                      .filter((row) => {
                        const q = iconSearch.toLowerCase();
                        return (
                          row.name.toLowerCase().includes(q) ||
                          row.useCase.toLowerCase().includes(q)
                        );
                      })
                      .sort((a, b) =>
                        iconSortAsc
                          ? a.name.localeCompare(b.name)
                          : b.name.localeCompare(a.name),
                      )
                      .map((row) => (
                        <Table.Tr
                          key={row.name}
                          onClick={() => copyName(row.name)}
                          style={{ cursor: "pointer" }}
                        >
                          <Table.Td>{row.icon}</Table.Td>
                          <Table.Td>
                            {row.name}
                            {copied === row.name && (
                              <Badge ml="xs" color="green" size="sm">
                                Copied!
                              </Badge>
                            )}
                          </Table.Td>
                          <Table.Td>{row.useCase}</Table.Td>
                        </Table.Tr>
                      ))}
                  </Table.Tbody>
                </Table>
              </Stack>
            )}
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

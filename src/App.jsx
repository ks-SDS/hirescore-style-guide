// #region Imports
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
  Alert,
  Notification,
  Input,
  Pagination,
  Indicator,
  Group,
  Image,
  NumberInput,
  Breadcrumbs,
  Anchor,
  Tooltip,
  Select,
  Stepper,
  Box,
  Radio,
  Textarea,
  List,
  Checkbox,
  Paper,
  Divider,
  Card,
  Flex,
  Progress,
  TagsInput,
} from "@mantine/core";
import { useState } from "react";
import textInputExample from "./assets/textInputExample.png";
import hireScoreLogoGrey from './assets/hireScoreLogo-grey.svg';
import hirescoreLogoBlack from './assets/hireScoreLogo-black.svg';
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
  IconCheck,
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

// #endregion

// #region Navigation Config
const sections = [
  { label: "Colors" },
  { label: "Icons" },
  {
    label: "Components",
    children: [
      "Action Icon",
      "Badge",
      "Breadcrumbs",
      "Buttons",
      "Notification",
      "Pagination",
      "Text Input",
      "Loader",
      "Modal",
      "Stepper",
      "Tooltip",
    ],
  },
  {
    label: "Assessment Platform",
    children: [
      "Create/Edit Assessment",
      { label: "Candidate Perspective", children: ["Phase One"] },
      "OA Report",
    ],
  },
  { label: "Find Talent" },
  { label: "HireScore Branding" },
];

// #endregion

// #region Utility Components
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

// #endregion

// #region Style Guide Helpers
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

// #endregion

// #region Colors
// ─── Color Data ───────────────────────────────────────────────────────────────

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


// ─── Colors Section ─────────────────────────────────────────────────────────


function ColorsSection() {
  return (
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
  );
}

// #endregion

// #region Icons
// ─── Icon Data ────────────────────────────────────────────────────────────────

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


// ─── Icons Section ──────────────────────────────────────────────────────────


function IconsSection() {
  const [iconSearch, setIconSearch] = useState('');
  const [iconSortAsc, setIconSortAsc] = useState(true);
  const [copied, setCopied] = useState(null);

  function copyName(name) {
    const reactName = 'Icon' + name.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    navigator.clipboard.writeText(reactName);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
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
  );
}

// #endregion

// #region Components

function ActionIconSection({ setActive }) {
  return (
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
  );
}

function BadgeSection({ setActive }) {
  return (
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
  );
}

function BreadcrumbsSection() {
  return (
  <>
    <Text>
      Breadcrumbs show the user's current location within the site
      hierarchy and allow them to navigate back to parent pages.
    </Text>
    <Text>
      Breadcrumbs should be visible on every page, in the top
      navigation bar section.
    </Text>
    <Text>
      They should always be gray, bold, extra-small text, all-caps,
      and concatenated with a &gt; character. Do not use underline
      or other text decorations.
    </Text>
    <ExampleSection cols={1}>
      <Example type="do">
        <Breadcrumbs
          separator=">"
          styles={{
            separator: {
              color: "var(--mantine-color-gray-6)",
              fontWeight: 700,
            },
          }}
        >
          {["Build", "Assessments", "Media"].map((item, i) => (
            <Anchor
              key={i}
              size="xs"
              c="gray"
              fw={700}
              tt="uppercase"
              underline="never"
            >
              {item}
            </Anchor>
          ))}
        </Breadcrumbs>
      </Example>
    </ExampleSection>
  </>
  );
}

function ButtonsSection({ setActive }) {
  return (
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
  );
}

function NotificationSection() {
  return (
  <Stack gap="lg">
    <Text>
      Notifications provide brief, non-blocking feedback to the user
      about the result of an action.
    </Text>
    <Accordion
      multiple
      defaultValue={["when-to-use", "content", "variants"]}
    >
      <Accordion.Item value="when-to-use">
        <Accordion.Control>
          <Title order={4}>When to use</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              Use Notifications to give users feedback after
              completing an action, whether it succeeded or failed.
              They're also appropriate for background system events
              that the user should be aware of but doesn't need to
              act on immediately.
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="Yes! Feedback confirming a user action was completed"
              >
                <Notification title="Success" color="teal">
                  Your changes have been saved.
                </Notification>
              </Example>
              <Example
                type="do"
                caption="Yes! Alerting a user to system events"
              >
                <Notification title="Limited Search" color="orange">
                  Find Candidates is popular right now! Search will
                  be limited until 01-01-2050 00:00:00 PM.
                </Notification>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="content">
        <Accordion.Control>
          <Title order={4}>Content</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              This component is for quick acknowledgement of
              actions. Notification content should be short and to
              the point. Do not use a Notification for critical
              information or anything a user may need to refer back
              to.
            </Text>
            <Text>
              <Text component="span" fw={700}>
                Users should still be able to use a given feature or
                page even if they miss a notification.
              </Text>{" "}
              Never put information in a Notification that is
              required to complete a task.
            </Text>
            <ExampleSection cols={1}>
              <Example
                type="dont"
                caption="No! This notification contains critical instructions the user must follow— if they dismiss it or miss it, they're stuck"
              >
                <Notification
                  color="red"
                  title="Action Required"
                  withCloseButton={false}
                >
                  Your assessment could not be submitted. To fix
                  this, go to Settings &gt; Integrations &gt; ATS
                  Sync, click "Re-authenticate," enter your API key,
                  and re-submit the assessment. If the issue
                  persists, contact support@hirescore.com with error
                  code 4082.
                </Notification>
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
              The default style is acceptable to use everywhere.
              Make sure to use the appropriate Semantic Color for
              each notification. Do not add an Icon or a Loader to a
              Notification. Do not add a border.
            </Text>
            <ExampleSection cols={1}>
              <Example
                type="dont"
                caption="Notification with icon, incorrect color, and border"
              >
                <Notification
                  icon={<IconBell size={16} />}
                  title="Error!"
                  withBorder
                >
                  Something went wrong. Unable to save changes
                </Notification>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Stack>
  );
}

function PaginationSection() {
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationRows, setPaginationRows] = useState("100");
  const totalRows = 2562;

  return (
  <>
    <Text>
      Pagination allows users to navigate through multi-page content
      in a structured way. Use pagination to break up large amounts
      of dynamically-loaded content like tables.
    </Text>
    <Text>
      Pagination should always use the default size and radius
      settings The active page should have 2 siblings. Include edges
      and a dropdown to choose the number of rows shown at a time.
      Include a badge that displays the total number of entries and
      which of them are being shown.
    </Text>
    <ExampleSection cols={1}>
      <Example type="neutral">
        <Group justify="flex-start">
          <Badge
            variant="outline"
            color="gray"
            tt="uppercase"
            fw={700}
          >
            Showing{" "}
            {(
              (paginationPage - 1) * parseInt(paginationRows) +
              1
            ).toLocaleString()}
            –
            {Math.min(
              paginationPage * parseInt(paginationRows),
              totalRows,
            ).toLocaleString()}{" "}
            of {totalRows.toLocaleString()}
          </Badge>
          <Pagination
            total={Math.ceil(totalRows / parseInt(paginationRows))}
            value={paginationPage}
            onChange={setPaginationPage}
            siblings={2}
            withEdges
          />
          <Tooltip label="Number of rows">
            <Select
              data={["20", "50", "100", "200", "500"]}
              value={paginationRows}
              onChange={(v) => {
                setPaginationRows(v);
                setPaginationPage(1);
              }}
              w={80}
            />
          </Tooltip>
        </Group>
      </Example>
    </ExampleSection>
  </>
  );
}

function TextInputSection() {
  return (
  <Stack gap="lg">
    <Text>
      Inputs collect information from users. Text Inputs capture
      strings and are used all over the site for everything from
      search boxes to free-response assessment questions.
    </Text>
    <Accordion
      multiple
      defaultValue={[
        "labels",
        "descriptions",
        "asterisks",
        "error-messages",
        "placeholders",
        "exceptions",
      ]}
    >
      <Accordion.Item value="labels">
        <Accordion.Control>
          <Title order={4}>Labels</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              The label identifies what the field is asking for. It
              is displayed above the input, always visible, and read
              by screen readers. Labels should be used in most
              contexts — they help users visually identify what the
              input is for, and are critical for screen reader
              accessibility. Labels should be concise and specific.
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="Yes! Input with a concise label"
              >
                <TextInput label="Job Title" />
              </Example>
              <Example
                type="dont"
                caption="No! Unnecessarily long label"
              >
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
              The description is optional supporting text below the
              label that provides context, constraints, or
              instructions. Use it when a concise label on its own
              isn't enough.
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="The description adds useful context the label alone can't convey"
              >
                <TextInput
                  label="Degree Type"
                  description="e.g. Associate, Bachelor's, etc"
                />
              </Example>
              <Example
                type="dont"
                caption="Don't use the description to repeat what the label already says"
              >
                <TextInput
                  label="Degree Type"
                  description="Enter type of degree"
                />
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
            <Text>
              Use asterisks to mark a field as required. Required
              fields should be the exception, not the rule-- if most
              fields in a form are required, consider omitting the
              asterisk and noting which fields are{" "}
              <Text component="span" fs="italic">
                optional
              </Text>{" "}
              instead.
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="Required field clearly marked with an asterisk"
              >
                <TextInput label="Email Address" required />
              </Example>
              <Example
                type="dont"
                caption="Don't mark every field as required — it loses meaning"
              >
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
            <Text>
              Errors display a validation message below the input.
              Error messages should be specific and actionable. Tell
              the user what went wrong and how to fix it. Avoid
              generic messages like "Invalid input."
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="Specific error message that tells the user what to do"
              >
                <TextInput
                  label="Email Address"
                  value="hfgisdufhudshf"
                  error="Please enter a valid email address (e.g. name@example.com)"
                />
              </Example>
              <Example
                type="dont"
                caption="Vague error message that doesn't help the user"
              >
                <TextInput
                  label="Email Address"
                  value="hfgisdufhudshf"
                  error="Invalid input"
                />
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
              Placeholder text is shown inside the input when it's
              empty and disappears as soon as the user starts
              typing. It should not carry information the user needs
              to complete the field (use a description for that).
              Placeholders are best used for showing format
              examples.
            </Text>
            <ExampleSection>
              <Example
                type="do"
                caption="Yes! Placeholder indicating the expected format"
              >
                <TextInput
                  label="Phone Number"
                  placeholder="(XXX)XXX-XXXX"
                />
              </Example>
              <Example
                type="dont"
                caption="No! The placeholder is not a substitute for a label"
              >
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
          <Stack gap="sm"></Stack>
          <Text>
            Because they're used for so many things in so many
            places, there are some contexts where Text Inputs can
            break the above rules. An input without a visible label
            is acceptable if its purpose is clearly communicated
            another way.
          </Text>
          <ExampleSection cols={2}>
            <Example
              type="do"
              caption="Text Input with an icon and placeholder indicating its purpose. Note that the placeholder text disappears as soon as you start typing, but the icon is persistent"
            >
              <TextInput
                leftSection={<IconSearch size={16} />}
                placeholder="Search"
              />
            </Example>
            <Example
              type="do"
              caption="This assessment question does not have a label, but the question stem above the input serves the same purpose."
            >
              <Image
                src={textInputExample}
                alt="Text input example"
                h="auto"
                fit="contain"
              />
            </Example>
          </ExampleSection>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Stack>
  );
}

function LoaderSection() {
  return (
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
  );
}

function ModalSection() {
  const [contentDoOpen, setContentDoOpen] = useState(false);
  const [contentDontOpen, setContentDontOpen] = useState(false);

  return (
  <Stack gap="lg">
    <Text>
      A Modal displays content that temporarily blocks interactions
      with the main view of a site. Modals are typically launched by
      clicking on a Button.
    </Text>
    <Accordion
      multiple
      defaultValue={[
        "when-to-use",
        "title",
        "content",
        "actions",
        "closing",
        "examples",
      ]}
    >
      <Accordion.Item value="when-to-use">
        <Accordion.Control>
          <Title order={4}>When to use</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              Use Modals for confirmations or forms that require the
              user's full attention before they can continue, eg
              confirming a destructive action or completing a form
              field. Do not use Modals for non-urgent information;
              use an inline alert or notification instead.
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="content">
        <Accordion.Control>
          <Title order={4}>Content</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Title order={5}>Focus</Title>
            <Text>
              Every element in a given modal should relate to a
              single task or decision. Avoid mixing unrelated
              actions or settings in the same modal.{" "}
            </Text>
            <Text>
              Include a short, descriptive title at the top of every
              modal so the user can understand its purpose. If any
              instructions or alert messages are included, make sure
              they are visible and obvious at the top of the modal.
            </Text>
            <Modal
              opened={contentDoOpen}
              onClose={() => setContentDoOpen(false)}
              title=""
              size="md"
              styles={{
                body: {
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "70vh",
                  padding: 0,
                },
              }}
            >
              <Stack gap="sm" style={{ padding: "16px 16px 0" }}>
                <Title>Edit Scores</Title>
                <Alert
                  icon={<IconInfoCircle size={22} />}
                  color="blue"
                >
                  Any changes made here will update the scores
                  immediately, even if you do not click "Finish"
                </Alert>
              </Stack>
              <Stack
                style={{
                  overflowY: "auto",
                  flex: 1,
                  padding: "16px 16px 0",
                }}
              >
                <Stack
                  gap="sm"
                  style={{
                    border: "1px solid var(--mantine-color-gray-3)",
                    borderRadius: 8,
                    padding: 16,
                  }}
                >
                  <Group gap="sm">
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor:
                          "var(--mantine-color-gray-2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text size="sm" fw={600}>
                        1
                      </Text>
                    </div>
                    <Text size="sm">Placeholder question</Text>
                  </Group>
                  <Group justify="flex-end">
                    <Text size="sm" fw={700}>
                      Score Values
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm">True</Text>
                    <NumberInput
                      defaultValue={1}
                      style={{ width: 90 }}
                    />
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm">False</Text>
                    <NumberInput
                      defaultValue={0}
                      style={{ width: 90 }}
                    />
                  </Group>
                </Stack>
                {[
                  {
                    n: 2,
                    q: "Placeholder question",
                    options: [
                      "Option A",
                      "Option B",
                      "Option C",
                      "Option D",
                    ],
                  },
                  {
                    n: 3,
                    q: "Placeholder question",
                    options: [
                      "Option A",
                      "Option B",
                      "Option C",
                      "Option D",
                    ],
                  },
                  {
                    n: 4,
                    q: "Placeholder question",
                    options: [
                      "Option A",
                      "Option B",
                      "Option C",
                      "Option D",
                    ],
                  },
                  {
                    n: 5,
                    q: "Placeholder question",
                    options: [
                      "Option A",
                      "Option B",
                      "Option C",
                      "Option D",
                    ],
                  },
                ].map(({ n, q, options }) => (
                  <Stack
                    key={n}
                    gap="sm"
                    style={{
                      border:
                        "1px solid var(--mantine-color-gray-3)",
                      borderRadius: 8,
                      padding: 16,
                    }}
                  >
                    <Group gap="sm">
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          backgroundColor:
                            "var(--mantine-color-gray-2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text size="sm" fw={600}>
                          {n}
                        </Text>
                      </div>
                      <Text size="sm">{q}</Text>
                    </Group>
                    <Group justify="flex-end">
                      <Text size="sm" fw={700}>
                        Score Values
                      </Text>
                    </Group>
                    {options.map((opt) => (
                      <Group key={opt} justify="space-between">
                        <Text size="sm">{opt}</Text>
                        <NumberInput
                          defaultValue={0}
                          style={{ width: 90 }}
                        />
                      </Group>
                    ))}
                  </Stack>
                ))}
              </Stack>
              <Group
                justify="flex-end"
                style={{
                  padding: "12px 16px",
                  borderTop:
                    "1px solid var(--mantine-color-gray-3)",
                }}
              >
                <Button
                  color="blue"
                  onClick={() => setContentDoOpen(false)}
                >
                  Finish
                </Button>
              </Group>
            </Modal>
            <Modal
              opened={contentDontOpen}
              onClose={() => setContentDontOpen(false)}
              title="Settings"
              closeOnClickOutside={false}
              withCloseButton={false}
            >
              <Stack gap="sm">
                <TextInput label="Display Name" />
                <TextInput label="Email Address" />
                <TextInput label="Password" />
                <TextInput label="Default Time Limit (minutes)" />
                <TextInput label="Max Attempts" />
                <TextInput label="Notify me when a candidate completes an assessment" />
                <TextInput
                  label="Daily digest email time"
                  placeholder="e.g. 8:00 AM"
                />
                <TextInput
                  label="Theme"
                  placeholder="e.g. Light, Dark"
                />
                <TextInput
                  label="Language"
                  placeholder="e.g. English"
                />
                <TextInput label="Timezone" />
                <Button color="red" variant="outline" fullWidth>
                  Delete My Account
                </Button>
                <Group justify="flex-end" mt="sm">
                  <Button onClick={() => setContentDontOpen(false)}>
                    Save
                  </Button>
                </Group>
              </Stack>
            </Modal>
            <Title order={5}>Length</Title>
            <Text>
              Long or scrolling modals are acceptable when the task
              genuinely requires it. If the modal scrolls, make sure
              the action buttons remain visible and sticky at the
              bottom. Use section headers or spacing to break up
              dense content so users aren't overwhelmed.
            </Text>
            <Text>
              If a modal feels overwhelming, consider whether the
              content can be organized into steps (a multi-step
              modal) rather than presenting everything at once.
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="closing">
        <Accordion.Control>
          <Title order={4}>Closing behavior</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              Users should be able to close a Modal via the X
              button, a Cancel button, or by clicking the overlay.
              Do not disable overlay-click-to-close unless losing
              unsaved work is a genuine risk.
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="examples">
        <Accordion.Control>
          <Title order={4}>Examples</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="Yes! This modal covers a single task, is clearly labeled, displays the action button separate from the scrollable area, and can be closed by clicking the overlay area."
              >
                <Button
                  color="blue"
                  onClick={() => setContentDoOpen(true)}
                >
                  Edit Scores
                </Button>
              </Example>
              <Example
                type="dont"
                caption="No! Account settings, assessment defaults, and notifications are not related and should not share a modal. Users should be able to close most modals without saving."
              >
                <Button onClick={() => setContentDontOpen(true)}>
                  Open Settings
                </Button>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Stack>
  );
}

function StepperSection() {
  return (
  <>
    <Text>Steppers guide users through a multi-step process by showing progress and indicating which step they are currently on.</Text>
    <Text>Consider using Steppers to break up long Modals or forms with lots of fields.</Text>
    <Text>Steppers should use the default styling, with HireScore Blue.</Text>
    <ExampleSection cols={1}>
      <Example type="neutral">
        <Stepper active={1} w="100%" styles={{ stepIcon: { borderWidth: 2 }, stepBody: { marginTop: 4 } }}>
          <Stepper.Step label="Step 1" description="Account info" />
          <Stepper.Step label="Step 2" description="Personal details" />
          <Stepper.Step label="Step 3" description="Review" />
        </Stepper>
      </Example>
    </ExampleSection>
  </>
  );
}

function TooltipSection() {
  return (
  <Stack gap="lg">
    <Text>
      Tooltips display a small bit of information when a user hovers
      over or focuses an element.
    </Text>
    <Accordion
      multiple
      defaultValue={["when-to-use", "content", "placement"]}
    >
      <Accordion.Item value="when-to-use">
        <Accordion.Control>
          <Title order={4}>When to use</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              Use Tooltips to declare the purpose of elements that
              have no visible label (e.g., ActionIcon buttons) A
              Tooltip is also appropriate for truncated text,
              abbreviations, or any UI element that benefits from a
              short clarifying note.
            </Text>
            <Text>
              Do not use Tooltips to convey critical information, as
              mobile users can't hover and keyboard users may miss
              them. If the information is necessary to complete a
              task, put it in a visible label or description
              instead.
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="do"
                caption="Yes! Tooltip clarifies an unlabeled icon"
              >
                <Tooltip label="Reset table">
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    aria-label="Reset table"
                  >
                    <IconRefresh size={24} />
                  </ActionIcon>
                </Tooltip>
              </Example>
              <Example
                type="dont"
                caption="No! The button label already communicates the action"
              >
                <Tooltip label="Click to save your changes">
                  <Button>Save</Button>
                </Tooltip>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="content">
        <Accordion.Control>
          <Title order={4}>Content</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              Keep tooltip text brief, ideally one short phrase or
              sentence. Never include interactive elements (links,
              buttons) inside a Tooltip.
            </Text>
            <ExampleSection cols={3}>
              <Example type="do" caption="Yes! Short and specific">
                <Tooltip label="Copy to clipboard">
                  <ActionIcon
                    color="gray"
                    variant="subtle"
                    aria-label="Filter by date range"
                  >
                    <IconCopy size={24} />
                  </ActionIcon>
                </Tooltip>
              </Example>
              <Example type="dont" caption="No! Way too long">
                <Tooltip label="Click on this button to copy the data currently displayed on the table below to your clipboard. You can then paste this into a spreadsheet or word processor.">
                  <ActionIcon
                    color="gray"
                    variant="subtle"
                    aria-label="Filter"
                  >
                    <IconCopy size={24} />
                  </ActionIcon>
                </Tooltip>
              </Example>
              <Example type="dont" caption="No! Links inside a tooltip can't be clicked">
                <Tooltip label={<Text size="xs">Copy to clipboard. <Anchor size="xs" href="#">Learn more about copying</Anchor></Text>}>
                  <ActionIcon color="gray" variant="subtle" aria-label="Copy to clipboard">
                    <IconCopy size={24} />
                  </ActionIcon>
                </Tooltip>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="placement">
        <Accordion.Control>
          <Title order={4}>Placement</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>
              The default placement (top) works for most cases.
              Override placement when the tooltip would be clipped
              by the edge of the viewport or a scrollable container
              — use bottom, left, or right as needed.
            </Text>
            <ExampleSection cols={2}>
              <Example
                type="neutral"
                caption="Default top placement"
              >
                <Tooltip label="Top (default)" position="top">
                  <Button variant="subtle">Hover me</Button>
                </Tooltip>
              </Example>
              <Example
                type="neutral"
                caption="Use bottom when near the top of the viewport"
              >
                <Tooltip label="Bottom placement" position="bottom">
                  <Button variant="subtle">Hover me</Button>
                </Tooltip>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Stack>
  );
}

// #endregion

// #region Assessment Platform

function CreateEditAssessmentSection() {
  return (
  <Stack gap="lg">
    <Text>
      Create/Edit Assessment refers to the page PMs and Admins see
      when editing AP assessments.
    </Text>
  </Stack>
  );
}

function CandidatePerspectiveSection() {
  return (
  <Stack gap="lg">
    <WIPBanner />
    <Text>
      Candidate Perspective refers to the side of Assessment
      Platform job candidates see when filling applications and
      completing assessments.
    </Text>
  </Stack>
  );
}

function PhaseOneSection() {
  return (
  <Stack gap="lg">
    <WIPBanner />
    <Text>Assessments assigned to Phase One of a given hiring cycle should include the client's branding.</Text>
    <Accordion multiple defaultValue={['logo-banner', 'application-header']}>
      <Accordion.Item value="logo-banner">
        <Accordion.Control><Title order={4}>Logo Banner</Title></Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>All Phase One assessments should have the client's logo and "careers" stickied to the top of the page.</Text>
            <ExampleSection cols={1}>
              <Example type="neutral">
                <div style={{ height: 50, display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem', width: '100%' }}>
                  <img src="https://placehold.co/250x60" alt="Organization Logo" width="auto" style={{ maxHeight: '100%', padding: '0.25rem' }} />
                  <span style={{ width: 1, height: '40%', backgroundColor: 'var(--mantine-color-dark-6)' }} />
                  <p style={{ color: 'var(--mantine-color-dark-6)', margin: 0 }}>Careers</p>
                </div>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="application-header">
        <Accordion.Control><Title order={4}>Application Header</Title></Accordion.Control>
        <Accordion.Panel>
          <Stack gap="sm">
            <Text>Online Application (OA) assessments should include the cycle's job title followed by "HireScore Application" in the main content area above the first question.</Text>
            <ExampleSection cols={1}>
              <Example>
                <Stack gap={2} align="flex-start" w="100%">
                  <Text fw={700} fz={34} ta="left">Job Title</Text>
                  <Text fw={400} fz={26} c="var(--mantine-color-gray-6)" ta="left">HireScore Application</Text>
                </Stack>
              </Example>
            </ExampleSection>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Stack>
  );
}

// #endregion

// #region OA Report
// ─── OA Report Components ────────────────────────────────────────────────────

function ScoreBadge({ score }) {
  if (typeof score === "string") {
    return (
      <Text component="span" size="xs" fw={700} c="red.6" ml={4}>
        {score}
      </Text>
    );
  }
  const color = score > 0 ? "teal.6" : score < 0 ? "red.6" : "dimmed";
  const label = score > 0 ? `+${score}` : score;
  return (
    <Text component="span" size="xs" fw={700} c={color} ml={4}>
      {label}
    </Text>
  );
}

function RadioQ({ question, options, selected }) {
  return (
    <Box>
      <Text fw={600}>{question}</Text>
      <Divider my={4} />
      <Stack gap={4}>
        {options.map((opt) => (
          <Group key={opt.label} gap={6} wrap="nowrap" align="center">
            <Radio readOnly checked={opt.label === selected} onChange={() => {}} label={opt.label} />
            <ScoreBadge score={opt.score} />
          </Group>
        ))}
      </Stack>
    </Box>
  );
}

function OpenQ({ question, answer }) {
  return (
    <Box>
      <Text fw={600}>{question}</Text>
      <Divider my={4} />
      {answer && <Text size="sm">{answer}</Text>}
    </Box>
  );
}

function OAReport() {
  return (
    <Box p="md" maw={860} mx="auto">

      <Title order={2} c="dimmed" mb={4}>[Client Name Here]</Title>
      <Title order={2} c="dimmed" mb="xl">[Cycle Name Here]</Title>

      <Stack gap={2} align="center">
        <Text fw={700}>Michelle White</Text>
        <Text size="sm">753 Sycamore Ln</Text>
        <Text size="sm">Charlotte, North Carolina 28201</Text>
        <Text size="sm">michelle.white@nomail.gov | (410) 555-1022</Text>
      </Stack>
      <Box my="xl" />


      <RadioQ
        question="How did you hear about this job opening?"
        selected="Personal Referral (e.g., current ACME employee)"
        options={[
          { label: "HireScore.com", score: 0 },
          { label: "Online Job Board (e.g., Indeed)", score: 0 },
          { label: "Social Media (e.g., Facebook, X.com)", score: 0 },
          { label: "Personal Referral (e.g., current ACME employee)", score: 1 },
          { label: "Employment agency", score: 0 },
          { label: "Other advertisement", score: 0 },
          { label: "Don't remember/decline to answer", score: 0 },
        ]}
      />

      <Box my="xl" />

      <RadioQ
        question="Please select highest degree earned:"
        selected="Associate degree or technical certificate"
        options={[
          { label: "Did not graduate from high school", score: -5 },
          { label: "High School Diploma or GED", score: 0 },
          { label: "Associate degree or technical certificate", score: 1 },
          { label: "Bachelor's Degree", score: 2 },
          { label: "Master's or MBA", score: 0 },
          { label: "Ph.D. or equivalent", score: 0 },
        ]}
      />

      <Box my="xl" />

      <RadioQ
        question="How many years of experience do you have working in Customer Service?"
        selected="4+ years"
        options={[
          { label: "None", score: -10 },
          { label: "Less than two years", score: -5 },
          { label: "2-4 years", score: 0 },
          { label: "4+ years", score: 5 },
        ]}
      />

      <Box my="xl" />

      <Title order={4} mb="md">What level of expertise do you have with the following?</Title>
      <Stack gap="lg">
        <RadioQ
          question="Written and verbal communication skills"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -20 },
            { label: "2", score: -10 },
            { label: "3", score: -2 },
            { label: "4", score: 0 },
            { label: "5 (Expert)", score: 5 },
          ]}
        />
        <RadioQ
          question="Providing excellent service to customers and employees"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -11 },
            { label: "2", score: -8 },
            { label: "3", score: -3 },
            { label: "4", score: 0 },
            { label: "5 (Expert)", score: 3 },
          ]}
        />
        <RadioQ
          question="Prioritizing work and managing deadlines"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -8 },
            { label: "2", score: -5 },
            { label: "3", score: -2 },
            { label: "4", score: 0 },
            { label: "5 (Expert)", score: 2 },
          ]}
        />
        <RadioQ
          question="Handling sensitive customer information and maintaining confidentiality in the workplace"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -5 },
            { label: "2", score: -2 },
            { label: "3", score: 0 },
            { label: "4", score: 2 },
            { label: "5 (Expert)", score: 5 },
          ]}
        />
        <RadioQ
          question="Working with little supervision"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -5 },
            { label: "2", score: -2 },
            { label: "3", score: 0 },
            { label: "4", score: 2 },
            { label: "5 (Expert)", score: 5 },
          ]}
        />
        <RadioQ
          question="Coordinating and working on projects with other departments"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -8 },
            { label: "2", score: -3 },
            { label: "3", score: 0 },
            { label: "4", score: 3 },
            { label: "5 (Expert)", score: 8 },
          ]}
        />
        <RadioQ
          question="Basic computer skills"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -22 },
            { label: "2", score: -11 },
            { label: "3", score: -5 },
            { label: "4", score: 0 },
            { label: "5 (Expert)", score: 5 },
          ]}
        />
        <RadioQ
          question="Data entry (processing orders, cancellations, adjustments, requests, fees, invoices)"
          selected="5 (Expert)"
          options={[
            { label: "1 (None)", score: -8 },
            { label: "2", score: -5 },
            { label: "3", score: 2 },
            { label: "4", score: 0 },
            { label: "5 (Expert)", score: 2 },
          ]}
        />
      </Stack>

      <Box my="xl" />

      <RadioQ
        question="How many full time jobs have you had in the last five years?"
        selected="1"
        options={[
          { label: "0", score: -10 },
          { label: "1", score: 3 },
          { label: "2", score: 0 },
          { label: "3", score: -3 },
          { label: "4 or more", score: -6 },
        ]}
      />

      <Box my="xl" />

      <RadioQ
        question="If hired, how long would you prefer to work for ACME?"
        selected="More than three years"
        options={[
          { label: "Don't know", score: -10 },
          { label: "Less than three months", score: 0 },
          { label: "Three months to one year", score: 0 },
          { label: "One to three years", score: -20 },
          { label: "More than three years", score: 1 },
        ]}
      />

      <Box my="xl" />

    

      <Box my="xl" />

      <Title order={3} mb="md">Education</Title>

      <Title order={4} mb="xs">Last High School</Title>
      <Stack gap="md" mb="lg">
        <OpenQ question="School name" answer="Jackson High School" />
        <OpenQ question="School City" answer="Detroit MI" />
        <OpenQ question="Graduation year" answer="2016" />
        <OpenQ question="Estimated GPA (4.0 scale)" answer="3.2" />
        <OpenQ question="Number of years attended" answer="4" />
      </Stack>

      <Box my="xl" />

      <Title order={4} mb="xs">Most recent college</Title>
      <Stack gap="md" mb="lg">
        <OpenQ question="College Name" answer="State Community College" />
        <RadioQ
          question="Did you graduate?"
          selected={"Yes"}
          options={[
            { label: "Yes", score: 0 },
            { label: "No", score: 0 },
            { label: "Presently Attending", score: 0 },
          ]}
        />
        <OpenQ question="Graduation Year" answer="2018" />
        <OpenQ question="Major area of study" answer="Political Science" />
        <OpenQ question="Type of degree" />
        <OpenQ question="Estimated GPA (4.0 scale)" answer="3.6" />
      </Stack>

      <Box my="xl" />

      <RadioQ
        question="Have you ever worked for ACME?"
        selected={"No"}
        options={[
          { label: "Yes", score: 0 },
          { label: "As a Contractor/Consultant", score: 0 },
          { label: "No", score: 0 },
        ]}
      />

      <Box my="xl" />

      <Title order={3} mb={4}>Please list your work experience beginning with your most recent job held.</Title>
      <Text size="sm" c="dimmed" mb="lg">Remember to include experience relevant to the ACME Customer Service Representative position!</Text>

      <Title order={4} mb="xs">Current or most recent job</Title>
      <Stack gap="md" mb="md">
        <OpenQ question="Job 1 title" answer="Service Operations Supervisor" />
        <OpenQ question="Name of employer" answer="Kohl's" />
        <OpenQ question="City, State, and Zipcode" answer="Virginia Beach VA 23450" />
        <OpenQ question="Phone number" answer="(215) 555-1052" />
        <OpenQ question="Name of last supervisor" answer="Tom Anderson" />
        <OpenQ question="Starting date (MM/YYYY)" answer="01/2025" />
        <OpenQ question="Leaving date (MM/YYYY)" answer="02/2026" />
        <OpenQ question="Starting salary or rate" answer="$27/hr" />
        <OpenQ question="Final salary or rate" answer="$33/hr" />
        <OpenQ question="Description of work" answer="Act as the liaison between the customer service floor and the product team, relaying field feedback that led to three feature updates in a single quarter." />
        <OpenQ question="Accomplishments" answer="Developed a dashboard tracking real-time NPS trends that became a standard tool for the entire support organization." />
        <RadioQ
          question="Was your separation from this job voluntary or involuntary?"
          selected={"Still Employed"}
          options={[
            { label: "Voluntary", score: 0 },
            { label: "Involuntary", score: 0 },
            { label: "Still Employed", score: 0 },
          ]}
        />
      </Stack>

      <Box my="xl" />

      <Title order={4} mb="xs">Job 2</Title>
      <Stack gap="md" mb="md">
        <OpenQ question="Job 2 title" answer="Quality Assurance Coordinator" />
        <OpenQ question="Name of employer" answer="Dillard's" />
        <OpenQ question="City, State, and Zipcode" answer="Raleigh NC 27601" />
        <OpenQ question="Phone number" answer="(904) 555-1082" />
        <OpenQ question="Name of last supervisor" answer="David Thompson" />
        <OpenQ question="Starting date (month/year)" answer="05/2023" />
        <OpenQ question="Leaving date (month/year)" answer="12/2024" />
        <OpenQ question="Starting salary or rate" answer="$20/hr" />
        <OpenQ question="Final salary or rate" answer="$23/hr" />
        <OpenQ question="Description of work" answer="Managed real-time queue operations during peak volume periods, redistributing workloads to keep average…" />
        <OpenQ question="Accomplishments" answer="Negotiated a revised SLA framework with a key enterprise client that increased the contract value by…" />
        <RadioQ
          question="Was your separation from this job voluntary or involuntary?"
          selected={"Voluntary"}
          options={[
            { label: "Voluntary", score: 0 },
            { label: "Involuntary", score: 0 },
            { label: "Still Employed", score: 0 },
          ]}
        />
        <RadioQ
          question="Exact reason for leaving?"
          selected="Resigned for a better position"
          options={[
            { label: "Resigned for a better position", score: 1 },
            { label: "Resigned for other reasons", score: 0 },
            { label: "Laid off", score: 0 },
            { label: "Terminated/fired", score: -3 },
            { label: "Company/facility closed", score: 0 },
            { label: "Other, please explain:", score: 0 },
          ]}
        />
      </Stack>

      <Box my="xl" />

      <Title order={4} mb="xs">Job 3</Title>
      <Stack gap="md" mb="md">
        <OpenQ question="Job 3 title" answer="Support Services Supervisor" />
        <OpenQ question="Name of employer" answer="Westbridge Corp" />
        <OpenQ question="City, State, and Zipcode" answer="Baltimore MD 21201" />
        <OpenQ question="Phone number" answer="(702) 555-1112" />
        <OpenQ question="Name of last supervisor" answer="Maria Rodriguez" />
        <OpenQ question="Starting date (month/year)" answer="01/2020" />
        <OpenQ question="Leaving date (month/year)" answer="03/2023" />
        <OpenQ question="Starting salary or rate" answer="$21.00/hr" />
        <OpenQ question="Final salary or rate" answer="$21.00/hr" />
        <OpenQ question="Description of work" answer="Piloted a new chat-support channel from concept to launch, defining macros, response templates, and…" />
        <OpenQ question="Accomplishments" answer="Maintained a personal CSAT score of 4.8/5.0 across 1,200+ rated interactions over the full tenure." />
        <RadioQ
          question="Was your separation from this job voluntary or involuntary?"
          selected={"Voluntary"}
          options={[
            { label: "Voluntary", score: 0 },
            { label: "Involuntary", score: 0 },
            { label: "Still Employed", score: 0 },
          ]}
        />
        <RadioQ
          question="Exact reason for leaving?"
          selected="Resigned for a better position"
          options={[
            { label: "Resigned for a better position", score: 1 },
            { label: "Resigned for other reasons", score: 0 },
            { label: "Laid off", score: 0 },
            { label: "Terminated/fired", score: -1 },
            { label: "Company/facility closed", score: 0 },
            { label: "Other, please explain:", score: 0 },
          ]}
        />
      </Stack>

      <Box my="xl" />


      <RadioQ
        question="May we contact your present employer?"
        selected={"Yes"}
        options={[
          { label: "Yes", score: 0 },
          { label: "No", score: 0 },
        ]}
      />

      <Box mt="lg">
        <Text fw={600}>Comments</Text>
        <Divider my={4} />
        <Text size="sm">Feel free to contact present employer! Further references available upon request.</Text>
      </Box>

      <Box mt="lg">
        <OpenQ question="Use the space below to summarize any additional information necessary to describe your full qualifications for the specific position for which you are applying." answer="Thank you for your time and consideration." />
      </Box>

      <Box my="xl" />

      <Accordion variant="filled" defaultValue="knockouts">
        <Accordion.Item value="knockouts">
          <Accordion.Control>
            <Text fw={700} c="red.6">Knockouts</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap="lg">
              <RadioQ
                question="Are you 18 years or older?"
                selected="Yes"
                options={[
                  { label: "Yes", score: 0 },
                  { label: "No", score: "Knockout" },
                ]}
              />
              <RadioQ
                question="Are you legally eligible to work in the United States?"
                selected="Yes"
                options={[
                  { label: "Yes", score: 0 },
                  { label: "No", score: "Knockout" },
                ]}
              />
              <RadioQ
                question="Do you require visa sponsorship now or in the future to remain employed by ACME?"
                selected="No"
                options={[
                  { label: "Yes", score: "Knockout" },
                  { label: "No", score: 0 },
                ]}
              />
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

    </Box>
  );
}


// #endregion

// #region Find Talent
// ─── Find Talent ─────────────────────────────────────────────────────────────

function TalentSearchFormDev() {
  const [jobTitle, setJobTitle] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [remoteOpen, setRemoteOpen] = useState(false);
  const [location, setLocation] = useState('');
  const tokens = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card radius="xl" withBorder shadow="lg" p="md" style={{ width: 390 }}>
        <Card.Section>
          <Group
            justify="space-between"
            align="center"
            wrap="nowrap"
            px="md"
            py="md"
            style={{ background: 'rgb(10, 22, 40)' }}
          >
            <Flex gap="xs" align="center">
              <Text size="xs" fw={500} style={{ color: '#fff', letterSpacing: '0.3px' }}>
                HireScore
              </Text>
              <Divider
                orientation="vertical"
                size="xs"
                style={{ '--divider-color': '#29ABE2', height: 24 }}
              />
              <Text size="xs" fw={800} style={{ color: '#29ABE2', letterSpacing: '0.3px' }}>
                Find Talent
              </Text>
            </Flex>

            <SimpleGrid cols={1} style={{ textAlign: 'right' }}>
              <Text size="xs" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>
                FREE TOKENS TODAY
              </Text>
              <Title
                order={2}
                style={{ color: '#4ADE80', lineHeight: 1, marginBottom: -4, textAlign: 'right' }}
              >
                {tokens}
              </Title>
              <Text size="xs" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>
                Resets daily
              </Text>
              <Progress size="xs" value={(tokens / 100) * 100} color="#4ADE80" />
            </SimpleGrid>
          </Group>
        </Card.Section>

        <Stack gap="md" pt="md">
          <TextInput
            label={<Text component="span" size="sm" fw={700}>Job title</Text>}
            placeholder="e.g., Accountant, Software Engineer, Welder"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.currentTarget.value)}
            required
          />

          <TagsInput
            label={
              <Group gap="xs" align="center">
                <Text size="sm" fw={700}>Keywords</Text>
                <Text size="xs" style={{ color: 'rgb(156, 169, 189)' }}>— skills, tools, or attributes</Text>
              </Group>
            }
            placeholder="CPA"
            value={keywords}
            onChange={setKeywords}
          />

          <Divider />

          <Group justify="space-between" align="center" wrap="wrap">
            <Checkbox
              label="Open to remote candidates"
              checked={remoteOpen}
              onChange={(e) => setRemoteOpen(e.currentTarget.checked)}
            />
            <Text size="xs" style={{ color: 'rgb(156, 169, 189)' }}>Expands your pool</Text>
          </Group>

          <Divider />

          <TextInput
            label={<Text size="sm" fw={700}>Location</Text>}
            placeholder="e.g., Detroit, Michigan - or leave blank for remote"
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value)}
          />

          <Button
            type="submit"
            fullWidth
            radius="md"
            leftSection={<IconSearch size={16} />}
            style={{ backgroundColor: 'rgb(45, 177, 255)', color: '#fff' }}
          >
            Run Talent Search
          </Button>

          <Group justify="center" align="center" wrap="wrap" gap="md">
            {['Free to search', 'No credit card', 'Pay only on accepts'].map((label) => (
              <Group key={label} gap="xs" align="center" wrap="nowrap">
                <IconCheck size={12} stroke={1.5} color="rgb(156, 169, 189)" />
                <Text size="xs" style={{ color: 'rgb(156, 169, 189)' }}>{label}</Text>
              </Group>
            ))}
          </Group>
        </Stack>
      </Card>
    </form>
  );
}

function TalentSearchFormRedesign() {
  const [jobTitle, setJobTitle] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [remoteOpen, setRemoteOpen] = useState(false);
  const [location, setLocation] = useState('');
  const tokens = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card radius="xl" withBorder shadow="lg" p="md" style={{ width: 390 }}>
        <Card.Section>
          <Group
            justify="space-between"
            align="center"
            wrap="nowrap"
            px="md"
            py="md"
            style={{ background: '#232B37' }}
          >
            <Stack gap={4} align="flex-start">
              <img src={hireScoreLogoGrey} alt="HireScore" style={{ height: 32, width: 'auto' }} />
              <Text size="md" fw={800} style={{ color: '#29ABE2', letterSpacing: '0.5px' }}>
                Find Talent
              </Text>
            </Stack>

            <Paper radius="md" p="xs" style={{ backgroundColor: 'rgba(255,255,255,0.07)', minWidth: 110 }}>
              <Stack gap={4} align="flex-end">
                <Group gap={6} align="baseline" wrap="nowrap">
                  <Title order={3} style={{ color: '#4ADE80', lineHeight: 1 }}>{tokens}</Title>
                  <Text size="xs" fw={600} style={{ color: '#4ADE80' }}>tokens</Text>
                </Group>
                <Progress size="sm" value={(tokens / 100) * 100} color="#4ADE80" w="100%" radius="xl" />
                <Text size="xs" style={{ color: 'rgba(255,255,255,0.4)' }}>resets daily</Text>
              </Stack>
            </Paper>
          </Group>
        </Card.Section>

        <Stack gap="md" pt="md">
          <TextInput
            label={<Text component="span" size="sm" fw={700}>Job title</Text>}
            placeholder="e.g., Accountant, Software Engineer, Welder"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.currentTarget.value)}
            required
          />

          <TagsInput
            label={
              <Group gap="xs" align="center">
                <Text size="sm" fw={700}>Keywords</Text>
                <Text size="xs" style={{ color: 'rgb(156, 169, 189)' }}>— skills, tools, or attributes</Text>
              </Group>
            }
            placeholder="CPA"
            value={keywords}
            onChange={setKeywords}
          />

          <Divider />

          <Group justify="space-between" align="center" wrap="wrap">
            <Checkbox
              label="Open to remote candidates"
              checked={remoteOpen}
              onChange={(e) => setRemoteOpen(e.currentTarget.checked)}
            />
            <Text size="xs" style={{ color: 'rgb(156, 169, 189)' }}>Expands your pool</Text>
          </Group>

          <Divider />

          <TextInput
            label={<Text size="sm" fw={700}>Location</Text>}
            placeholder="e.g., Detroit, Michigan - or leave blank for remote"
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value)}
          />

          <Button
            type="submit"
            fullWidth
            radius="md"
            leftSection={<IconSearch size={16} />}
            style={{ backgroundColor: 'rgb(45, 177, 255)', color: '#fff' }}
          >
            Run Talent Search
          </Button>

          <Group justify="center" align="center" wrap="wrap" gap="md">
            {['Free to search', 'No credit card', 'Pay only on accepts'].map((label) => (
              <Group key={label} gap="xs" align="center" wrap="nowrap">
                <IconCheck size={14} stroke={2} color="rgb(156, 169, 189)" />
                <Text size="sm" style={{ color: 'rgb(156, 169, 189)' }}>{label}</Text>
              </Group>
            ))}
          </Group>
        </Stack>
      </Card>
    </form>
  );
}

function FindTalentSection() {
  return (
    <Group justify="center" align="flex-start" gap="xl">
      <TalentSearchFormDev />
      <TalentSearchFormRedesign />
    </Group>
  );
}

// #endregion

// #region HireScore Branding

const brandColors = [
  { hex: "#59AFF9", name: "HireScore Blue" },
  { hex: "#222b37", name: "Dark Navy" },
  { hex: "#ffffff", name: "White" },
  { hex: "#D6D6D6", name: "Light Grey" },
  { hex: "#999999", name: "Middle Grey" },
  { hex: "#5a5a5a", name: "Dark Grey" },
  { hex: "#000000", name: "Black" }

  
];

function BrandColorSwatches() {
  const [copiedHex, setCopiedHex] = useState(null);

  function handleCopy(hex) {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  }

  return (
    <Group gap="lg" justify="space-between" grow>
      {brandColors.map((color) => (
        <Stack key={color.hex + color.name} align="center" gap={6}>
          <Box
            onClick={() => handleCopy(color.hex)}
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: 8,
              background: color.hex,
              cursor: "pointer",
              border: "1px solid rgba(0,0,0,0.1)",
              transition: "transform 0.1s",
            }}
            title={`Copy ${color.hex}`}
          />
          <Text size="xs" fw={600}>{color.name}</Text>
          <Text size="xs" c={copiedHex === color.hex ? "teal" : "dimmed"}>
            {copiedHex === color.hex ? "Copied!" : color.hex}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}

function HireScoreBrandingSection({ setActive }) {
  return (
    <>
      <Text>
        This page contains HireScore's branding assets and guidelines on how to use them.
        Follow these standards to ensure a consistent look and feel across all HireScore products.
      </Text>

      <Accordion multiple defaultValue={["logo", "colors", "typography", "icons", "tone"]}>

        <Accordion.Item value="logo">
          <Accordion.Control>
            <Title order={4}>Logo</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <Text>
                Use the HireScore logo
                consistently across all touchpoints. Do not alter the logo's proportions, colors,
                or add effects.
              </Text>
              <ExampleSection cols={2}>
                <Example caption="Use the black variant on white and light-colored backgrounds.">
                  <Image src={hirescoreLogoBlack} />
                  <a href={hirescoreLogoBlack} download="hireScoreLogo-black.svg">
                    <Button variant="light" size="xs" mt="sm">Download</Button>
                  </a>
                </Example>
                <Example caption="Use the grey variant on darker backgrounds.">
                  <Image src={hireScoreLogoGrey} />
                  <a href={hireScoreLogoGrey} download="hireScoreLogo-grey.svg">
                    <Button variant="light" size="xs" mt="sm">Download</Button>
                  </a>
                </Example>
              </ExampleSection>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="colors">
          <Accordion.Control>
            <Title order={4}>Colors</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <Text>Use these colors for documents/reports, marketing, and user interfaces.</Text>
              <Text>
                Note that these are <Text component="span" fs="italic">not</Text>{" "}
                <Text component="span" c="blue" style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => setActive("Colors")}>
                  semantic colors
                </Text>
                {" "}and do not carry any specific meanings when used in HireScore. 
              </Text>
              <BrandColorSwatches />
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="typography">
          <Accordion.Control>
            <Title order={4}>Typography</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Text>HireScore uses two main typefaces.</Text>
            <ExampleSection cols={2}>
              <Example caption={<>Use Helvetica Neue everywhere by default: navigation, content, and reports on HireScore.com, as well as body text in marketing materials and reports.<br /><br />Use any font weight and text decorations needed.</>}>
                <Stack gap="xs">
                  <Text style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }} size="xl" fw={700}>Helvetica Neue</Text>
                  <Text style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>A flexible, neutral typeface for all purposes</Text>
                </Stack>
              </Example>
              <Example caption={<>The HireScore logo is a modified version of Century Gothic. Use sparingly: only headings in marketing materials and client-facing reports. <br /><br />Always use extra-bold font weight for Century Gothic.</>}>
                <Stack gap="xs" align="flex-start" w="100%">
                  <Text style={{ fontFamily: "'Century Gothic', 'AppleGothic', sans-serif" }} size="xl" fw={900}>Century Gothic</Text>
                  <Text style={{ fontFamily: "'Century Gothic', 'AppleGothic', sans-serif" }} size="xl" fw={900}>A sharp, geometric typeface for headings</Text>
                </Stack>
              </Example>
            </ExampleSection>
          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </>
  );
}

// #endregion

// #region App
function App() {
  const [active, setActive] = useState("Colors");

  return (
    <AppShell navbar={{ width: 200, breakpoint: "sm" }} padding="md">
      <AppShell.Navbar p="md" style={{ overflowY: 'auto' }}>
        <Title order={4} mb="md">
          Style Guide
        </Title>
        {sections.map((section) =>
          section.children ? (
            <NavLink
              key={section.label}
              label={section.label}
              defaultOpened={section.children.some(c => c === active || (c.label === active) || (c.children && c.children.includes(active)))}
            >
              {section.children.map((child) =>
                typeof child === 'object' ? (
                  <NavLink
                    key={child.label}
                    label={child.label}
                    active={active === child.label}
                    defaultOpened={child.children.includes(active) || active === child.label}
                    onClick={() => setActive(child.label)}
                  >
                    {child.children.map((grandchild) => (
                      <NavLink
                        key={grandchild}
                        label={grandchild}
                        active={active === grandchild}
                        onClick={() => setActive(grandchild)}
                      />
                    ))}
                  </NavLink>
                ) : (
                  <NavLink
                    key={child}
                    label={child}
                    active={active === child}
                    onClick={() => setActive(child)}
                  />
                )
              )}
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
            {active === "Colors" && <ColorsSection />}
            {/* BUTTONS */}
            {active === "Buttons" && <ButtonsSection setActive={setActive} />}
            {/* LOADER */}
            {active === "Loader" && <LoaderSection />}
            {active === "Action Icon" && <ActionIconSection setActive={setActive} />}
            {active === "Badge" && <BadgeSection setActive={setActive} />}
            {/* INPUTS */}
            {active === "Text Input" && <TextInputSection />}
            {/* MODALS */}
            {active === "Modal" && <ModalSection />}
            {/* BREADCRUMBS */}
            {active === "Breadcrumbs" && <BreadcrumbsSection />}
            {/* NOTIFICATION */}
            {active === "Notification" && <NotificationSection />}
            {/* PAGINATION */}
            {active === "Pagination" && <PaginationSection />}
            {/* STEPPER */}
            {active === "Stepper" && <StepperSection />}
            {/* TOOLTIP */}
            {active === "Tooltip" && <TooltipSection />}
            {/* ICONS */}
            {active === "Icons" && <IconsSection />}
            {active === "Create/Edit Assessment" && <CreateEditAssessmentSection />}
            {active === "Candidate Perspective" && <CandidatePerspectiveSection />}
            {active === "Phase One" && <PhaseOneSection />}
            {active === "OA Report" && <OAReportSection />}
            {active === "Find Talent" && <FindTalentSection />}
            {active === "HireScore Branding" && <HireScoreBrandingSection setActive={setActive} />}
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

// #endregion


export default App;

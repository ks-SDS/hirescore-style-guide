import { AppShell, NavLink, Title, Text, Stack, Container, Table, Badge, ColorSwatch, SimpleGrid, Button, Loader, TextInput, Modal, Accordion, ActionIcon, Space, Divider } from '@mantine/core'
import { useState } from 'react'
import { IconTrash, IconAffiliate, IconChartAreaLine, IconMapPin, IconHelpCircle, IconInfoCircle, IconBell, IconFilter, IconArrowBigLeft, IconArrowDownBar, IconChevronDown, IconSettings} from '@tabler/icons-react'


const sections = [
  { label: 'Colors' },
  { label: 'Icons' },
  { label: 'Components', children: ['Action Icon', 'Badge', 'Buttons', 'Inputs', 'Loader', 'Modal'] },
]

const colorData = [
  { purpose: 'Primary Actions', colorName: 'blue', usage: 'Toggles, links, primary buttons, selected states', example: 'Filter options on a table, a highlighted/active menu item' },
  { purpose: 'Success/Completion', colorName: 'teal', usage: 'Confirmations, success messages, positive indicators', example: 'Saving edits to an assessment' },
  { purpose: 'Caution', colorName: 'orange', usage: 'Caution states, non-critical alerts', example: 'Clearing module data/scores from a Portal cycle' },
  { purpose: 'Error/Destruction', colorName: 'red', usage: 'Destructive actions, validation errors, critical alerts', example: 'Deleting button a module from a Portal cycle' },
  { purpose: 'Neutral/Informational', colorName: 'gray', usage: 'Disabled states, canceling actions, borders and text', example: '"Cancel" button to dismiss or back out of an action' },
]

const swatchData = [
  { name: 'blue', description: 'Blue does not carry a specific semantic meaning and it should not be used in situations where a semantic color is more appropriate. Use HireScore blue as the dominant color for primary actions, active/selected states, and important information.' },
  { name: 'teal', description: 'Use teal to signal the successful completion of a processes- eg, save buttons and confirmation messages. Teal can also indicate "good" metrics such as high test scores.' },
  { name: 'orange', description: 'Use orange for situations where the user should use caution, such as reversibly destructive actions (clearing/resetting scores, etc) or when a minor error has occurred. ' },
  { name: 'red', description: 'Use red for critical warnings- eg, to confirm irreversibly destructive actions or to tell the user about a major error. Red can also indicate "bad" metrics such as failing test scores.' },
  { name: 'gray', description: 'Use gray for user actions like canceling or backing out of a process. Use gray on interactible elements to indicate that they are disabled or unavailable. Other than these two cases, gray is neutral and should be used for most text and formatting elements (borders, etc).'}
]

const otherColorData = [
  'pink', 'grape', 'violet', 'indigo', 'cyan', 'green', 'lime', 'yellow',
]

const iconData = [
  { icon: <IconTrash size={40} />, name: 'trash', useCase: 'Permanently delete' },
  { icon: <IconAffiliate size={40} />, name: 'affiliate', useCase: 'Integrations/connections to other websites and systems' },
  { icon: <IconChartAreaLine size={40} />, name: 'chart-area-line', useCase: 'Cycle or organization-level analytics/stats' },
  { icon: <IconMapPin size={40} />, name: 'map-pin', useCase: 'Location' },
  { icon: <IconHelpCircle size={40} />, name: 'help-circle', useCase: 'Reserved for the Help button that lives in the top bar menu next to account info' },
  { icon: <IconInfoCircle size={40} />, name: 'info-circle', useCase: 'Information and explanatory text' },
  { icon: <IconBell size={40} />, name: 'bell', useCase: 'Account notifications' },
  { icon: <IconFilter size={40} />, name: 'filter', useCase: 'Table filter settings' },
]

function ExamplePair({ doContent, doCaption, dontContent, dontCaption }) {
  return (
    <SimpleGrid cols={2} spacing="sm">
      <Stack align="center" style={{ border: '2px solid var(--mantine-color-teal-6)', borderRadius: 8, padding: 16 }}>
        {doContent}
        <Text size="sm" c="dimmed" mt={4} ta="center">{doCaption}</Text>
      </Stack>
      <Stack align="center" style={{ border: '2px solid var(--mantine-color-red-6)', borderRadius: 8, padding: 16 }}>
        {dontContent}
        <Text size="sm" c="dimmed" mt={4} ta="center">{dontCaption}</Text>
      </Stack>
    </SimpleGrid>
  )
}

function App() {
  const [active, setActive] = useState('Colors')
  const [copied, setCopied] = useState(null)
  const [iconSearch, setIconSearch] = useState('')
  const [iconSortAsc, setIconSortAsc] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  function copyName(name) {
    navigator.clipboard.writeText(name)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <AppShell
      navbar={{ width: 200, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        <Title order={4} mb="md">Style Guide</Title>
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
          )
        )}
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size="md" py={40}>
          <Stack gap="xl">
            <Title order={1}>{active}</Title>
            {/* Colors */}
            {active === 'Colors' && (
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
                {swatchData.map(({ name, description }) => (
                  <div key={name}>
                    <Text fw={500} mb={4} tt="capitalize">{name}</Text>
                    <Text size="md" mb="xs">{description}</Text>
                    <SimpleGrid cols={10} spacing="xs">
                      {Array.from({ length: 10 }, (_, i) => (
                        <Stack key={i} gap={4} align="center">
                          <ColorSwatch color={`var(--mantine-color-${name}-${i})`} size={50} radius="sm" />
                          <Text size="md" c="dimmed">{i}</Text>
                        </Stack>
                      ))}
                    </SimpleGrid>
                  </div>
                ))}
                <div>
                  <Title order={3} mt="md" mb={4}>Other Colors</Title>
                  <Text size="md" mb="lg">These colors have no semantic meaning and should not be used for status indicators or actions. They are available for decorative purposes only, such as color-coding custom tags or labels.</Text>
                  {otherColorData.map((name) => (
                    <div key={name} mb="md">
                      <Text fw={500} mb={4} tt="capitalize">{name}</Text>
                      <SimpleGrid cols={10} spacing="xs" mb="sm">
                        {Array.from({ length: 10 }, (_, i) => (
                          <Stack key={i} gap={4} align="center">
                            <ColorSwatch color={`var(--mantine-color-${name}-${i})`} size={50} radius="sm" />
                            <Text size="md" c="dimmed">{i}</Text>
                          </Stack>
                        ))}
                      </SimpleGrid>
                    </div>
                  ))}
                </div>
                <div>
                  <Title order={3} mt="md" mb={4}>Do's and Don'ts</Title>
                  <SimpleGrid cols={2} spacing="md">
                    <div style={{ border: '2px solid var(--mantine-color-teal-6)', borderRadius: 8, padding: 16 }}>
                      <Text fw={700} c="teal" mb="xs">Do</Text>
                      <Text size="sm" c="dimmed">Placeholder: example of correct color usage.</Text>
                    </div>
                    <div style={{ border: '2px solid var(--mantine-color-red-6)', borderRadius: 8, padding: 16 }}>
                      <Text fw={700} c="red" mb="xs">Don't</Text>
                      <Text size="sm" c="dimmed">Placeholder: example of incorrect color usage.</Text>
                    </div>
                  </SimpleGrid>
                </div>
              </Stack>
            )}
            {/* Buttons */}
            {active === 'Buttons' && (
              <Accordion multiple defaultValue={['when-to-use', 'variants', 'labels', 'sections']}>
                <Accordion.Item value="when-to-use">
                  <Accordion.Control><Title order={3}>When to Use a Button vs a Link</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Table withBorder>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th>Use a Button (does something)</Table.Th>
                            <Table.Th>Use a hypertext link (navigates somewhere)</Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr><Table.Td>Create a new landing page</Table.Td><Table.Td>Visit an extant landing page</Table.Td></Table.Tr>
                          <Table.Tr><Table.Td>Save edits to an assessment</Table.Td><Table.Td>Navigate between the edit/preview/publish/pdfs tabs for an assessment</Table.Td></Table.Tr>
                          <Table.Tr><Table.Td>Generate/download a report</Table.Td><Table.Td>Visit the analytics page</Table.Td></Table.Tr>
                        </Table.Tbody>
                      </Table>
                      <Space h="xl"/>
                      <Text>A button semantically represents actions that modify the application state or launch an event.</Text>
                      <ExamplePair
                        doContent={<Button variant="filled" color="teal">Save Assessment</Button>}
                        doCaption="Yes! Saves data — modifies application state"
                        dontContent={<Button variant="filled">Analytics</Button>}
                        dontCaption="No! Navigation should use a link, not a button"
                      />
                      <Space h="xl"/>
                      <Text>Buttons should allow the user to do something as opposed to go somewhere. </Text>
                      <ExamplePair
                        doContent={<Button variant="filled" color="red" leftSection={<IconTrash size={20}/>}>Delete Module</Button>}
                        doCaption="Yes! Does something (deletes a module)"
                        dontContent={<Button variant="filled">Portal Home</Button>}
                        dontCaption="No! Goes somewhere — use a link instead"
                      />
                      <Space h="l"/>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="variants">
                  <Accordion.Control><Title order={3}>Variants</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text>By default, all buttons should use the filled variant.</Text>
                      <SimpleGrid cols={4} spacing="sm">
                        {['filled', 'light', 'outline', 'subtle', 'transparent', 'white', 'default'].map((variant) => (
                          <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Button variant={variant}>Button</Button>
                            <Text size="xs" c="dimmed" mt={4}>{variant}</Text>
                          </div>
                        ))}
                      </SimpleGrid>
                      <Space h="xl"/>
                      <Text>If there are multiple buttons on-screen that use the same color, items lower on the action hierarchy may be differentiated by using the light variant.</Text>
                      <ExamplePair
                        doContent={<div style={{ display: 'flex', gap: 8 }}><Button variant="filled" color="teal">Save</Button><Button variant="filled" color="gray">Cancel</Button><Button variant="filled" color="red">Delete</Button></div>}
                        doCaption="Yes! Buttons use the filled variant"
                        dontContent={<div style={{ display: 'flex', gap: 8 }}><Button variant="light" color="teal">Save</Button><Button variant="light" color="gray">Cancel</Button><Button variant="light" color="red">Delete</Button></div>}
                        dontCaption="No! Unnecessary use of the light variant"
                      />
                      <ExamplePair
                        doContent={<div style={{ display: 'flex', gap: 8 }}><Button variant="filled" color="blue">Add Question</Button><Button variant="light" color="blue">Add Answer</Button><Button variant="light" color="blue">Add Logic</Button></div>}
                        doCaption="Yes! Actions differentiated by hierarchy"
                        dontContent={<div style={{ display: 'flex', gap: 8 }}><Button variant="filled" color="blue">Add Question</Button><Button variant="filled" color="blue">Add Answer</Button><Button variant="filled" color="blue">Add Logic</Button></div>}
                        dontCaption="No! Actions have no differentiation"
                      />
                      <Space h="xl"/>
                      <Text>See the Colors section for guidance on choosing colors.</Text>
                      <ExamplePair
                        doContent={<Button variant="filled" color="teal">Save</Button>}
                        doCaption="Yes! Teal signals successful completion"
                        dontContent={<Button variant="filled" color="pink">Save</Button>}
                        dontCaption="No! Pink has no semantic meaning for this action"
                      />
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="labels">
                  <Accordion.Control><Title order={3}>Labels</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text>Buttons should always be labeled with text that clearly describes what the button does. </Text>
                      <ExamplePair
                        doContent={<Button variant="filled">Import Questions</Button>}
                        doCaption="Yes! Function is clearly described"
                        dontContent={<Button variant="filled">Import</Button>}
                        dontCaption="No! Function is unclear"
                      />
                      <Space h="xl"/>
                      <Text>Button labels should always be capitalized.</Text>
                      <ExamplePair
                        doContent={<Button variant="filled">Edit Scores</Button>}
                        doCaption="Yes! Text is capitalized"
                        dontContent={<Button variant="filled">Edit scores</Button>}
                        dontCaption="No! Text is not fully capitalized"
                      />
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="sections">
                  <Accordion.Control><Title order={3}>Sections</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text>Illustrative icons (images that depict objects or concepts) should go in the leftSection</Text>
                      <ExamplePair
                        doContent={<Button leftSection={<IconFilter size={20}/>} variant="filled">Filters</Button>}
                        doCaption="Yes! Icon in the leftSection"
                        dontContent={<Button rightSection={<IconFilter size={20}/>} variant="filled">Filters</Button>}
                        dontCaption="No! Icon in the rightSection"
                      />
                      <Space h="xl"/>
                      <Text>Arrows should go in the rightSection</Text>
                      <ExamplePair
                        doContent={<Button rightSection={<IconChevronDown size={20}/>} variant="filled">Cycle Actions</Button>}
                        doCaption="Yes! Dropdown arrow in the rightSection"
                        dontContent={<Button leftSection={<IconChevronDown size={20}/>} variant="filled">Button Label</Button>}
                        dontCaption="No! Dropdown arrow in the leftSection"
                      />
                      <Space h="xl"/>
                      <Text>Buttons should generally have an illustration or an arrow, not both. If a case comes up where you think a button needs both an icon and an arrow, discuss with other developers + project managers.</Text>
                      <ExamplePair
                        doContent={<Button variant="filled" leftSection={<IconTrash size={20}/>}>Delete</Button>}
                        doCaption="Yes! One icon, no arrow"
                        dontContent={<Button variant="filled" leftSection={<IconTrash size={20}/>} rightSection={<IconChevronDown size={20}/>}>Delete</Button>}
                        dontCaption="No! Has both an icon and an arrow"
                      />
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            )}
            {/* Loader */}
            {active === 'Loader' && (
              <>
                <Text>Loaders should always be <Text component="span" c="blue" fw={700}>HireScore blue</Text>.</Text>
                <SimpleGrid cols={2}>
                  <Stack align="center" style={{ border: '2px solid var(--mantine-color-teal-6)', borderRadius: 8, padding: 16 }}>
                    <Text>Use the Bars variant when loading/populating a table.</Text>
                    <Loader type="bars" />
                  </Stack>
                  <Stack align="center" style={{ border: '2px solid var(--mantine-color-teal-6)', borderRadius: 8, padding: 16 }}>
                    <Text>Use the Oval variant everywhere else.</Text>
                    <Loader type="oval" />
                  </Stack>
                </SimpleGrid>
              </>
            )}
            {active === 'Action Icon' && (
              <Stack gap="lg">
                <Text>Placeholder: add Action Icon guidelines here.</Text>
                <ExamplePair
                  doContent={<ActionIcon variant="filled"><IconTrash size={16} /></ActionIcon>}
                  doCaption="Yes! Placeholder correct usage"
                  dontContent={<ActionIcon variant="filled"><IconTrash size={16} /></ActionIcon>}
                  dontCaption="No! Placeholder incorrect usage"
                />
              </Stack>
            )}
            {active === 'Badge' && (
              <Stack gap="lg">
                <Text>Badges should be size medium.</Text>
                <ExamplePair
                  doContent={<Badge size="md">Lorem Ipsum Dolor Sit</Badge>}
                  doCaption="Yes! Size medium"
                  dontContent={<Badge size="xl">Lorem Ipsum Dolor Sit</Badge>}
                  dontCaption="No! Don't use a custom size"
                />
                <Text>Do not use radius options — the default radius (XL) is the one we want.</Text>
                <ExamplePair
                  doContent={<Badge>Lorem Ipsum Dolor Sit</Badge>}
                  doCaption="Yes! Default radius"
                  dontContent={<Badge radius="sm">Lorem Ipsum Dolor Sit</Badge>}
                  dontCaption="No! Don't use a custom radius"
                />
                <Text>When badges are used to display search filters, use the outline variant.</Text>
                <ExamplePair
                  doContent={<Badge variant="outline">Active Filter</Badge>}
                  doCaption="Yes! Outline variant for filters"
                  dontContent={<Badge variant="filled">Active Filter</Badge>}
                  dontCaption="No! Filled variant for filters"
                />
              </Stack>
            )}
            {active === 'Inputs' && (
              <Stack gap="lg">
                <Text>Placeholder: add Inputs guidelines here.</Text>
                <ExamplePair
                  doContent={<TextInput label="Placeholder correct usage" placeholder="e.g. example value" />}
                  doCaption="Yes! Placeholder correct usage"
                  dontContent={<TextInput placeholder="Placeholder incorrect usage" />}
                  dontCaption="No! Placeholder incorrect usage"
                />
              </Stack>
            )}
            {active === 'Modal' && (
              <>
                <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="This is a Modal!">
                  <Text>This is placeholder modal content! :)</Text>
                </Modal>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              </>
            )}
            {/* Icons Table */}
            {active === 'Icons' && (
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
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        Name {iconSortAsc ? '↑' : '↓'}
                      </Table.Th>
                      <Table.Th>Use Case</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {iconData
                      .filter((row) => {
                        const q = iconSearch.toLowerCase()
                        return row.name.toLowerCase().includes(q) || row.useCase.toLowerCase().includes(q)
                      })
                      .sort((a, b) => iconSortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
                      .map((row) => (
                        <Table.Tr
                          key={row.name}
                          onClick={() => copyName(row.name)}
                          style={{ cursor: 'pointer' }}
                        >
                          <Table.Td>{row.icon}</Table.Td>
                          <Table.Td>
                            {row.name}
                            {copied === row.name && <Badge ml="xs" color="green" size="sm">Copied!</Badge>}
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
  )
}

export default App

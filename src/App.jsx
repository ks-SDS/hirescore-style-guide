import { AppShell, NavLink, Title, Text, Stack, Container, Table, Badge, SimpleGrid, Button, Loader, TextInput, Modal, Accordion, ActionIcon, Space, Divider, Alert, Notification, Input, Pagination, Indicator } from '@mantine/core'
import { useState } from 'react'
import { IconTrash, IconAffiliate, IconChartAreaLine, IconMapPin, IconHelpCircle, IconInfoCircle, IconBell, IconFilter, IconArrowBigLeft, IconArrowDownBar, IconChevronDown, IconSettings, IconAlarm, IconAlertTriangle, IconX, IconLock, IconSearch } from '@tabler/icons-react'


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
  {
    name: 'blue',
    description: (
      <>
        <Text>Use HireScore blue as the dominant color for primary actions, active/selected states, and important information.</Text>
        <Text>Blue does not carry a specific semantic meaning and it should not be used in situations where a semantic color is more appropriate.</Text>
      </>
    ),
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! This button initiates an action">
          <Button variant="filled" color="blue">Add Filter</Button>
        </Example>
        <Example type="dont" caption="No! Buttons that complete actions should use teal">
          <Button variant="filled" color="blue">Save Assessment</Button>
        </Example>
        <Example type="do" caption="Yes! Blue indicates the current active page">
          <Pagination total={5}></Pagination>
        </Example>
        <Example type="dont" caption="No! Unread notifications should be indicated in Red">
          <Indicator color="blue">
            <IconBell size={25} color="gray" />
          </Indicator>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: 'teal',
    description: 'Use teal to signal the successful completion of a processes- eg, save buttons and confirmation messages. Teal can also indicate "good" metrics such as high test scores.',
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Teal indicates success or completion of a process">
          <Button variant="filled" color="teal">Save Assessment</Button>
        </Example>
        <Example type="dont" caption="No! Use Blue to initiate actions">
          <Button variant="filled" color="teal">Create Assessment</Button>
        </Example>
        <Example type="do" caption="Yes! Use Teal for confirmation messages">
          <Notification color="teal" title="Successfully Saved Changes">Your changes have been saved.</Notification>
        </Example>
        <Example type="dont" caption="No! Teal should not be used for poor/negative assessment scores">
          <Text fw={700} c="teal" style={{ backgroundColor: 'var(--mantine-color-teal-0)', padding: '2px 8px', borderRadius: 4 }}>-50</Text>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: 'orange',
    description: 'Use orange for situations where the user should use caution, such as reversibly destructive actions (clearing/resetting scores, etc) or when a minor error has occurred.',
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Orange used to caution the user">
          <Text ta="center" fw={500} p="sm" style={{
            backgroundColor: 'var(--mantine-color-yellow-1)',
            border: '1px solid var(--mantine-color-yellow-5)',
            borderRadius: 5,
            color: 'var(--mantine-color-yellow-9)',
          }}>
          This section of the system is a work-in-progress and is not ready to be used for deliverables. 
          </Text>
        </Example>
        <Example type="dont" caption="No! Orange should never be used for success messages">
          <Notification color="orange" title="Message Sent">Successfully sent emails to applicants</Notification>
        </Example>
        <Example type="do" caption="Yes! Orange used to indicate bugs/errors">
          <Button type="filled" color="orange">View Detected Issues</Button>
        </Example>
        <Example type="dont" caption="No! Orange should only be used for reversibly destructive actions like clearing">
          <Button type="filled" color="orange" leftSection={<IconTrash size={16} />}>Delete</Button>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: 'red',
    description: 'Use red for alerts critical warnings- eg, to indicate an unread notification, to confirm irreversibly destructive actions, or to tell the user about a major error. Red can also indicate "bad" metrics such as failing test scores and blocked actions',
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Red indicates destruction or deletion">
          <Button variant="filled" color="red" leftSection={<IconTrash size={16} />}>Delete Module</Button>
        </Example>
        <Example type="dont" caption="No! Reversibly clearing scores should use orange">
          <Button variant="filled" color="red" leftSection={<IconAlertTriangle size={16} />}>Clear Scores</Button>
        </Example>
        <Example type="do" caption="Yes! Red indicates a blocked/'illegal' action">
          <Notification color="red" title="Action not available">This action is not permitted for demo cycles</Notification>
        </Example>
        <Example type="dont" caption="No! Search filters should use blue">
          <Badge color="red" variant="outline" leftSection={<IconLock size={16} />} rightSection={<IconX size={16} />}>Status: Inactive</Badge>
        </Example>
      </ExampleSection>
    ),
  },
  {
    name: 'gray',
    description: 'Use gray for user actions like canceling or backing out of a process. Use gray on interactible elements to indicate that they are disabled or unavailable. Other than these two cases, gray is neutral and should be used for most text and formatting elements (borders, etc).',
    examples: (
      <ExampleSection cols={2}>
        <Example type="do" caption="Yes! Gray indicates canceling an action">
          <Button variant="filled" color="gray">Cancel</Button>
        </Example>
        <Example type="dont" caption="No! Gray cancels actions-- use teal for save buttons">
          <Button variant="filled" color="gray">Save Assessment</Button>
        </Example>
        <Example type="do" caption="Yes! Gray can be used for neutral purposes, like input labels/placeholders">
          <TextInput leftSection={<IconSearch size={16} />} placeholder="Search Applicants"></TextInput>
        </Example>
        <Example type="dont" caption="No! Loaders should always be blue">
          <Loader color="gray"></Loader>

        </Example>
      </ExampleSection>
    ),
  },
  {
    name: 'other colors',
    description: (
      <Stack gap="xs">
        <Text>The colors {['Pink','Grape','Violet','Indigo','Cyan','Green','Lime','Yellow'].map(c => (
          <Text key={c} component="span" style={{ backgroundColor: `var(--mantine-color-${c.toLowerCase()}-6)`, color: '#fff', padding: '1px 5px', borderRadius: 3 }}>{c}</Text>
        )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, i === 7 ? ', and ' : ', ', el], [])} are not assigned any particular semantic meaning and should not be used for any purpose already covered by blue, teal, orange, red, or gray.</Text>
        <Text>These colors may be used for data visualization, custom tags, and other cases where colors are arbitrary.</Text>
      </Stack>
    ),
  }
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

function WIPBanner() {
  return (
    <Text
      ta="center"
      fw={600}
      p="sm"
      style={{
        backgroundColor: 'var(--mantine-color-yellow-1)',
        border: '1px solid var(--mantine-color-yellow-5)',
        borderRadius: 5,
        color: 'var(--mantine-color-yellow-9)',
      }}
    >
      ⚠ Work in progress — this page is currently under construction
    </Text>
  )
}

function ExampleSection({ cols = 2, children }) {
  return (
    <SimpleGrid cols={cols} spacing="sm">
      {children}
    </SimpleGrid>
  )
}

function Example({ type, caption, children }) {
  const borderColor = type === 'do' ? 'teal' : type === 'dont' ? 'red' : 'gray'
  return (
    <Stack
      align="center"
      style={{
        border: `1px solid var(--mantine-color-${borderColor}-6)`,
        borderRadius: 5,
        padding: 16,
      }}
    >
      {children}
      {caption && <Text size="sm" c="dimmed" mt={4} ta="center">{caption}</Text>}
    </Stack>
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
            {/* COLORS */}
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
                <Accordion multiple defaultValue={['blue', 'teal', 'orange', 'red', 'gray', 'other colors']}>
                  {swatchData.map(({ name, description, examples }) => (
                    <Accordion.Item key={name} value={name}>
                      <Accordion.Control><Title order={3} tt="capitalize" c={name}>{name}</Title></Accordion.Control>
                      <Accordion.Panel>
                        <Stack gap="sm">
                          {description}
                          {examples}
                        </Stack>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                  <Accordion.Item value="other-colors">
                  </Accordion.Item>
                </Accordion>
              </Stack>
            )}
            {/* BUTTONS */}
            {active === 'Buttons' && (
              <Stack gap="lg">
                <WIPBanner />
              <Accordion multiple defaultValue={['when-to-use', 'variants', 'labels', 'sections']}>
                
                <Accordion.Item value="variants">
                  <Accordion.Control><Title order={3}>Variants</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text>Buttons should generally use the filled variant by default.</Text>
                      <Text>If there are multiple buttons on-screen that use the same <Text component="span" c="blue" style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setActive('Colors')}>color</Text>, items lower on the action hierarchy may be differentiated by using the light variant.</Text>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! Buttons use the filled variant">
                          <div style={{ display: 'flex', gap: 8 }}>
                            <Button variant="filled" color="teal">Save</Button>
                            <Button variant="filled" color="gray">Cancel</Button>
                            <Button variant="filled" color="red">Delete</Button>
                          </div>
                        </Example>
                        <Example type="dont" caption="No! Unnecessary use of the light variant">
                          <div style={{ display: 'flex', gap: 8 }}>
                            <Button variant="light" color="teal">Save</Button>
                            <Button variant="light" color="gray">Cancel</Button>
                            <Button variant="light" color="red">Delete</Button>
                          </div>
                        </Example>
                      </ExampleSection>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! Actions differentiated by hierarchy">
                          <div style={{ display: 'flex', gap: 8 }}>
                            <Button variant="filled" color="blue">Add Question</Button>
                            <Button variant="light" color="blue">Add Answer</Button>
                            <Button variant="light" color="blue">Add Logic</Button>
                          </div>
                        </Example>
                        <Example type="dont" caption="No! Actions have no differentiation">
                          <div style={{ display: 'flex', gap: 8 }}>
                            <Button variant="filled" color="blue">Add Question</Button>
                            <Button variant="filled" color="blue">Add Answer</Button>
                            <Button variant="filled" color="blue">Add Logic</Button>
                          </div>
                        </Example>
                      </ExampleSection>
                      <Space h="l" />
                      <Text>The outline, subtle, transparent, and "default" variants should be used to indicate links inline with text, or in circumstances where you need to indicate levels of hierarchy with buttons beyond filled and light.</Text>
                      <ExampleSection cols={6}>
                        <Example>
                          <Button variant="filled">Filled</Button>
                        </Example>
                        <Example>
                          <Button variant="light" >Light</Button>
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
                  <Accordion.Control><Title order={3}>Labels</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text>Buttons should always be labeled with text that clearly describes what the button does.</Text>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! Function is clearly described">
                          <Button variant="filled">Import Questions</Button>
                        </Example>
                        <Example type="dont" caption="No! Function is unclear">
                          <Button variant="filled">Import</Button>
                        </Example>
                      </ExampleSection>
                      <Space h="xl"/>
                      <Text>Button labels should always be capitalized.</Text>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! Text is capitalized">
                          <Button variant="filled">Edit Scores</Button>
                        </Example>
                        <Example type="dont" caption="No! Text is not fully capitalized">
                          <Button variant="filled">Edit scores</Button>
                        </Example>
                      </ExampleSection>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="sections">
                  <Accordion.Control><Title order={3}>Sections</Title></Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text>Illustrative <Text component="span" c="blue" style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setActive('Icons')}>icons</Text> (images that depict objects or concepts) should go in the leftSection</Text>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! Icon in the leftSection">
                          <Button leftSection={<IconFilter size={20}/>} variant="filled">Filters</Button>
                        </Example>
                        <Example type="dont" caption="No! Icon in the rightSection">
                          <Button rightSection={<IconFilter size={20}/>} variant="filled">Filters</Button>
                        </Example>
                      </ExampleSection>
                      <Space h="xl"/>
                      <Text>Arrows should go in the rightSection</Text>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! Dropdown arrow in the rightSection">
                          <Button rightSection={<IconChevronDown size={20}/>} variant="filled">Cycle Actions</Button>
                        </Example>
                        <Example type="dont" caption="No! Dropdown arrow in the leftSection">
                          <Button leftSection={<IconChevronDown size={20}/>} variant="filled">Button Label</Button>
                        </Example>
                      </ExampleSection>
                      <Space h="xl"/>
                      <Text>Buttons should generally have an illustration or an arrow, not both. If a case comes up where you think a button needs both an icon and an arrow, discuss with other developers + project managers.</Text>
                      <ExampleSection cols={2}>
                        <Example type="do" caption="Yes! One icon, no arrow">
                          <Button variant="filled" color="red" leftSection={<IconTrash size={20}/>}>Delete</Button>
                        </Example>
                        <Example type="dont" caption="No! Has both an icon and an arrow">
                          <Button variant="filled" color="red" leftSection={<IconTrash size={20}/>} rightSection={<IconChevronDown size={20}/>}>Delete</Button>
                        </Example>
                      </ExampleSection>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              </Stack>
            )}
            {/* LOADER */}
            {active === 'Loader' && (
              <>
                <Text>Loaders should always be <Text component="span" c="blue" fw={700}>HireScore blue</Text>.</Text>
                <Text>Use the Bars variant when loading/populating a table. Use the Oval variant everywhere else.</Text>
                <ExampleSection cols={2}>
                  <Example type="do" caption="For loading tables">
                    <Loader type="bars"></Loader>
                  </Example>
                  <Example type="do" caption="For loading everything that isn't a table">
                    <Loader type="oval"></Loader>
                  </Example>
                </ExampleSection>
              </>
            )}
            {active === 'Action Icon' && (
              <Stack gap="lg">
                <WIPBanner />
                <Text>Placeholder: add Action Icon guidelines here.</Text>
                <ExampleSection cols={2}>
                  <Example type="do" caption="Yes! Placeholder correct usage">
                    <ActionIcon variant="filled"><IconTrash size={16} /></ActionIcon>
                  </Example>
                  <Example type="dont" caption="No! Placeholder incorrect usage">
                    <ActionIcon variant="filled"><IconTrash size={16} /></ActionIcon>
                  </Example>
                </ExampleSection>
              </Stack>
            )}
            {active === 'Badge' && (
              <Stack gap="lg">
                <WIPBanner />
                <Text>Badges are elements that contain short, discrete pieces of information that you can read at a glance. Use cases include search filters and status indicators.</Text>
                <Accordion multiple defaultValue={['variants', 'labels', 'radius', 'size']}>
                  <Accordion.Item value="variants">
                    <Accordion.Control><Title order={4}>Variants</Title></Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>When badges are used to display search filters, use the outline variant. Include an "X" in the rightSection to close/clear the filter. Use the color Blue.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Correct variant, includes close button">
                            <Badge variant="outline" rightSection={<IconX size={16}/>}>Status: Active</Badge>
                          </Example>
                          <Example type="dont" caption="No! Wrong variant, no close button">
                            <Badge variant="filled">Status: Active</Badge>
                          </Example>
                        </ExampleSection>
                        <Space h="L" />
                        <Text>When badges are used to display status, use the Filled variant. Do not include a close button. Use the the correct semantic color, if applicable.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Semantic color use, no close button">
                            <Badge color="green" >Offer Accepted</Badge>
                          </Example>
                          <Example type="dont" caption="No! Incorrect color, should not have close button">
                            <Badge variant="outline" rightSection={<IconX size={16}/>}>Offer Accepted</Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="labels">
                    <Accordion.Control><Title order={4}>Labels</Title></Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>Badge labels/content should be as short as possible without removing any information.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! This badge label is succinct">
                            <Badge variant="outline" rightSection={<IconX size={16}/>}>Organization: ACME</Badge>
                          </Example>
                          <Example type="dont" caption="No! This badge contains more detail than necessary">
                            <Badge variant="outline" rightSection={<IconX size={16}/>}>Name of client organization: ACME</Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="radius">
                    <Accordion.Control><Title order={4}>Radius</Title></Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>Do not use radius options — the default radius (XL) is the one we want.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Default radius">
                            <Badge>Lorem Ipsum</Badge>
                          </Example>
                          <Example type="dont" caption="No! Don't use a custom radius">
                            <Badge radius="sm">Lorem Ipsum</Badge>
                          </Example>
                        </ExampleSection>
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                  <Accordion.Item value="size">
                    <Accordion.Control><Title order={4}>Size</Title></Accordion.Control>
                    <Accordion.Panel>
                      <Stack gap="sm">
                        <Text>Badges should be size medium.</Text>
                        <ExampleSection cols={2}>
                          <Example type="do" caption="Yes! Size medium">
                            <Badge size="md">Lorem Ipsum</Badge>
                          </Example>
                          <Example type="dont" caption="No! Don't use a custom size">
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
            {active === 'Inputs' && (
              <Stack gap="lg">
                <WIPBanner />
                <Text>Placeholder: add Inputs guidelines here.</Text>
                <ExampleSection cols={2}>
                  <Example type="do" caption="Yes! Placeholder correct usage">
                    <TextInput label="Placeholder correct usage" placeholder="e.g. example value" />
                  </Example>
                  <Example type="dont" caption="No! Placeholder incorrect usage">
                    <TextInput placeholder="Placeholder incorrect usage" />
                  </Example>
                </ExampleSection>
              </Stack>
            )}
            {/* MODALS */}
            {active === 'Modal' && (
              <>
                <WIPBanner />
                <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="This is a Modal!">
                  <Text>This is placeholder modal content! :)</Text>
                </Modal>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              </>
            )}
            {/* ICONS */}
            {active === 'Icons' && (
              <Stack gap="sm">
                <WIPBanner />
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

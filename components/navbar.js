import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// import Tasks for tasks tab
import Tasks from './Tasks';

export default function Navbar() {
    return (
        <Tabs variant="line" size="lg" align="center" >
            <TabList mb="1em">
                <Tab>Home</Tab>
                <Tab>Tasks</Tab>
                <Tab>Projects</Tab>
                <Tab>Calendar</Tab>
                <Tab>Notes</Tab>
            </TabList>

            <TabPanels>

                <TabPanel>
                    <p>Home</p>
                </TabPanel>

                <TabPanel>
                    <Tasks />
                </TabPanel>

                <TabPanel>
                    <p>Projects</p>
                </TabPanel>

                <TabPanel>
                    <p>Calendar</p>
                </TabPanel>

                <TabPanel>
                    <p>Notes</p>
                </TabPanel>

            </TabPanels>
        </Tabs>
    );
}
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Tabs variant="line" size="lg" align="center" >
            <TabList mb="1em">
                <Tab>Home</Tab>
                <Tab>Tasks</Tab>
                <Tab>Calendar</Tab>
                <Tab>Documents</Tab>
                <Tab>Inbox</Tab>
                <Tab>Profile</Tab>
            </TabList>

            <TabPanels>

                <TabPanel>
                    <p></p>
                </TabPanel>

                <TabPanel>
                    
                </TabPanel>

                <TabPanel>
                    <p></p>
                </TabPanel>

                <TabPanel>
                    <p></p>
                </TabPanel>

                <TabPanel>
                    <p></p>
                </TabPanel>

                <TabPanel>
                    <p></p>
                </TabPanel>

            </TabPanels>
        </Tabs>
    );
}
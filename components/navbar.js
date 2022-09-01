import { Tabs,
     TabList,
    TabPanels, 
    Tab, 
    TabPanel,

    } from "@chakra-ui/react";

export default function Navbar() {

    return (

        <Tabs variant="line" size="lg" align="center" >
            <TabList mb="1em">
                <Tab>Today</Tab>
                <Tab>Calendar</Tab>
                <Tab>Complete</Tab>

            </TabList>

            <TabPanels>

                <TabPanel>
                    <p></p>
                </TabPanel>

                <TabPanel>

                </TabPanel>

                <TabPanel>

                </TabPanel>

            </TabPanels>
        </Tabs>


    );
}
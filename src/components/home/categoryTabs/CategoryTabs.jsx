import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MarvelTabs from "./MarvelTabs";
import StarWarTabs from "./StarWarTabs";
import TransformersTabs from "./TransformersTabs";
import DCTabs from "./DCTabs";

const CategoryTabs = () => {
  return (
    <div className="md:py-10">
      <h2 className="text-center underline decoration-wavy decoration-yellow-300 underline-offset-4 pb-5 text-[#385a64] text-4xl font-semibold uppercase">
        Shop by category
      </h2>
      <div className="bg-[#00000023] px-10">
        <Tabs>
          <TabList>
            <Tab>
              <h2 className="text-red-600 font-bold text-xl md:text-2xl">Marvel</h2>
            </Tab>
            <Tab>
              <h2 className="text-red-600 font-bold text-xl md:text-2xl">Star Wars</h2>
            </Tab>
            <Tab>
              <h2 className="text-red-600 font-bold text-xl md:text-2xl">Transformers</h2>
            </Tab>
            <Tab>
              <h2 className="text-red-600 font-bold text-xl md:text-2xl">DC</h2>
            </Tab>
          </TabList>

          <TabPanel>
            <MarvelTabs></MarvelTabs>
          </TabPanel>
          <TabPanel>
            <StarWarTabs></StarWarTabs>
          </TabPanel>
          <TabPanel>
            <TransformersTabs></TransformersTabs>
          </TabPanel>
          <TabPanel>
            <DCTabs></DCTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryTabs;

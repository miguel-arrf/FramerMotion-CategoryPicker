// Dependencies
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { initialTabs as tabs } from "./ingredients";

// Styles
import "./tailwind.output.css";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className=" h-screen bg-black text-white">
      <div className="p-10 rounded-lg flex  ">
        <div className="bg-black p-3 rounded-lg  text-center w-full">
          <div className="p-1 bg-white rounded-lg ">
            <motion.div
              animate={{ backgroundColor: selectedTab.color }}
              className="flex rounded-lg justify-center content-center"
            >
              <motion.div
                className=" rounded-lg p-2 border-2"
                key={selectedTab.label}
                layoutId={selectedTab.label}
                layout="position"
                animate={{
                  borderColor: selectedTab.color
                }}
              >
                {selectedTab.icon}
              </motion.div>
            </motion.div>
          </div>

          <div className="  p-3 rounded-lg flex flex-wrap w-full justify-center content-center  bg-black rounded mt-5">
            {tabs.map((item) => (
              <div
                className={`p-2 ${item === selectedTab ? "hidden" : ""} `}
                key={item === selectedTab ? "null" : item.label + " eheh"}
              >
                {item !== selectedTab ? (
                  <motion.div
                    key={item.label}
                    animate={{
                      backgroundColor: item.colorOpacity,
                      borderColor: item.color
                    }}
                    onClick={() => setSelectedTab(item)}
                    layoutId={item.label}
                    layout="position"
                    className="  rounded-lg outline-white p-2   border-2"
                  >
                    {item.icon}
                  </motion.div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Dependencies
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { initialTabs as tabs } from "./ingredients.ts";

// Styles
import "./tailwind.output.css";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className=" h-screen bg-black text-white">
      <div className=" ">
        <motion.div layout key={"heheAmigo"}>
          <div className="relative overflow-hidden  md:pt-20 lg:pb-20 md:pb-14 sm:p-0 bg-black">
            <div className="lg:container lg:mx-auto">
              <div className="grid items-center grid-cols-1 md:grid-cols-12 md:gap-8 lg:gap-10 xl:gap-28 ">
                <div className="col-span-10 col-start-2 px-4 py-10  transition secondBlock md:rounded-2xl sm:py-10 md:py-16 bg-custom-blue dark:bg-gray-800 rounded-xl">
                  <div
                    className="grid sm:grid-cols-3 grid-cols-1 gap-y-4 sm:gap-4 rounded-lg p-4"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="z-20 col-span-1 rounded-lg  w-full  rounded flex flex-col gap-4">
                      {tabs.map((item) => (
                        <div
                          className={` ${
                            item === selectedTab ? "hidden" : ""
                          } `}
                        >
                          <motion.div
                            key={item.label}
                            animate={{
                              backgroundColor: item.colorOpacity,
                              borderColor: item.colorOpacity
                            }}
                            onClick={() => setSelectedTab(item)}
                            layoutId={item.label}
                            layout="position"
                            className={`  rounded-lg  p-2   border-2 text-${item.textColor}`}
                          >
                            {item.icon}
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="z-10 p-1 col-span-2 rounded-lg "
                      style={{ backgroundColor: "#333333" }}
                    >
                      <motion.div
                        className={`flex rounded-lg justify-center content-center flex-col gap-4 p-3`}
                      >
                        <motion.div
                          className={`rounded-lg p-2 w-full text-${selectedTab.textColor} border-2`}
                          key={selectedTab.label}
                          layoutId={selectedTab.label}
                          layout="position"
                          animate={{
                            backgroundColor: selectedTab.colorOpacity,
                            borderColor: selectedTab.colorOpacity
                          }}
                        >
                          {selectedTab.icon}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          key={selectedTab.label + " component"}
                          layoutId={selectedTab.label + " component"}
                          layout="position"
                          transition={{ duration: 0.3 }}
                        >
                          <selectedTab.component />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

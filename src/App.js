// Dependencies
import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { initialTabs as tabs } from "./ingredients.ts";

// Styles
import "./tailwind.output.css";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className=" h-screen bg-black text-white">
      <div className=" ">
        <motion.div layout="scale">
          <div className="relative overflow-hidden  md:pt-20 lg:pb-20 md:pb-14 sm:p-0 bg-black">
            <div className="lg:container lg:mx-auto">
              <div className="grid items-center grid-cols-1 md:grid-cols-12 md:gap-8 lg:gap-10 xl:gap-28 ">
                <div className=" col-span-10 col-start-2 px-4 py-10  transition secondBlock md:rounded-2xl sm:py-10 md:py-16  rounded-xl">
                  <div
                    className="grid sm:grid-cols-3 grid-cols-1 gap-y-4 sm:gap-4 rounded-lg p-4"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="z-20 col-span-1 rounded-lg  w-full  rounded flex flex-col gap-4">
                      {tabs.map((item, index) => (
                        <div key={index}>
                          <motion.div
                            key={item.label + "_background"}
                            style={{
                              backgroundColor: item.colorOpacity,
                              borderColor: item.colorOpacity,
                              fontWeight: item === selectedTab ? "800" : "400",
                              color:
                                item === selectedTab
                                  ? "rgb(255,255,255)"
                                  : item.textColor
                            }}
                            animate={{
                              backgroundColor:
                                item === selectedTab
                                  ? item.color
                                  : item.colorOpacity,
                              borderColor: item.colorOpacity
                            }}
                            onClick={() => setSelectedTab(item)}
                            layoutId={item.label + "_background"}
                            whileHover={{
                              backgroundColor: item.color,
                              color: "rgb(255,255,255)"
                            }}
                            className={` group rounded-lg  p-2   border-2 `}
                          >
                            <div
                              key={item.label + "_text"}
                              className={`whitespace-pre-wrap transition-all group-hover:text-white `}
                              layout="position"
                            >
                              {item.icon}
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    <motion.div
                      layout="scale"
                      key={"4"}
                      layoutId={"5"}
                      className="z-10 p-1 col-span-2 rounded-lg p-3"
                      style={{ backgroundColor: "#333333" }}
                    >
                      <AnimatePresence exitBeforeEnter>
                        <motion.div
                          animate={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 20 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.15 }}
                          key={selectedTab.label + " component"}
                          layout
                        >
                          <selectedTab.component />
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
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

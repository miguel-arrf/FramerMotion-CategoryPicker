// Dependencies
import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { initialTabs as tabs } from "./ingredients.ts";
import { AnimateHeight } from "./AnimateHeight";

// Styles
import "./tailwind.output.css";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const [selectedTabs, setSelectedTabs] = useState([true, false, false]);

  const [firstIsSelected, setFirstSelected] = useState(true);
  const [secondIsSelected, setSecondSelected] = useState(false);
  const [thirdIsSelected, setThirdSelected] = useState(false);

  function changeTest(values) {
    setSelectedTabs(values);
    console.log(selectedTabs);
  }

  function setTheFirst() {
    setFirstSelected(true);
    setSecondSelected(false);
    setThirdSelected(false);
  }

  function setTheSecond() {
    setFirstSelected(false);
    setSecondSelected(true);
    setThirdSelected(false);
  }

  function setTheThird() {
    setFirstSelected(false);
    setSecondSelected(false);
    setThirdSelected(true);
  }

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      x: 0
    },
    collapsed: { opacity: 1, height: "auto", x: 30 }
  };

  return (
    <div className=" h-screen bg-black text-white">
      <motion.div className=" ">
        <motion.div layout="scale">
          <motion.div
            layout
            className="relative overflow-hidden  md:pt-20 lg:pb-20 md:pb-14 sm:p-0 bg-black"
          >
            <motion.div layout className="lg:container lg:mx-auto">
              <motion.div
                layout
                className="grid items-center grid-cols-1 md:grid-cols-12 md:gap-8 lg:gap-10 xl:gap-28 "
              >
                <motion.div
                  layout
                  className=" col-span-10 col-start-2 px-4 py-10  transition secondBlock md:rounded-2xl sm:py-10 md:py-16  rounded-xl"
                >
                  <motion.div
                    layout
                    className="grid sm:grid-cols-3 grid-cols-1 gap-y-4 sm:gap-4 rounded-lg p-4"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <motion.div
                      layout
                      className="z-20 col-span-1 rounded-lg  w-full  rounded flex flex-col gap-4"
                    >
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
                            onClick={() => {
                              setSelectedTab(item);
                              if (index === 0) {
                                changeTest([true, false, false]);
                                setTheFirst();
                              } else if (index === 1) {
                                changeTest([false, true, false]);
                                setTheSecond();
                              } else {
                                changeTest([false, false, true]);
                                setTheThird();
                              }
                            }}
                            layoutId={item.label + "_background"}
                            whileHover={{
                              backgroundColor: item.color,
                              color: "rgb(255,255,255)"
                            }}
                            className={` group rounded-lg  p-2   border-2 transition-all duration-100`}
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
                    </motion.div>

                    <motion.div
                      layout="scale"
                      key={"4"}
                      layoutId={"5"}
                      className="z-10 p-1 col-span-2 rounded-lg p-3"
                      style={{ backgroundColor: "#333333" }}
                    >
                      {tabs.map((item, index) => (
                        <div key={item + "--tt--" + index}>
                          {item === selectedTab && (
                            <AnimatePresence exitBeforeEnter>
                              <motion.div
                                animate={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -20 }}
                                exit={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.15 }}
                                key={selectedTab.label + "_component"}
                                layout
                                layoutId={selectedTab.label + "_component"}
                              >
                                <selectedTab.component
                                  key={selectedTab.label + "_inner_component"}
                                />
                              </motion.div>
                            </AnimatePresence>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

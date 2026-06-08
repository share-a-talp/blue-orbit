import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TabMain     from "./components/tabs/TabMain";
import TabProblem  from "./components/tabs/TabProblem";
import TabProcess  from "./components/tabs/TabProcess";
import TabServices from "./components/tabs/TabServices";
import TabCTA      from "./components/tabs/TabCTA";
import TabContact  from "./components/tabs/TabContact";
import "./styles/layout.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("main");

  function switchTab(id) {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goContact() {
    switchTab("contact");
  }

  return (
    <>
      <Header activeTab={activeTab} onSwitch={switchTab} />
      <main className="bo-main">
        {activeTab === "main"     && <TabMain     onContact={goContact} />}
        {activeTab === "problem"  && <TabProblem  />}
        {activeTab === "process"  && <TabProcess  />}
        {activeTab === "services" && <TabServices />}
        {activeTab === "cta"      && <TabCTA      onContact={goContact} />}
        {activeTab === "contact"  && <TabContact  />}
      </main>
      <Footer />
    </>
  );
}

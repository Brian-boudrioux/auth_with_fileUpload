import Header from "../../components/Header/Header";
import LabTabs from "../../components/Tab2/Tab2";
import "./Subscriptions.css";

function Subscriptions() {
  const isMobile = window.innerWidth < 1024;
  return (
    <main className="container_Body_Sub">
      {isMobile ? (
        <div className="container_Header_Sign">
          <img
            id="logo_Sign"
            src="src/assets/logoprin.png"
            alt="logo_Overview"
          />
        </div>
      ) : (
        <Header />
      )}
      <div className="container_Title_Sub">
        <h1 className="title_Sub">SUBSCRITIONS</h1>
      </div>
      <div className="container_Tab_Sub">
        <LabTabs className="tab_Sub" />
      </div>
    </main>
  );
}

export default Subscriptions;

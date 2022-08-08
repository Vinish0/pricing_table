import "./App.css";
import Table from "./Table";

function App() {
  const freeMember = {
    member:"FREE",
    price:0,
    user: "Single User",
    storage: "5GB Storage",
    publicProjects : "Unlimited Public Projects",
    access : "Community Access",
    privateProjects : "Unlimited Private Projects",
    support : "Dedicated Phone Support",
    domain : "Free Subdomain",
    statusReport : "Monthly Status Reports",
    
  }
  const plusMember = {
    member:"PLUS",
    price:9,
    user: "5 User",
    storage: "50GB Storage",
    publicProjects : "Unlimited Public Projects",
    access : "Community Access",
    privateProjects : "Unlimited Private Projects",
    support : "Dedicated Phone Support",
    domain : "Free Subdomain",
    statusReport : "Monthly Status Reports",
    highlight : true
  }
  const proMember = {
    member:"PRO",
    price:49,
    user: "Unlimited User",
    storage: "150GB Storage",
    publicProjects : "Unlimited Public Projects",
    access : "Community Access",
    privateProjects : "Unlimited Private Projects",
    support : "Dedicated Phone Support",
    domain : "Unlimited Free Subdomain",
    statusReport : "Monthly Status Reports",
    highlight : true
  }
  return (
    <div className="container mt-5">
    <section className="pricing p-5">
      <div className="container">
        <div className="row">
          <Table member = {freeMember}/>
          <Table member = {plusMember}/>
          <Table member = {proMember}/>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;

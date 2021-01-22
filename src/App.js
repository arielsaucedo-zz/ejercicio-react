import './App.css';

import Admin from "./components/Sidebar/Admin"
import NavItemDashboard from "./components/Sidebar/NavItemDashboard";
import Heading from "./components/Sidebar/Heading"
import NavItemPage from "./components/Sidebar/NavItemPages"
import NavItemCharts from "./components/Sidebar/NavItemcharts"
import NavItemTables from "./components/Sidebar/NavItemTables"
import SidebarToggle from "./components/TopBar/SidebarToggle"
import NavItemAlert from "./components/TopBar/NavItemAlert"
import NavItemMessages from './components/TopBar/NavItemMessages';
import NavItemUser from './components/TopBar/NavItemUser';
import PageHeading from "./components/PageContent/PageHeading";
import CardDB from "./components/PageContent/CardDB";
import LastProductDB from './components/PageContent/LastProductDB';
import TitleCategories from './components/PageContent/TitleCategories';
import CategoriesDB from './components/PageContent/CategoriesDB';
import Footer from "./components/Footer"
import TableHead from './components/Table/TableHead';
import TableFoot from './components/Table/TableFoot';
import TableBody from "./components/Table/TableBody";

const infoCard = [
  {
    titulo: "Products in Data Base" ,
    cifra: "135" ,
    border: "card border-left-primary shadow h-100 py-2" ,
    icono: "fas fa-clipboard-list fa-2x text-gray-300",
  },
  {
    titulo: "Amount in products" ,
    cifra: "$546.456" ,
    border: "card border-left-success shadow h-100 py-2" ,
    icono: "fas fa-dollar-sign fa-2x text-gray-300",
  },
  {
    titulo: "Users quantity" ,
    cifra: "38",
    border: "card border-left-warning shadow h-100 py-2" ,
    icono: "fas fa-user-check fa-2x text-gray-300",
  },
  
]

const categoryTitle = ["Category 01", "Category 02", "Category 03", "Category 04", "Category 05", "Category 06"];

const InfoTable = [
  {
    name: "Tiger Nixon" ,
    description: "System Architect" ,
    price: "$320,800",
    categories: {
      id1:"Category 01",
      id2:"Category 02",
      id3: "Category 03",
    },
    colors: {
      c1: "Red",
      c2: "Blue",
      c3: "Green",
    },
    stock: "245",
  },
  {
    name: "Jane Doe" ,
    description: "Fullstack developer" ,
    price: "$320,800",
    categories: {
      id1:"Category 01",
      id2:"Category 02",
      id3: "Category 03",
    },
    colors: {
      c1: "Red",
      c2: "Blue",
      c3: "Green",
    },
    stock: "245",
  },
]

function App() {
  return (
    <main>
      <div id="wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <Admin />
          <hr className="sidebar-divider my-0"></hr>
          <NavItemDashboard />
          <hr className="sidebar-divider"></hr>
          <Heading />
          <NavItemPage />
          <NavItemCharts />
          <NavItemTables />
          <hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>
      
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <SidebarToggle />
            <ul className="navbar-nav ml-auto">
              <NavItemAlert />
              <NavItemMessages />
              <div className="topbar-divider d-none d-sm-block"></div>
              <NavItemUser />
            </ul>
          </nav>
          {/* End of Topbar  */}

          {/* Begin Page Content */}
          <div className="container-fluid">
            <PageHeading />
              <CardDB
              items = {infoCard}/>
        
          {/* Content Row */}
          <div className="row">
            <LastProductDB />
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <TitleCategories />
                <div className="card-body">
                    <CategoriesDB
                     titles = {categoryTitle}/>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCTS LIST */}
          <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
          
          {/* DataTales Example */}
          <div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <TableHead />
                <TableFoot />
                <TableBody 
                table = {InfoTable}/>
              </table>
              </div>
            </div>
          </div>
          </div>    
          <Footer />
        </div>
      </div>
      </div>
    </main>
  );
}

export default App;

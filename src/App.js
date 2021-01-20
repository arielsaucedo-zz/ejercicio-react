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


function App() {
  return (
    <body>
      <div id="wrapper">
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <Admin />
          <hr class="sidebar-divider my-0"></hr>
          <NavItemDashboard />
          <hr class="sidebar-divider"></hr>
          <Heading />
          <NavItemPage />
          <NavItemCharts />
          <NavItemTables />
          <hr class="sidebar-divider d-none d-md-block"></hr>
        </ul>
      
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <SidebarToggle />
            <ul class="navbar-nav ml-auto">
              <NavItemAlert />
              <NavItemMessages />
              <NavItemUser />
            </ul>
          </nav>
          <div class="container-fluid">
            <PageHeading />
            <div class="row">
              <CardDB />
              <CardDB />
              <CardDB />
            </div>
          </div>
          <div class="row">
            <LastProductDB />
            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <TitleCategories />
                <div class="card-body">
                  <div class="row">
                    <CategoriesDB />
                    <CategoriesDB />
                    <CategoriesDB />
                    <CategoriesDB />
                    <CategoriesDB />
                    <CategoriesDB />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      </div>
    </body>
  );
}

export default App;

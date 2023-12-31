import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, logo_icon } from "../../../assets/images";
import "./sidebar.css";

export default function Sidebar() {
  // Location object
  const location = useLocation();
  // Sidebar links
  const SidebarLinks = useMemo(
    () => [
      {
        linkTitle: "Dashboard",
        url: "/dashboard",
        fa_icon: "fas fa-fw fa-tachometer-alt"
      },
      {
        linkTitle: "Lend",
        url: "/lend",
        fa_icon: "fas fa-wallet"
      },
      {
        linkTitle: "Borrow",
        url: "/borrow",
        fa_icon: "fas fa-exchange-alt"
      },
      {
        linkTitle: "Transactions",
        url: "/transactions",
        fa_icon: "fas fa-server"
      }
    ],
    []
  );

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* TODO change a tag to React Navlink tag */}
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center hide-one-mobile"
        to="/"
      >
        <span>
          <div className="sidebar-brand-icon rotate-n-15 mt-4">
            <img
              src={logo_icon}
              alt="MutliVSA"
              className="img-fluid logo-icon"
            />
          </div>
          <div className="sidebar-brand-text mx-3">
            <span>MultiVSA</span>
          </div>
        </span>
      </Link>
      {/* Nav Item - Dashboard */}
      {SidebarLinks.map(linkItem => {
        return (
          <li
            key={`${linkItem.fa_icon}`}
            className={`nav-item ${
              location.pathname === linkItem.url ? "active" : ""
            }`}
          >
            <Link className="nav-link" to={linkItem.url}>
              <span>
                <i className={linkItem.fa_icon} />
                <span>{linkItem.linkTitle}</span>
              </span>
            </Link>
          </li>
        );
      })}
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline sideBarToggle">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
}

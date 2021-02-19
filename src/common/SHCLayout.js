import React from 'react';
import './shc-layout.scss';

const SHCLayout = ({ Sidebar, Header, Content }) => (
  <div className="shc-layout-container">
    <div className="shc-layout-sidebar">{Sidebar}</div>
    <div className="shc-layout-not-sidebar">
      <div className="shc-layout-header">{Header}</div>
      <div className="shc-layout-contents">{Content}</div>
    </div>
  </div>
);

export default SHCLayout;

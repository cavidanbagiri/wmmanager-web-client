// NavIcon.jsx
import React from 'react';
import { Link, useMatch } from "react-router-dom";
import Tooltip from './Tooltip';

function NavIcon({ to, icon: Icon, label }) {
  const match = useMatch(to);

  return (
    <Tooltip text={label}>
      <Link to={to}>
        <div className={`my-3 text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg ${match ? 'bg-slate-500' : ''}`}> 
          <Icon className={`text-3xl ${match ? 'text-orange-400' : ''}`} />
        </div>
      </Link>
    </Tooltip>
  );
}

export default NavIcon;
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div>
        <input className="shadow-sm rounded-full bg-slate-100 px-4 py-1" type="text" placeholder="Type..." />
      </div>
    </div>
  );
}

export default Header;

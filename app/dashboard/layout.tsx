import React from "react";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { navItems } from "@/resources/navItems";



const Layout = async({ children }: { children: React.ReactNode }) => {
 const session = await getServerSession(authOptions)

  if(!session?.user.accessToken){
    redirect("/")
  }

  return (
    <div className="flex">
      <div>
        <Sidebar navItems={navItems} />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4 bg-[#0D1218]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

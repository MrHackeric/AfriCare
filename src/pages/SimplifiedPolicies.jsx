import React, {useState} from "react";
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ChartArea from "../partials/dashboard/ChartArea";
import Chatbot from "../partials/dashboard/Chatbot";

function SimplifiedPolicies () {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(
        <div className="flex h-screen overflow-hidden">
            
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        {/* Dashboard actions */}
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                            {/* Right: Actions */}
                            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">                          
                            </div>
                        </div>
                        
                        {/* Cards */}
                        <div className="grid grid-cols-12 gap-6">
                            <ChartArea />
                            <Chatbot />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default SimplifiedPolicies;
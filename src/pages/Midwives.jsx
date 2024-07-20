import React, { useState } from "react";
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Chatbot from "../partials/dashboard/Chatbot";
import Confetti from 'react-confetti';

// Module components
import BasicMaternalHealthCareModule from "../partials/dashboard/MidwivesModule1";
import HighRiskPregnanciesModule from "../partials/dashboard/MidwivesModule2";
import LaborAndDeliveryModule from "../partials/dashboard/MidwivesModule3";
import PostpartumCareModule from "../partials/dashboard/MidwivesModule4";
import ComplicationsAndEmergencyCareModule from "../partials/dashboard/MidwivesModule5";
import MaternalNutritionAndLifestyleModule from "../partials/dashboard/MidwivesModule6";
import PrenatalAndPostnatalMentalHealthModule from "../partials/dashboard/MidwivesModule7";
import MidwivesTrainingModule from "../partials/dashboard/MidwivesTrain";
import AdvancedMidwivesTrainingModule from "../partials/dashboard/MidwivesResources";

function Midwives() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState(1);

  const handleNext = () => {
    if (currentModule < 9) { // Change to 9 for the total number of modules
      setCurrentModule(currentModule + 1);
    }
  };

  const handleBack = () => {
    if (currentModule > 1) {
      setCurrentModule(currentModule - 1);
    }
  };

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <BasicMaternalHealthCareModule />;
      case 2:
        return <HighRiskPregnanciesModule />;
      case 3:
        return <LaborAndDeliveryModule />;
      case 4:
        return <PostpartumCareModule />;
      case 5:
        return <ComplicationsAndEmergencyCareModule />;
      case 6:
        return <MaternalNutritionAndLifestyleModule />;
      case 7:
        return <PrenatalAndPostnatalMentalHealthModule />;
      case 8:
        return <MidwivesTrainingModule />;
      case 9:
        return <AdvancedMidwivesTrainingModule />;
      default:
        return <AdvancedMidwivesTrainingModule />;
    }
  };

  // Calculate progress percentage
  const progress = ((currentModule - 1) / 8) * 100; // Adjust calculation to 8

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Fixed Progress Bar */}
        <div className="fixed top-0 left-0 w-full bg-gray-200 dark:bg-gray-700 h-2 z-50">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <main className="relative flex-1 pt-2">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full h-full">
            {/* Top Buttons */}
            <div className="mb-4 flex justify-between">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={handleBack}
                disabled={currentModule === 1}
              >
                Back
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleNext}
                disabled={currentModule === 9} // Update to 9 for the last module
              >
                Next
              </button>
            </div>

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add any actions here if needed */}
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 h-full">
              <div className="col-span-full sm:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5 relative">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Midwives Training Modules</h2>
                {renderModule()}

                {/* Congratulations Message */}
                {currentModule === 9 && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center bg-white dark:bg-slate-800 z-10">
                    <Confetti />
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg z-20">
                      <h1 className="text-2xl font-bold text-green-500 mb-4">Congratulations!</h1>
                      <p className="text-lg text-slate-800 dark:text-slate-100">
                        You've completed all the training modules!
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <Chatbot className="col-span-full sm:col-span-12" />
            </div>

            {/* Bottom Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={handleBack}
                disabled={currentModule === 1}
              >
                Back
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleNext}
                disabled={currentModule === 9} // Update to 9 for the last module
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Midwives;
import { JSX } from "react";
import InstancesList from "./instancesList";
import React from "react";
// Define the base instance interface
interface BaseInstance {
    id: string | number;
    [key: string]: any; // Allow for flexible additional properties
  }
  
  // Interface for instances with status indicators
  interface StatusInstance extends BaseInstance {
    hasStatus?: boolean;
    hasError?: boolean;
    name: string;
  }

export default function InstancesMain(): JSX.Element {
    // Define types for our specific data structures
    interface DbInstance extends StatusInstance {
      name: string;
      hasError: boolean;
      hasStatus: boolean;
    }
    
    interface SilkInstance extends BaseInstance {
      endpoint: string;
      status: string;
    }
    
    // SkiDB example
    const dbInstances: DbInstance[] = [
      { id: "0x1", name: "StudentDB", hasError: false, hasStatus: true },
      { id: "0x2", name: "Muath DB", hasError: true, hasStatus: true }
    ];
    
    // Silk example
    const silkInstances: SilkInstance[] = [
      { id: "srv1", endpoint: "api.example.com", status: "active" },
      { id: "srv2", endpoint: "admin.example.com", status: "maintenance" }
    ];
    
    const handleAddClick = (type: string): void => {
      console.log(`Add ${type} clicked`);
      // Add your instance creation logic here
    };
    
    // Custom render function for Silk items
    const renderSilkItem = (item: SilkInstance, index: number, total: number): JSX.Element => (
      <React.Fragment key={item.id}>
        <div className="flex items-center justify-between py-2">
          <div>
            <span className="font-bold">{item.id}</span>
            <span className="ml-2 text-gray-600">{item.endpoint}</span>
          </div>
          <div className="text-xs px-2 py-1 rounded bg-gray-100">
            {item.status}
          </div>
        </div>
        {index < total - 1 && (
          <div className="border-b border-dotted border-black"></div>
        )}
      </React.Fragment>
    );
    
    return (
      <div className="p-8 space-y-8 flex flex-row justify-center gap-[10rem] py-[10rem]">
        {/* SkiDB Example */}
        <InstancesList<DbInstance>
          title="SkiDB"
          instances={dbInstances} 
          onAddClick={() => handleAddClick("SkiDB")} 
        />
        
        {/* Silk Example with custom rendering */}
        <InstancesList<SilkInstance>
          title="Silk"
          instances={silkInstances}
          renderItem={renderSilkItem}
          onAddClick={() => handleAddClick("Silk")}
          emptyMessage="No services deployed"
          addButtonText="Deploy"
        />
        <InstancesList<SilkInstance>
          title="Silk"
          instances={silkInstances}
          renderItem={renderSilkItem}
          onAddClick={() => handleAddClick("Silk")}
          emptyMessage="No services deployed"
          addButtonText="Deploy"
        />
      </div>
    );
  }
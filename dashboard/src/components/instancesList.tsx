import React, { JSX } from "react";

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

// Props interface for the component
interface DatabaseComponentProps<T extends BaseInstance> {
  title?: string;
  instances: T[];
  onAddClick: () => void;
  renderItem?: (item: T, index: number, total: number) => React.ReactNode;
  emptyMessage?: string;
  addButtonText?: string;
}

// Generic component that works with any instance type extending BaseInstance
 export default function InstancesList<T extends BaseInstance>({ 
  title = "Database",
  instances = [],
  onAddClick,
  renderItem,
  emptyMessage = "No items available",
  addButtonText = "Add"
}: DatabaseComponentProps<T>): JSX.Element {
  
  // Default render function if none provided
  const defaultRenderItem = (item: StatusInstance, index: number, total: number): JSX.Element => (
    <React.Fragment key={item.id || index}>
      <div className="flex items-center justify-between py-2">
        <div className="font-bold">
          {item.id} {item.name}
        </div>
        {item.hasStatus && (
          <div className={`w-3 h-3 rounded-full ${item.hasError ? 'bg-red-500' : 'bg-green-400'}`}></div>
        )}
      </div>
      {index < total - 1 && (
        <div className="border-b border-dotted border-black"></div>
      )}
    </React.Fragment>
  );

  // Use provided renderItem function or default one
  // Cast to any because TypeScript can't verify that the default renderer works for all T
  const renderFunction = renderItem || (defaultRenderItem as any);

  return (
    <div className="font-mono max-w-xs">
      {/* Header - Dynamic title */}
      <div className="bg-white px-3 py-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-lg mb-1 inline-block">
        &gt; {title}
      </div>
      
      {/* Body - Dynamic content */}
      <div className="bg-white border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-3 mb-2">
        {instances.length > 0 ? (
          instances.map((instance, index) => 
            renderFunction(instance, index, instances.length)
          )
        ) : (
          <div className="text-gray-500 py-2">{emptyMessage}</div>
        )}
      </div>
      
      {/* Footer - Add Button */}
      <div 
        className="bg-white px-3 py-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block cursor-pointer hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={onAddClick}
      >
        &gt; {addButtonText}
      </div>
    </div>
  );
}

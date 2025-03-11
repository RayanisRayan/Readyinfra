export default function Terminal() {
    return (
      <div className="h-[24.5rem] flex justify-center items-center p-6 dotted-bg">
        {/* ReadyInfra Logo */}
        <div className="absolute top-8 left-8 z-10">
          <div className="bg-white px-3 py-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono font-bold ">
            &gt; ReadyInfra
          </div>
        </div>
        
        <div className="relative max-w-2xl w-full font-mono">
          {/* Terminal Window */}
          <div className="border border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {/* Terminal Header */}
            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">user@profile:~</span>
              <div className="w-4"></div> {/* Spacer for flex justify-between */}
            </div>
  
            {/* Terminal Content */}
            <div className="p-4 text-sm">
              {/* Command Line with prompt */}
              <div className="flex items-start mb-1">
                <span className="text-black font-bold mr-2">&gt;</span>
                <span className="font-bold">whoami</span>
              </div>
              
              {/* Response line */}
              <div className="flex items-start mb-3 pl-6">
                <span className="text-gray-500">system user</span>
              </div>
              
              {/* Command Line */}
              <div className="flex items-start mb-1">
                <span className="text-black font-bold mr-2">&gt;</span>
                <span className="font-bold">cat components.txt</span>
              </div>
              
              {/* Response line */}
              <div className="flex items-start mb-3 pl-6">
                <span className="text-gray-500">1 DB, 3 webs, 5 engines</span>
              </div>
              
              {/* Command Line */}
              <div className="flex items-start mb-1">
                <span className="text-black font-bold mr-2">&gt;</span>
                <span className="font-bold">Tree nav</span>
              </div>
              
              {/* Response line */}
              <div className="flex items-start mb-4 pl-6">
                <span className="text-gray-500">Tree:</span>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-center gap-4 mt-2">
                {["SkiDB", "Silk", "SE"].map((name) => (
                  <button 
                    key={name}
                    className="px-6 py-3 border border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <span className="font-bold mr-1">&gt;</span> {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
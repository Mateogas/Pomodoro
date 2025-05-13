function Clock(){
    const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return(
        <div className="relative w-[30vw] h-[100%] grid justify-items-center">

          <div id ="clock-base"className="w-[30vw] h-[60vh] bg-[#A1866F] shadow-md rounded-[5px] self-end z-3"/>
          <div id ="clock-circle" className="absolute top-[15vh] w-[25vw] h-[25vw] bg-[#A1866F] shadow-md rounded-full z-2"/>
          <div class="absolute w-100 h-100 bg-white rounded-full shadow-xl z-4 top-60">
           
                <div class="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* Hour Numbers - Mathematically positioned */}
                        {hours.map((hour) => {
                        const angle = (Math.PI / 6) * (hour - 3); // Subtract 3 to start at top (12 o'clock)
                        const radius = 0.3; // Radius in vw (42% of clock face)
                        const x = Math.cos(angle) * radius * 25; // 25vw is clock face width
                        const y = Math.sin(angle) * radius * 25;

                        return (
                            <div
                            key={hour}
                            className="absolute text-gray-800 text-xl"
                            style={{
                                left: `calc(50% + ${x}vw)`,
                                top: `calc(50% + ${y}vw)`,
                                transform: "translate(-50%, -50%)",
                            }}
                            >
                            {hour}
                            </div>
                        );
                        })}
                        
                        {/* Clock Hands */}
                        <div className="absolute top-1/2 left-1/2 w-[35%] h-0.5 bg-gray-800 rounded-full transform -translate-y-1/2 origin-left rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 w-[25%] h-0.5 bg-gray-800 rounded-full transform -translate-y-1/2 origin-left rotate-180"></div>
            </div>
        </div>
        
    )
}

export default Clock
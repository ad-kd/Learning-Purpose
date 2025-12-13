import React from 'react'
import CountUp from '../rebits/CountUp.jsx';

const counts = () => {
    return (
        <div>
            <div className="bg-[#EDCACD]">
  <h1 className="text-3xl md:text-4xl font-bold text-center p-6 md:p-10">
    Our Achievements
  </h1>

  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-y-8 md:space-y-0 pb-10">
    
    <div className="text-center">
      <h2 className="text-4xl font-semibold">
        <CountUp
          from={0}
          to={500}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </h2>
      <p className="text-lg">Projects Completed</p>
    </div>

    <div className="text-center">
      <h2 className="text-4xl font-semibold">
        <CountUp
          from={0}
          to={300}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </h2>
      <p className="text-lg">Satisfied Clients</p>
    </div>

    <div className="text-center">
      <h2 className="text-4xl font-semibold">
        <CountUp
          from={0}
          to={25}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        +
      </h2>
      <p className="text-lg">Awards Won</p>
    </div>

  </div>
</div>

        </div>
    )
}

export default counts
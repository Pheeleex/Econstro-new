import React from 'react'


const Overview = () => {
    const selectOption = [
        "Overview", "Description", "Shipping", "Warranty", "Return Policy", "Reviews"
    ]
  return (
    <div>
        <div className="overview flex gap-8 flex-wrap m-4">
            {
                selectOption.map((item, index) => (
                    <div className="option-select" key={index}>
                        {item}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Overview
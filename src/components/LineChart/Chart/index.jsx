import React from "react";

const STROKE = 2;

const LineChartBody = ({data, route, filterData, height, width, colHeight=40, colWidth=80, padding=51, colors}) => {

  const coordinate = (i, axisY)  => {
    const axisSpan = axisY ? colHeight : colWidth;
    return (axisSpan * (i + 1)) + padding;
  }
  
  const Guides = () => {
    // Loops through each line depending on length of data
    return data.map((labels, index) => {
      const axisY = index === 1;
      let labelArr = axisY ? [...filterData] : [...labels];
      return labelArr.map((item, i) => {
        const pointX = `${coordinate(i, axisY)}, ${padding}, ${coordinate(i, axisY)}, ${height} `;
        const pointY = `${padding}, ${coordinate(i, axisY)}, ${width}, ${coordinate(i, axisY)}`;

        return (
          <polyline
            className="lineChart__body-guide"
            points={axisY ? pointY : pointX}
          />
        );
      });
    })
  };


  const LabelsAxis = () => {
    // Add label corresponding to guide
    return data.map((labels, index) => {
      const axisY = index === 1;
      let labelArr = axisY ? [...filterData] : [...labels];
      
      return labelArr.map((item, i) => {
        return (
          <text
            className="lineChart__body-label"
            key={i}
            x={axisY ? 10 : coordinate(i , false)}
            y={!axisY ? height + 30 : coordinate(((filterData.length - 1) - i), true)}
            >
            {item}
          </text>
        );
      });
    })
  };

  const Lines = () =>{
    return route.map((route, index) => {
      let start;
      let end;

      const linePoint = (start, end) => {
        return data[1].map((line, i) => {
          let x =  padding + (colWidth * (i + 1));
          let y =  height - (colHeight * i);

          if(start > end){
            // Add lines if start has greater value and should go backwards 
            let newIndex =  data[0].length - i;
            x =  width - (colWidth * (newIndex - 1));
            y =  height - (colHeight * (newIndex + start)) + (colHeight * data[0].length);

            if(end <= i && start >= i){
              return `${x},${y}`;
            }
          }else if(start <= i && end >= i){
            // Add lines starting from beginning depending on start & end range 
            y =  height - (colHeight * (i - start));
            return `${x},${y}`
          }
          
        }).join(" ");
      }

      data.map((line, i) => {
        // Search matching name from route and set position of start & end of lines - location dependent
        if(i === 0){
          start = line.findIndex(x => x === route.start);
          end = line.findIndex(x => x === route.end);
        }
      })

      return(
        <polyline
          stroke={colors[index]}
          className="lineChart__body-line"
          strokeWidth={STROKE}
          points={linePoint(start,end)}
        />
      )
    })

  }

  return (
    <div className="lineChart__body">
      <svg viewBox={`0 0 ${width} ${height + padding}`} >
        <LabelsAxis/>
        <Guides/>
        <Lines/>
      </svg>
    </div>

  );
};

export default LineChartBody;

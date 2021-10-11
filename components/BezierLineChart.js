import React, {useState, useEffect} from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { StyleSheet, Dimensions, ScrollView, View, Text } from 'react-native';
  import { FontAwesome } from '@expo/vector-icons'; 
  import { Rect, Text as TextSVG, Svg } from "react-native-svg";

export default function BezierLineChart(props){
   let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })
   let [curIndex, setIndex] = useState(2)
   let [dataList, setDataList] = useState([...Array(10).keys()])
   const [data, setData] = useState([Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400,
                    Math.random() * 400])
    useEffect(() => {
        console.log(props.period);
        switch (props.period) {
            case 1: 
            setData([
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400
            ])
            setIndex(3)
            break
            case 2:
                
            setData([
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400
            ])
            setIndex(3)
            break
            case 3: 
            
            setData([
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400
            ])
            setIndex(3)
            break;
            case 4: 
            
            setData([
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400
            ])
            setIndex(3)
            setDataList([...Array(12).keys()])
        }
    }, [])
   return(
    <View>
        <Text style={bezierStyles.staticText}>money received</Text>
        <View style={bezierStyles.wrapper}>
          <Text style={bezierStyles.wrapperChartText}>${data[curIndex].toLocaleString("en-US")}</Text>
          <Text style={bezierStyles.rateChartText}>
          {(Math.round(data[curIndex] - 200) / 2)}%
          <FontAwesome name={ Math.round(data[curIndex] - 200) / 2 < 0 ? "long-arrow-down" : "long-arrow-up" } style={bezierStyles.rateChartText} />
          </Text>
        </View>
        <ScrollView>
        <LineChart
            data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                data: data,
                }
            ]
            }}
            width={Dimensions.get("window").width * 2}
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            chartConfig={{
            //    backgroundcolor: '#fb8c00',
//                backgroundGradientFrom: '#fb8c00',
//                backgroundGradientTo: 'transparent',
            // backgroundGradientFrom: "#fb8c00",
            // backgroundGradientFromOpacity: 0.8,
            // backgroundGradientToOpacity: 1,
            // backgroundGradientTo: "black",
            fillShadowGradient: '#fb8c00', // THIS
            fillShadowGradientOpacity: 1,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(254, 106, 41)`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16,
            },
            strokeWidth: 4,
            propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "#ffffff",
                backgroundColor: "#ffa726"
            },
            propsForBackgroundLines: {
                stroke:"#ffffff"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            marginLeft: '-100px',
            borderRadius: 0
            }}
            hidePointsAtIndex={dataList.filter(id => id != curIndex)}
            decorator={() => {
                return tooltipPos.visible ? <View>
                    <Svg>
                        <Rect x={tooltipPos.x - 15} 
                            y={tooltipPos.y + 10} 
                            width="40" 
                            height="30"
                            fill="black" />
                        <TextSVG
                            x={tooltipPos.x + 5}
                            y={tooltipPos.y + 30}
                            fill="white"
                            fontSize="16"
                            fontWeight="bold"
                            textAnchor="middle">
                            {tooltipPos.value}
                        </TextSVG>
                    </Svg>
                </View> : null
            }}
            onDataPointClick={({dataset, index}) => {
                setIndex(index)
                console.log(data[index])
                let isSamePoint = (tooltipPos.x === dataset.x 
                                    && tooltipPos.y === dataset.y)

                isSamePoint ? setTooltipPos((previousState) => {
                    return { 
                        ...previousState,
                        value: dataset.value,
                        visible: !previousState.visible
                    }
                })
                    : 
                setTooltipPos({ x: dataset.x, value: dataset.value, y: dataset.y, visible: true });

            }}
        />
        </ScrollView>
    </View>
   ) 
} 
const bezierStyles=StyleSheet.create({
    staticText: {
        marginLeft: '40px',
        color: '#a2a2a2',
        fontSize: '16px',
        textTransform: 'capitalize',
        marginBottom: '20px'
    },
    wrapper: {
      paddingLeft: '40px',
      paddingRight: '60px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '20px'
    }, 
    wrapperChartText: {
      color: 'white',
      fontSize: '40px',
      lineHeight: '12px',
      fontFamily: 'cursive'
    }, 
    rateChartText: {
      color: '#d2d2d2',
      fontSize: '18px',
      marginLeft: '12px',
      lineHeight: '12px'
    }
})
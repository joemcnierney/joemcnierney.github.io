$(document).ready(function(){function o(){$("#sparkline1").sparkline([46,38,43,35,44,45,52,46,40],{type:"line",width:"100%",height:"200",chartRangeMax:50,lineColor:"#3051d3",fillColor:"rgba(48, 81, 211, 0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$("#sparkline1").sparkline([20,28,22,24,38,32,30,24,28],{type:"line",width:"100%",height:"200",chartRangeMax:40,lineColor:"#f96565",fillColor:"rgba(249, 101, 101, 0.3)",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$("#sparkline2").sparkline([9,8,7,8,6,11,5,7,9,6,4,7,11,13,9,12],{type:"bar",height:"200",barWidth:"10",barSpacing:"3",barColor:"#00a7e1"}),$("#sparkline3").sparkline([24,36,26,14],{type:"pie",width:"200",height:"200",sliceColors:["#00a7e1","#3051d3","#f96565","#e4cc37"]}),$("#sparkline5").sparkline([9,8,7,8,6,11,5,7,9,6,8,7,8,13,10,12],{type:"line",width:"100%",height:"200",lineColor:"#00a7e1",lineWidth:1,fillColor:"rgba(0, 167, 225, 0.2)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline5").sparkline([9,8,7,8,6,11,5,7,9,6,4,7,11,13,9,12],{type:"bar",height:"200",barWidth:"10",barSpacing:"5",composite:!0,barColor:"#3051d3"}),$("#sparkline6").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7],{type:"discrete",width:"280",height:"200",lineColor:"#f96565"})}function e(){var e,l=-1,r=-1,t=0,a=[];$("html").mousemove(function(i){var o=i.pageX,e=i.pageY;-1<l&&(t+=Math.max(Math.abs(o-l),Math.abs(e-r))),l=o,r=e});var h=function(){var i=(new Date).getTime();if(e&&e!=i){var o=Math.round(t/(i-e)*1e3);a.push(o),30<a.length&&a.splice(0,1),t=0,$("#sparkline4").sparkline(a,{tooltipSuffix:" pixels per second",type:"line",width:"100%",height:"200",chartRangeMax:77,maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1,lineColor:"#3051d3",fillColor:"rgba(48, 81, 211, 0.3)",highlightLineColor:"rgba(24,147,126,.1)",highlightSpotColor:"rgba(24,147,126,.2)"})}e=i,setTimeout(h,500)};setTimeout(h,500)}var l;o(),e(),$(window).resize(function(i){clearTimeout(l),l=setTimeout(function(){o(),e()},300)})});
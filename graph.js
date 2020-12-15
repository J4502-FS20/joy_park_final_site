"use strict";

var chartDiv = document.getElementById('chart_container');

var data = [
{"Year":2019,	"Value":61200},
{"Year":2018,	"Value":67600},
{"Year":2017,	"Value":72300},
{"Year":2016,	"Value":74600},
{"Year":2015,	"Value":40900},
{"Year":2014,	"Value":50300},
{"Year":2013,	"Value":50500},
{"Year":2012,	"Value":46900},
{"Year":2011,	"Value":48500},
{"Year":2010,	"Value":44100}];

var arrayValues = [];

for (var i = 0; i < data.length; i++) {
  arrayValues.push(data[i].Value);
};

var largest = Math.max.apply(Math, arrayValues);

for (var i = 0; i < data.length; i++) {
  chartDiv.innerHTML += '<div class="row" id="r' + i + '">' +
      '<div class="Year">' + data[i].Year + '</div>' +
      '<div class="Value" style="width:' + (data[i].Value * 60) / largest + '%"></div>' +
      '<div class="ValueNumber">' + data[i].Value + '</div>' +
      '</div>'
}

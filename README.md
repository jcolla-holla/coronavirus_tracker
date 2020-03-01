## Background

Coronavirus reverberates through news cycles around the world, with varying levels of concern from utter hysteria to total indifference.  The goal of this project, *Coronavirus Tracker*, is to provide a data-centric, interactive overview of the coronavirus spread to counter narratives that are not based in fact/numbers.

## Data Source

A challenge given the extremely fluid global situation surrounding coronavirus (not to mention the possibility that some government reporting agencies may not be completely truthful in their statistics reporting), is finding a trustworthy data source that is frequently updated and acceessible (for free) via API.  Luckily, researchers at Johns Hopkins University have quickly created exactly that!  Note: if you are aware of other or better API sources for similar information, please get in contact with me.  

* [Informal docs here](https://dev.to/pipedream/http-api-for-latest-wuhan-coronavirus-2019-ncov-data-20jj)
* [sample JSON API response](https://coronavirus.m.pipedream.net/)
* [example table here](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/02-25-2020.csv)


## Existing Similar Solutions

There are some existing sites that serve a similar function, listed below.  However, none of the websites that I found provide a robust data interactivity capability that might be useful to a user asking questions like: "are there reported cases near my home city/state/country?".  Nor do they provide some kind of alert mechanism for if confirmed cases are reported near their location.  Coronavirus Tracker aims to address these two questions.

Existing/similar Solutions:
  * [Johns Hopkins University Coronavirus dashboard](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
  * [World Health Organization (WHO) interactive map](https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd)
  * [World o Meter.com](https://www.worldometers.info/coronavirus/)
  
  
 ## Functionality and MVP
   * Present Johns Hopkins API data using d3.js
     
   * Filter by:
     * Country - bar graph/calendar of cases and recoveries over time
     * City - bar graph/calendar of cases and recoveries over time
     * Province/State - bar graph/calendar graph of cases and recoveries over time
     
   * Sign up for an email if a case appears in/near your city?  Or is that too backend focused?
     
   * Views:
     * Calendar view - gives a new visual to understand trends over time, [example](https://observablehq.com/@d3/calendar-view) 
     * Bar graph view - gives a visual of number of new cases and reported recovers, [example](https://observablehq.com/@mbostock/u-s-population-by-age-1850-2000)
     

     
   
 ## Wireframes
   
 
 
 ## Architecture and Technologies
   * [d3.js](https://github.com/d3/d3/wiki)
   * MongoDB - to store emails and the city associated with them?
   * maybe something else I should specify??
 
 
 ## Bonus Features
  * Sign up your email to get sent when a confirmed case is reported near you
  * Self-diagnosis step by step walkthrough that ends suggesting a specific action, ie "go to the ER", "continue to look for X symptom over the next 7 days", "no need to worry!"
 
 

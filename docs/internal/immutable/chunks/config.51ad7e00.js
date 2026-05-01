const e=`backends:
- type: duckdb
  name: duckdb
  sources:
  - parquet: "admin_raw.parquet"
    name: "admin_raw"
  - parquet: "chirps_raw.parquet"
    name: "chirps_raw"
  - parquet: "evi_raw.parquet"
    name: "evi_raw"
  # - parquet: "badyear2_raw.parquet"
  #   name: badyear2_raw
  - parquet: "action_cal_raw.parquet"
    name: action_cal_raw
  # - parquet: "wrsi_raw.parquet"
  #   name: wrsi_raw
  # - parquet: "ndvi_raw.parquet"
  #   name: ndvi_raw
  - parquet: "madagascar_forecasts.parquet"
    name: madagascar_forecasts
  # - parquet: "ipc_raw.parquet"
  #   name: ipc_raw
  - parquet: "mrcs_badyears_by_hazard.parquet"
    name: excess_rain
  - parquet: "mrcs_drought_badyears.parquet"
    name: drought_badyears

- type: query
  name: climatology
  # query doesn't have source/sources -- assumes all data is loaded already
  db: duckdb
  query: "" # if query name is in model out, will pull query from there, replacing this text 
  defaults:
    region: 1
    ####
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
    freq_excess: 0.15
    sum_early_excess_first: 23
    sum_early_excess_last: 28
    sum_late_excess_first: 29
    sum_late_excess_last: 36
    exit_multiplier_excess: 1.2
  save: true 
- type: query
  name: action_cal
  db: duckdb
  query: ""
  defaults:
    region: 1
    fokotany: ambila
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
    freq_excess: 0.15
    sum_early_excess_first: 23
    sum_early_excess_last: 28
    sum_late_excess_first: 29
    sum_late_excess_last: 36
    exit_multiplier_excess: 1.2
  save: true
- type: query
  name: fokotany_list
  db: duckdb
  query: ""
  defaults:
    region: 1
- type: query
  name: severity_combined 
  db: duckdb
  query: ""
  defaults:
    region: 1
    ####
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
    freq_excess: 0.15
    sum_early_excess_first: 23
    sum_early_excess_last: 28
    sum_late_excess_first: 29
    sum_late_excess_last: 36
    exit_multiplier_excess: 1.2
  save: true 
# - type: query
#   name: badyear2
#   db: duckdb
#   query_template: year_overlay
#   source_table: badyear2_raw
#   defaults:
#     region: 1
#     dekcap: 24
#     freq: 0.23
#     year_start: 1993
#     year_end: 2024
#     back_fill_year: 2001
#     sum_early_weight: 0.4
#     sum_late_weight: 0.4 
#     vegetation_weight: 0.6
#     sum_early_first: 1
#     sum_early_last: 30
#     sum_late_first: 1
#     sum_late_last: 30
#     scalar_vegetation: 1
#     exit_multiplier: 0.8
#     freq_excess: 0.15
#     sum_early_excess_first: 23
#     sum_early_excess_last: 28
#     sum_late_excess_first: 29
#     sum_late_excess_last: 36
#     exit_multiplier_excess: 1.2
#   save: true 
# - type: query
#   name: wrsi 
#   db: duckdb
#   query_template: year_overlay_region
#   source_table: wrsi_raw
#   defaults:
#     region: 1
#     dekcap: 24
#     freq: 0.23
#     year_start: 1993
#     year_end: 2024
#     back_fill_year: 2001
#     sum_early_weight: 0.4
#     sum_late_weight: 0.4 
#     vegetation_weight: 0.6
#     sum_early_first: 1
#     sum_early_last: 30
#     sum_late_first: 1
#     sum_late_last: 30
#     scalar_vegetation: 1
#     exit_multiplier: 0.8
#     freq_excess: 0.15
#     sum_early_excess_first: 23
#     sum_early_excess_last: 28
#     sum_late_excess_first: 29
#     sum_late_excess_last: 36
#     exit_multiplier_excess: 1.2
#   save: true 
# - type: query
#   name: ndvi
#   db: duckdb
#   query_template: year_overlay_region
#   source_table: ndvi_raw
#   defaults:
#     region: 1
#     dekcap: 24
#     freq: 0.23
#     year_start: 1993
#     year_end: 2024
#     back_fill_year: 2001
#     sum_early_weight: 0.4
#     sum_early_weight: 0.4 
#     vegetation_weight: 0.6
#     sum_early_first: 1
#     sum_early_last: 30
#     sum_late_first: 1
#     sum_late_last: 30
#     scalar_vegetation: 1
#     exit_multiplier: 0.8
#     freq_excess: 0.15
#     sum_early_excess_first: 23
#     sum_early_excess_last: 28
#     sum_late_excess_first: 29
#     sum_late_excess_last: 36
#     exit_multiplier_excess: 1.2
#   save: true 
- type: query
  name: madagascar_forecasts
  db: duckdb
  query_template: year_overlay_region
  defaults:
    region: 1
    ####
    freq: 0.23
    year_start: 1991
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
    freq_excess: 0.15
    sum_early_excess_first: 23
    sum_early_excess_last: 28
    sum_late_excess_first: 29
    sum_late_excess_last: 36
    exit_multiplier_excess: 1.2
  save: true 
- type: query
  name: excess_rain
  db: duckdb
  query_template: year_overlay_region
  source_table: excess_rain
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true
- type: query
  name: drought_badyears
  db: duckdb
  query: "SELECT * FROM drought_badyears WHERE gid = 'var(region)' AND year >= var(year_start) AND year <= var(year_end) ORDER BY rank LIMIT (SELECT COUNT(DISTINCT year) FROM drought_badyears WHERE gid = 'var(region)' AND year >= var(year_start) AND year <= var(year_end)) * var(freq)"
  defaults:
    region: 1
    freq: 0.23
    year_start: 1993
    year_end: 2024
  save: true
# - type: query
#   name: ipc
#   db: duckdb
#   query_template: year_overlay
#   source_table: ipc_raw
#   defaults:
#     region: 1
#     dekcap: 24
#     freq: 0.23
#     year_start: 1993
#     year_end: 2024
#     back_fill_year: 2001
#     sum_early_weight: 0.4
#     sum_late_weight: 0.4 
#     vegetation_weight: 0.6
#     sum_early_first: 1
#     sum_early_last: 30
#     sum_late_first: 1
#     sum_late_last: 30
#     scalar_vegetation: 1
#     exit_multiplier: 0.8
#     freq_excess: 0.15
#     sum_early_excess_first: 23
#     sum_early_excess_last: 28
#     sum_late_excess_first: 29
#     sum_late_excess_last: 36
#     exit_multiplier_excess: 1.2
#   save: true
- type: query
  name: matching 
  db: duckdb
  query: "" 
  defaults:
    region: 1
    ####
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
    freq_excess: 0.15
    sum_early_excess_first: 23
    sum_early_excess_last: 28
    sum_late_excess_first: 29
    sum_late_excess_last: 36
    exit_multiplier_excess: 1.2
  save: true 
- type: matching
  name: mtb 
  ignore_cols:
    - year
    - gid
    - value
  default_func: "true positive" 
  backend: matching
  #TODO: how to integrate functions into yaml 
  matching: ""
  defaults:
    region: 1
    ####
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8 
    freq_excess: 0.15
    sum_early_excess_first: 23
    sum_early_excess_last: 28
    sum_late_excess_first: 29
    sum_late_excess_last: 36
    exit_multiplier_excess: 1.2
  save: true
- type: query
  name: default_q 
  db: duckdb
  query: "SELECT gid, chirps_early_first, chirps_early_last, chirps_late_first, chirps_late_last, evi_month FROM admin_raw ORDER BY gid"
- type: overlay
  name: overlay
views:
- type: Login
  name: Login
  selector: "#login"
  dataTable: Madagascar_Red_Cross_Data
  stateTable: Madagascar_Red_Cross_State
- type: Line
  name: climatology_chart
  selector: "#chart-1"
  xAttr: dekad 
  yAttr: average_value
  data:
  - backend: climatology
  - backend: overlay
    target: overlay
- type: DropDown
  name: Fokotany_Dropdown
  selector: "#dropdown-fokotany"
  interactions:
    - type: change
      name: ddc-fokotany
      to:
        - backend: action_cal
          fokotany: $fokotany
  index: 0
  dropdown_key: fokotany
  data:
  - backend: fokotany_list
- type: ActionCal 
  name: action_calendar 
  selector: "#chart-5"
  xDomainMin: 19
  xDomainMax: 55
  data:
  - backend: action_cal 
  - backend: overlay
    target: overlay
- type: BarGrouped   
  name: severity_combined
  selector: "#chart-3"
  xAttr: year
  yAttr: value
  yMax: 1
  xDomainMin: 1993
  xDomainMax: 2024
  groupNames:
    - sum_early
    - sum_late
    - sum_early_excess
    - sum_late_excess
    - vegetation
    - combined_severity
  overlays:
    # badyear2:
    #   label: "Bad Years V2"
    #   stroke: "#696969"
    #   fill: "#c0c0c0"
    #   strokeWidth: 1
    #   fillOpacity: 0.1
    #   default: false
    # wrsi:
    #   label: "WRSI"
    #   stroke: "blue"
    #   fill: "lightblue"
    #   default: false
    # ndvi:
    #   label: "NDVI"
    #   stroke: "seagreen"
    #   fill: "lightgreen"
    #   default: false
    # ipc:
    #   label: "IPC"
    #   stroke: "#D99400"
    #   fill: "#FDB813"
    #   default: false
    madagascar_forecasts:
      label: "Seasonal Drought Forecast"
      stroke: "#7b3fe4"
      fill: "#c9b6ff"
      default: false
    excess_rain:
      label: "Excess Rain Years"
      stroke: "#1e90ff"
      fill: "#87cefa"
      default: false
    drought_badyears:
      label: "Drought Bad Years"
      stroke: "#b8860b"
      fill: "#f4d06f"
      default: false
  data:
  - backend: severity_combined
  # - backend: badyear2
  # - backend: wrsi 
  # - backend: ndvi
  # - backend: ipc
  - backend: madagascar_forecasts
  - backend: excess_rain
  - backend: drought_badyears
  - backend: overlay
    target: overlay
- type: MatchingTable    
  name: matching_table  
  selector: "#chart-4"
  data:
  - backend: mtb  
- type: DropDown
  name: Village_Autocomplete
  selector: "#dropdown-villages"
  interactions:
    - type: change
      name: ddc
      defaults:
        region: 1
      to:
        - backend: climatology
          region: $gid
        - backend: mtb
          region: $gid
        - backend: action_cal
          region: $gid
        - backend: fokotany_list
          region: $gid
        - backend: severity_combined 
          region: $gid
        # - backend: badyear2
        #   region: $gid
        # - backend: wrsi
        #   region: $gid
        # - backend: ndvi
        #   region: $gid
        - backend: madagascar_forecasts
          region: $gid
        - backend: excess_rain
          region: $gid
        - backend: drought_badyears
          region: $gid
  index: 0
  dropdown_key: region
  data: 
  - query: "SELECT gid, region FROM admin_raw ORDER BY gid"
- type: DropDown
  name: Matching_Dropdown
  selector: "#dropdown-2"
  interactions:
    - type: change
      name: ddc-matching
      to:
        - backend: mtb
          func_elected: $value
  index: 0
  dropdown_key: value
  data: 
  - query: "SELECT * FROM (VALUES (0,'true positive'),(1,'true negative'),(2,'average matching')) MATCHING_OPTIONS(idx, value);"
- type: Slider
  name: PlantEarly
  selector: "#slider-1"
  min: 19
  max: 55
  description: "CHIRPS (Early Season)"
  tooltip: "This gives us the sum of rainfall during this time period in the early season."
  interactions:
  - type: change
    to: 
    - backend: severity_combined 
      sum_early_first: $left
      sum_early_last: $right
    - backend: mtb 
      sum_early_first: $left
      sum_early_last: $right
    - backend: overlay
      sum_early:
        left: $left
        right: $right
- type: Slider
  name: PlantLate
  selector: "#slider-2"
  min: 19
  max: 55
  description: "CHIRPS (Late Season)"
  tooltip: "This gives us the sum of rainfall during this time period in the late season."
  interactions:
  - type: change
    to: 
    - backend: severity_combined
      sum_late_first: $left
      sum_late_last: $right
    - backend: mtb 
      sum_late_first: $left
      sum_late_last: $right
    - backend: overlay
      sum_late:
        left: $left
        right: $right
- type: Slider
  name: Vegetation
  selector: "#slider-3"
  min: 19
  max: 19
  description: "Vegetation"
  tooltip: "This gives us the sum of vegetation during the particular time period"

- type: Slider
  name: ExcessEarly
  selector: "#slider-4"
  min: 19
  max: 55
  description: "Excess Rainfall (Early Season)"
  tooltip: "This sets the time period for detecting early excess rainfall."
  interactions:
  - type: change
    to: 
    - backend: severity_combined
      sum_early_excess_first: $left
      sum_early_excess_last: $right
    - backend: mtb 
      sum_early_excess_first: $left
      sum_early_excess_last: $right
    - backend: overlay
      sum_early_excess:
        left: $left
        right: $right
        
- type: Slider
  name: ExcessLate
  selector: "#slider-5"
  min: 19
  max: 55
  description: "Excess Rainfall (Late Season)"
  tooltip: "This sets the time period for detecting late excess rainfall."
  interactions:
  - type: change
    to: 
    - backend: severity_combined
      sum_late_excess_first: $left
      sum_late_excess_last: $right
    - backend: mtb 
      sum_late_excess_first: $left
      sum_late_excess_last: $right
    - backend: overlay
      sum_late_excess:
        left: $left
        right: $right

- type: Alert
  name: Alert
  selector: "#alert"
  threshold_string: "0.5"
  key: "combined_severity"
  data:
    - backend: severity_combined
  interactions:
  - type: valid
- type: SliderFreq
  name: FrequencySlider
  selector: "#freq-slider"
  min: 0.1
  max: 1
  description: "Frequency Slider"
  tooltip: "This helps us adjust the frequency"
  interactions:
  - type: change
    to:
    - backend: severity_combined 
      freq: $left
    - backend: mtb  
      freq: $left
    # - backend: badyear2 
    #   freq: $left
    # - backend: wrsi 
    #   freq: $left
    # - backend: ndvi
    #   freq: $left
    # - backend: ipc
    #   freq: $left
    - backend: madagascar_forecasts
      freq: $left
    - backend: excess_rain
      freq: $left
    - backend: drought_badyears
      freq: $left
- type: Slider
  name: StartYearSlider
  selector: "#start-year"
  min: 1993
  max: 2024
  minRange: 7
  description: "Start Year"
  tooltip: "This helps us adjust the start year"
  interactions:
  - type: change
    to:
    - backend: severity_combined 
      year_start: $left
      year_end: $right
    - backend: mtb  
      year_start: $left
      year_end: $right
    # - backend: badyear2
    #   year_start: $left
    #   year_end: $right
    # - backend: wrsi
    #   year_start: $left
    #   year_end: $right
    # - backend: ndvi
    #   year_start: $left
    #   year_end: $right
    # - backend: ipc
    #   year_start: $left
    #   year_end: $right
    - backend: madagascar_forecasts
      year_start: $left
      year_end: $right
    - backend: excess_rain
      year_start: $left
      year_end: $right
    - backend: drought_badyears
      year_start: $left
      year_end: $right
dependencies: 
- source: ddc
  attr: "gid"
  target:
    - view: Vegetation
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        const month_to_dekad = {
          Sep: { start: 24, end: 27 },
          Oct: { start: 27, end: 30 },
          Nov: { start: 30, end: 33 },
          };
        return {left: month_to_dekad[row.evi_month].start,  right: month_to_dekad[row.evi_month].end}
        ;"
    - view: PlantEarly 
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: row.chirps_early_first,  right: row.chirps_early_last}
        ;"
    - view: PlantLate 
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: row.chirps_late_first,  right: row.chirps_late_last}
        ;"
    - view: ExcessEarly 
      defaults:
        backend: default_q
        function: "
        if(!a) return;
        let data = this; 
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: 23, right: 28}
        ;"
    - view: ExcessLate 
      defaults:
        backend: default_q
        function: "
        if(!a) return;
        let data = this; 
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: 29, right: 36}
        ;"
`;export{e as r};

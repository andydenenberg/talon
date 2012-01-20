function displaymessage()
{
alert("Hello World!");
}

function displaymessage1(line1,maxY,startDate)
	{
		$.jqplot('chartdiv',  [line1],
		{ title:'Response Time',
		  axes:{ yaxis: { min: 0, max: maxY },
		 		 xaxis: { renderer:$.jqplot.DateAxisRenderer,
//		         tickOptions:{formatString:'%m/%d/%y - %I:%M:%S'},
		         tickOptions:{formatString:'%I:%M:%S'},
		         min: startDate ,
				 numberTicks: 10 ,
//		         tickInterval:'2 hours'
		           },
			   },
		  series:[{color:'#5FAB78'}]
		}
				).replot();
	}

		/**
		 * jqPlot
		 * Pure JavaScript plotting plugin using jQuery
		 *
		 * Version: 1.0.0b2_r792
		 *
		 * Copyright (c) 2009-2011 Chris Leonello
		 * jqPlot is currently available for use in all personal or commercial projects 
		 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
		 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
		 * choose the license that best suits your project and use it accordingly. 
		 *
		 * Although not required, the author would appreciate an email letting him 
		 * know of any substantial use of jqPlot.  You can reach the author at: 
		 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
		 *
		 * If you are feeling kind and generous, consider supporting the project by
		 * making a donation at: http://www.jqplot.com/donate.php .
		 *
		 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
		 *
		 *     version 2007.04.27
		 *     author Ash Searle
		 *     http://hexmen.com/blog/2007/03/printf-sprintf/
		 *     http://hexmen.com/js/sprintf.js
		 *     The author (Ash Searle) has placed this code in the public domain:
		 *     "This code is unrestricted: you are free to use it however you like."
		 * 
		 */
		(function($) {  
		    /**
		     * Class: $.jqplot.DateAxisRenderer
		     * A plugin for a jqPlot to render an axis as a series of date values.
		     * This renderer has no options beyond those supplied by the <Axis> class.
		     * It supplies it's own tick formatter, so the tickOptions.formatter option
		     * should not be overridden.
		     * 
		     * Thanks to Ken Synder for his enhanced Date instance methods which are
		     * included with this code <http://kendsnyder.com/sandbox/date/>.
		     * 
		     * To use this renderer, include the plugin in your source
		     * > <script type="text/javascript" language="javascript" src="plugins/jqplot.dateAxisRenderer.js"></script>
		     * 
		     * and supply the appropriate options to your plot
		     * 
		     * > {axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer}}}
		     * 
		     * Dates can be passed into the axis in almost any recognizable value and 
		     * will be parsed.  They will be rendered on the axis in the format
		     * specified by tickOptions.formatString.  e.g. tickOptions.formatString = '%Y-%m-%d'.
		     * 
		     * Accecptable format codes 
		     * are:
		     * 
		     * > Code    Result                  Description
		     * >             == Years ==
		     * > %Y      2008                Four-digit year
		     * > %y      08                  Two-digit year
		     * >             == Months ==
		     * > %m      09                  Two-digit month
		     * > %#m     9                   One or two-digit month
		     * > %B      September           Full month name
		     * > %b      Sep                 Abbreviated month name
		     * >             == Days ==
		     * > %d      05                  Two-digit day of month
		     * > %#d     5                   One or two-digit day of month
		     * > %e      5                   One or two-digit day of month
		     * > %A      Sunday              Full name of the day of the week
		     * > %a      Sun                 Abbreviated name of the day of the week
		     * > %w      0                   Number of the day of the week (0 = Sunday, 6 = Saturday)
		     * > %o      th                  The ordinal suffix string following the day of the month
		     * >             == Hours ==
		     * > %H      23                  Hours in 24-hour format (two digits)
		     * > %#H     3                   Hours in 24-hour integer format (one or two digits)
		     * > %I      11                  Hours in 12-hour format (two digits)
		     * > %#I     3                   Hours in 12-hour integer format (one or two digits)
		     * > %p      PM                  AM or PM
		     * >             == Minutes ==
		     * > %M      09                  Minutes (two digits)
		     * > %#M     9                   Minutes (one or two digits)
		     * >             == Seconds ==
		     * > %S      02                  Seconds (two digits)
		     * > %#S     2                   Seconds (one or two digits)
		     * > %s      1206567625723       Unix timestamp (Seconds past 1970-01-01 00:00:00)
		     * >             == Milliseconds ==
		     * > %N      008                 Milliseconds (three digits)
		     * > %#N     8                   Milliseconds (one to three digits)
		     * >             == Timezone ==
		     * > %O      360                 difference in minutes between local time and GMT
		     * > %Z      Mountain Standard Time  Name of timezone as reported by browser
		     * > %G      -06:00              Hours and minutes between GMT
		     * >             == Shortcuts ==
		     * > %F      2008-03-26          %Y-%m-%d
		     * > %T      05:06:30            %H:%M:%S
		     * > %X      05:06:30            %H:%M:%S
		     * > %x      03/26/08            %m/%d/%y
		     * > %D      03/26/08            %m/%d/%y
		     * > %#c     Wed Mar 26 15:31:00 2008  %a %b %e %H:%M:%S %Y
		     * > %v      3-Sep-2008          %e-%b-%Y
		     * > %R      15:31               %H:%M
		     * > %r      3:31:00 PM          %I:%M:%S %p
		     * >             == Characters ==
		     * > %n      \n                  Newline
		     * > %t      \t                  Tab
		     * > %%      %                   Percent Symbol 
		     */
		    $.jqplot.DateAxisRenderer = function() {
		        $.jqplot.LinearAxisRenderer.call(this);
				this.date = new $.jsDate();
		    };

		    $.jqplot.DateAxisRenderer.prototype = new $.jqplot.LinearAxisRenderer();
		    $.jqplot.DateAxisRenderer.prototype.constructor = $.jqplot.DateAxisRenderer;

		    $.jqplot.DateTickFormatter = function(format, val) {
		        if (!format) {
		            format = '%Y/%m/%d';
		        }
		        return $.jsDate.strftime(val, format);
		    };

		    $.jqplot.DateAxisRenderer.prototype.init = function(options){
		        // prop: tickRenderer
		        // A class of a rendering engine for creating the ticks labels displayed on the plot, 
		        // See <$.jqplot.AxisTickRenderer>.
		        // this.tickRenderer = $.jqplot.AxisTickRenderer;
		        // this.labelRenderer = $.jqplot.AxisLabelRenderer;
		        this.tickOptions.formatter = $.jqplot.DateTickFormatter;
		        this.daTickInterval = null;
		        this._daTickInterval = null;

		        $.extend(true, this, options);

		        var db = this._dataBounds,
					stats, 
					sum,
					s,
					d,
					pd,
					sd,
					intv;

		        // Go through all the series attached to this axis and find
		        // the min/max bounds for this axis.
		        for (var i=0; i<this._series.length; i++) {
					stats = {intervals:[], frequencies:{}, sortedIntervals:[], min:null, max:null, mean:null};
					sum = 0;
		            s = this._series[i];
		            d = s.data;
		            pd = s._plotData;
		            sd = s._stackData;
					intv = 0;

		            for (var j=0; j<d.length; j++) { 
		                if (this.name == 'xaxis' || this.name == 'x2axis') {
		                    d[j][0] = new $.jsDate(d[j][0]).getTime();
		                    pd[j][0] = new $.jsDate(d[j][0]).getTime();
		                    sd[j][0] = new $.jsDate(d[j][0]).getTime();
		                    if ((d[j][0] != null && d[j][0] < db.min) || db.min == null) {
		                        db.min = d[j][0];
		                    }
		                    if ((d[j][0] != null && d[j][0] > db.max) || db.max == null) {
		                        db.max = d[j][0];
		                    }
							if (j>0) {
								intv = Math.abs(d[j][0] - d[j-1][0]);
								stats.intervals.push(intv);
								if (stats.frequencies.hasOwnProperty(intv)) {
									stats.frequencies[intv] += 1;
								}
								else {
									stats.frequencies[intv] = 1;
								}
							}
							sum += intv;

		                }              
		                else {
		                    d[j][1] = new $.jsDate(d[j][1]).getTime();
		                    pd[j][1] = new $.jsDate(d[j][1]).getTime();
		                    sd[j][1] = new $.jsDate(d[j][1]).getTime();
		                    if ((d[j][1] != null && d[j][1] < db.min) || db.min == null) {
		                        db.min = d[j][1];
		                    }
		                    if ((d[j][1] != null && d[j][1] > db.max) || db.max == null) {
		                        db.max = d[j][1];
		                    }
							if (j>0) {
								intv = Math.abs(d[j][1] - d[j-1][1]);
								stats.intervals.push(intv);
								if (stats.frequencies.hasOwnProperty(intv)) {
									stats.frequencies[intv] += 1;
								}
								else {
									stats.frequencies[intv] = 1;
								}
							}
		                }
						sum += intv;              
		            }

					var tempf = 0,
						tempn=0;
					for (var n in stats.frequencies) {
						stats.sortedIntervals.push({interval:n, frequency:stats.frequencies[n]});
					}
					stats.sortedIntervals.sort(function(a, b){
						return b.frequency - a.frequency;
					});

					stats.min = $.jqplot.arrayMin(stats.intervals);
					stats.max = $.jqplot.arrayMax(stats.intervals);
					stats.mean = sum/d.length;
					this._intervalStats.push(stats);
					stats = sum = s = d = pd = sd = null;
		        }
				db = null;

		    };

		    // called with scope of an axis
		    $.jqplot.DateAxisRenderer.prototype.reset = function() {
		        this.min = this._min;
		        this.max = this._max;
		        this.tickInterval = this._tickInterval;
		        this.numberTicks = this._numberTicks;
		        this.daTickInterval = this._daTickInterval;
		        // this._ticks = this.__ticks;
		    };

		    $.jqplot.DateAxisRenderer.prototype.createTicks = function() {
		        // we're are operating on an axis here
		        var ticks = this._ticks;
		        var userTicks = this.ticks;
		        var name = this.name;
		        // databounds were set on axis initialization.
		        var db = this._dataBounds;
				var iv = this._intervalStats;
		        var dim, interval;
		        var min, max;
		        var pos1, pos2;
		        var tt, i;

		        // if we already have ticks, use them.
		        // ticks must be in order of increasing value.

		        min = ((this.min != null) ? new $.jsDate(this.min).getTime() : db.min);
		        max = ((this.max != null) ? new $.jsDate(this.max).getTime() : db.max);

		        var range = max - min;

		        if (userTicks.length) {
		            // ticks could be 1D or 2D array of [val, val, ,,,] or [[val, label], [val, label], ...] or mixed
		            for (i=0; i<userTicks.length; i++){
		                var ut = userTicks[i];
		                var t = new this.tickRenderer(this.tickOptions);
		                if (ut.constructor == Array) {
		                    t.value = new $.jsDate(ut[0]).getTime();
		                    t.label = ut[1];
		                    if (!this.showTicks) {
		                        t.showLabel = false;
		                        t.showMark = false;
		                    }
		                    else if (!this.showTickMarks) {
		                        t.showMark = false;
		                    }
		                    t.setTick(t.value, this.name);
		                    this._ticks.push(t);
		                }

		                else {
		                    t.value = new $.jsDate(ut).getTime();
		                    if (!this.showTicks) {
		                        t.showLabel = false;
		                        t.showMark = false;
		                    }
		                    else if (!this.showTickMarks) {
		                        t.showMark = false;
		                    }
		                    t.setTick(t.value, this.name);
		                    this._ticks.push(t);
		                }
		            }
		            this.numberTicks = userTicks.length;
		            this.min = this._ticks[0].value;
		            this.max = this._ticks[this.numberTicks-1].value;
		            this.daTickInterval = [(this.max - this.min) / (this.numberTicks - 1)/1000, 'seconds'];
		        }

		        ////////
		        // We don't have any ticks yet, let's make some!
		        // Doing complete autoscaling, no user options specified
		        ////////

		        else if (this.tickInterval == null && this.min == null && this.max == null && this.numberTicks == null) {
		            var ret = $.jqplot.LinearTickGenerator(min, max); 
		            // calculate a padded max and min, points should be less than these
		            // so that they aren't too close to the edges of the plot.
		            // User can adjust how much padding is allowed with pad, padMin and PadMax options. 
		            var tumin = min + range*(this.padMin - 1);
		            var tumax = max - range*(this.padMax - 1);

		            if (min <=tumin || max >= tumax) {
		                tumin = min - range*(this.padMin - 1);
		                tumax = max + range*(this.padMax - 1);
		                ret = $.jqplot.LinearTickGenerator(tumin, tumax);
		            }

		            this.min = ret[0];
		            this.max = ret[1];
		            this.numberTicks = ret[2];
		            this.tickInterval = ret[4];
		            this.daTickInterval = [this.tickInterval/1000, 'seconds'];

		            for (var i=0; i<this.numberTicks; i++){
		                var min = new $.jsDate(this.min);
		                tt = min.add(i*this.daTickInterval[0], this.daTickInterval[1]).getTime();
		                var t = new this.tickRenderer(this.tickOptions);
		                // var t = new $.jqplot.AxisTickRenderer(this.tickOptions);
		                if (!this.showTicks) {
		                    t.showLabel = false;
		                    t.showMark = false;
		                }
		                else if (!this.showTickMarks) {
		                    t.showMark = false;
		                }
		                t.setTick(tt, this.name);
		                this._ticks.push(t);
		            }           
		        }

		        ////////
		        // Some option(s) specified, work around that.
		        ////////

		        else {		
		            if (name == 'xaxis' || name == 'x2axis') {
		                dim = this._plotDimensions.width;
		            }
		            else {
		                dim = this._plotDimensions.height;
		            }

		            // if min, max and number of ticks specified, user can't specify interval.
		            if (this.min != null && this.max != null && this.numberTicks != null) {
		                this.tickInterval = null;
		            }

		            // if user specified a tick interval, convert to usable.
		            if (this.tickInterval != null)
		            {
		                // if interval is a number or can be converted to one, use it.
		                // Assume it is in SECONDS!!!
		                if (Number(this.tickInterval)) {
		                    this.daTickInterval = [Number(this.tickInterval), 'seconds'];
		                }
		                // else, parse out something we can build from.
		                else if (typeof this.tickInterval == "string") {
		                    var parts = this.tickInterval.split(' ');
		                    if (parts.length == 1) {
		                        this.daTickInterval = [1, parts[0]];
		                    }
		                    else if (parts.length == 2) {
		                        this.daTickInterval = [parts[0], parts[1]];
		                    }
		                }
		            }

		            // if min and max are same, space them out a bit
		            if (min == max) {
		                var adj = 24*60*60*500;  // 1/2 day
		                min -= adj;
		                max += adj;
		            }

		            range = max - min;

					var optNumTicks = 2 + parseInt(Math.max(0, dim-100)/100, 10);


					// Here try to set ticks based on data spacing.
		            // if (this.min == null && this.max == null && this.numberTicks == null && this.tickInterval == null) {
		            //  //
		            // }


		            var rmin, rmax;

		            rmin = (this.min != null) ? new $.jsDate(this.min).getTime() : min - range/2*(this.padMin - 1);
		            rmax = (this.max != null) ? new $.jsDate(this.max).getTime() : max + range/2*(this.padMax - 1);
		            this.min = rmin;
		            this.max = rmax;
		            range = this.max - this.min;

		            if (this.numberTicks == null){
		                // if tickInterval is specified by user, we will ignore computed maximum.
		                // max will be equal or greater to fit even # of ticks.
		                if (this.daTickInterval != null) {
		                    var nc = new $.jsDate(this.max).diff(this.min, this.daTickInterval[1], true);
		                    this.numberTicks = Math.ceil(nc/this.daTickInterval[0]) +1;
		                    // this.max = new $.jsDate(this.min).add(this.numberTicks-1, this.daTickInterval[1]).getTime();
		                    this.max = new $.jsDate(this.min).add((this.numberTicks-1) * this.daTickInterval[0], this.daTickInterval[1]).getTime();
		                }
		                else if (dim > 200) {
		                    this.numberTicks = parseInt(3+(dim-200)/100, 10);
		                }
		                else {
		                    this.numberTicks = 2;
		                }
		            }

		            if (this.daTickInterval == null) {
		                this.daTickInterval = [range / (this.numberTicks-1)/1000, 'seconds'];
		            }
		            for (var i=0; i<this.numberTicks; i++){
		                var min = new $.jsDate(this.min);
		                tt = min.add(i*this.daTickInterval[0], this.daTickInterval[1]).getTime();
		                var t = new this.tickRenderer(this.tickOptions);
		                // var t = new $.jqplot.AxisTickRenderer(this.tickOptions);
		                if (!this.showTicks) {
		                    t.showLabel = false;
		                    t.showMark = false;
		                }
		                else if (!this.showTickMarks) {
		                    t.showMark = false;
		                }
		                t.setTick(tt, this.name);
		                this._ticks.push(t);
		            }
		        }


		        if (this._daTickInterval == null) {
		            this._daTickInterval = this.daTickInterval;    
		        }
		    };

		})(jQuery);


		/**
		 * jqPlot
		 * Pure JavaScript plotting plugin using jQuery
		 *
		 * Version: 1.0.0b2_r792
		 *
		 * Copyright (c) 2009-2011 Chris Leonello
		 * jqPlot is currently available for use in all personal or commercial projects 
		 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
		 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
		 * choose the license that best suits your project and use it accordingly. 
		 *
		 * Although not required, the author would appreciate an email letting him 
		 * know of any substantial use of jqPlot.  You can reach the author at: 
		 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
		 *
		 * If you are feeling kind and generous, consider supporting the project by
		 * making a donation at: http://www.jqplot.com/donate.php .
		 *
		 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
		 *
		 *     version 2007.04.27
		 *     author Ash Searle
		 *     http://hexmen.com/blog/2007/03/printf-sprintf/
		 *     http://hexmen.com/js/sprintf.js
		 *     The author (Ash Searle) has placed this code in the public domain:
		 *     "This code is unrestricted: you are free to use it however you like."
		 * 
		 */
		(function($) {
		    /**
		     * Class: $.jqplot.PieRenderer
		     * Plugin renderer to draw a pie chart.
		     * x values, if present, will be used as slice labels.
		     * y values give slice size.
		     * 
		     * To use this renderer, you need to include the 
		     * pie renderer plugin, for example:
		     * 
		     * > <script type="text/javascript" src="plugins/jqplot.pieRenderer.js"></script>
		     * 
		     * Properties described here are passed into the $.jqplot function
		     * as options on the series renderer.  For example:
		     * 
		     * > plot2 = $.jqplot('chart2', [s1, s2], {
		     * >     seriesDefaults: {
		     * >         renderer:$.jqplot.PieRenderer,
		     * >         rendererOptions:{
		     * >              sliceMargin: 2,
		     * >              startAngle: -90
		     * >          }
		     * >      }
		     * > });
		     * 
		     * A pie plot will trigger events on the plot target
		     * according to user interaction.  All events return the event object,
		     * the series index, the point (slice) index, and the point data for 
		     * the appropriate slice.
		     * 
		     * 'jqplotDataMouseOver' - triggered when user mouseing over a slice.
		     * 'jqplotDataHighlight' - triggered the first time user mouses over a slice,
		     * if highlighting is enabled.
		     * 'jqplotDataUnhighlight' - triggered when a user moves the mouse out of
		     * a highlighted slice.
		     * 'jqplotDataClick' - triggered when the user clicks on a slice.
		     * 'jqplotDataRightClick' - tiggered when the user right clicks on a slice if
		     * the "captureRightClick" option is set to true on the plot.
		     */
		    $.jqplot.PieRenderer = function(){
		        $.jqplot.LineRenderer.call(this);
		    };

		    $.jqplot.PieRenderer.prototype = new $.jqplot.LineRenderer();
		    $.jqplot.PieRenderer.prototype.constructor = $.jqplot.PieRenderer;

		    // called with scope of a series
		    $.jqplot.PieRenderer.prototype.init = function(options, plot) {
		        // Group: Properties
		        //
		        // prop: diameter
		        // Outer diameter of the pie, auto computed by default
		        this.diameter = null;
		        // prop: padding
		        // padding between the pie and plot edges, legend, etc.
		        this.padding = 20;
		        // prop: sliceMargin
		        // angular spacing between pie slices in degrees.
		        this.sliceMargin = 0;
		        // prop: fill
		        // true or false, wether to fil the slices.
		        this.fill = true;
		        // prop: shadowOffset
		        // offset of the shadow from the slice and offset of 
		        // each succesive stroke of the shadow from the last.
		        this.shadowOffset = 2;
		        // prop: shadowAlpha
		        // transparency of the shadow (0 = transparent, 1 = opaque)
		        this.shadowAlpha = 0.07;
		        // prop: shadowDepth
		        // number of strokes to apply to the shadow, 
		        // each stroke offset shadowOffset from the last.
		        this.shadowDepth = 5;
		        // prop: highlightMouseOver
		        // True to highlight slice when moused over.
		        // This must be false to enable highlightMouseDown to highlight when clicking on a slice.
		        this.highlightMouseOver = true;
		        // prop: highlightMouseDown
		        // True to highlight when a mouse button is pressed over a slice.
		        // This will be disabled if highlightMouseOver is true.
		        this.highlightMouseDown = false;
		        // prop: highlightColors
		        // an array of colors to use when highlighting a slice.
		        this.highlightColors = [];
		        // prop: dataLabels
		        // Either 'label', 'value', 'percent' or an array of labels to place on the pie slices.
		        // Defaults to percentage of each pie slice.
		        this.dataLabels = 'percent';
		        // prop: showDataLabels
		        // true to show data labels on slices.
		        this.showDataLabels = false;
		        // prop: dataLabelFormatString
		        // Format string for data labels.  If none, '%s' is used for "label" and for arrays, '%d' for value and '%d%%' for percentage.
		        this.dataLabelFormatString = null;
		        // prop: dataLabelThreshold
		        // Threshhold in percentage (0-100) of pie area, below which no label will be displayed.
		        // This applies to all label types, not just to percentage labels.
		        this.dataLabelThreshold = 3;
		        // prop: dataLabelPositionFactor
		        // A Multiplier (0-1) of the pie radius which controls position of label on slice.
		        // Increasing will slide label toward edge of pie, decreasing will slide label toward center of pie.
		        this.dataLabelPositionFactor = 0.52;
		        // prop: dataLabelNudge
		        // Number of pixels to slide the label away from (+) or toward (-) the center of the pie.
		        this.dataLabelNudge = 2;
		        // prop: dataLabelCenterOn
		        // True to center the data label at its position.
		        // False to set the inside facing edge of the label at its position.
		        this.dataLabelCenterOn = true;
		        // prop: startAngle
		        // Angle to start drawing pie in degrees.  
		        // According to orientation of canvas coordinate system:
		        // 0 = on the positive x axis
		        // -90 = on the positive y axis.
		        // 90 = on the negaive y axis.
		        // 180 or - 180 = on the negative x axis.
		        this.startAngle = 0;
		        this.tickRenderer = $.jqplot.PieTickRenderer;
		        // Used as check for conditions where pie shouldn't be drawn.
		        this._drawData = true;
		        this._type = 'pie';

		        // if user has passed in highlightMouseDown option and not set highlightMouseOver, disable highlightMouseOver
		        if (options.highlightMouseDown && options.highlightMouseOver == null) {
		            options.highlightMouseOver = false;
		        }

		        $.extend(true, this, options);

		        if (this.sliceMargin < 0) {
		            this.sliceMargin = 0;
		        }

		        this._diameter = null;
		        this._radius = null;
		        // array of [start,end] angles arrays, one for each slice.  In radians.
		        this._sliceAngles = [];
		        // index of the currenty highlighted point, if any
		        this._highlightedPoint = null;

		        // set highlight colors if none provided
		        if (this.highlightColors.length == 0) {
		            for (var i=0; i<this.seriesColors.length; i++){
		                var rgba = $.jqplot.getColorComponents(this.seriesColors[i]);
		                var newrgb = [rgba[0], rgba[1], rgba[2]];
		                var sum = newrgb[0] + newrgb[1] + newrgb[2];
		                for (var j=0; j<3; j++) {
		                    // when darkening, lowest color component can be is 60.
		                    newrgb[j] = (sum > 570) ?  newrgb[j] * 0.8 : newrgb[j] + 0.3 * (255 - newrgb[j]);
		                    newrgb[j] = parseInt(newrgb[j], 10);
		                }
		                this.highlightColors.push('rgb('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+')');
		            }
		        }

		        this.highlightColorGenerator = new $.jqplot.ColorGenerator(this.highlightColors);

		        plot.postParseOptionsHooks.addOnce(postParseOptions);
		        plot.postInitHooks.addOnce(postInit);
		        plot.eventListenerHooks.addOnce('jqplotMouseMove', handleMove);
		        plot.eventListenerHooks.addOnce('jqplotMouseDown', handleMouseDown);
		        plot.eventListenerHooks.addOnce('jqplotMouseUp', handleMouseUp);
		        plot.eventListenerHooks.addOnce('jqplotClick', handleClick);
		        plot.eventListenerHooks.addOnce('jqplotRightClick', handleRightClick);
		        plot.postDrawHooks.addOnce(postPlotDraw);
		    };

		    $.jqplot.PieRenderer.prototype.setGridData = function(plot) {
		        // set gridData property.  This will hold angle in radians of each data point.
		        var stack = [];
		        var td = [];
		        var sa = this.startAngle/180*Math.PI;
		        var tot = 0;
		        // don't know if we have any valid data yet, so set plot to not draw.
		        this._drawData = false;
		        for (var i=0; i<this.data.length; i++){
		            if (this.data[i][1] != 0) {
		                // we have data, O.K. to draw.
		                this._drawData = true;
		            }
		            stack.push(this.data[i][1]);
		            td.push([this.data[i][0]]);
		            if (i>0) {
		                stack[i] += stack[i-1];
		            }
		            tot += this.data[i][1];
		        }
		        var fact = Math.PI*2/stack[stack.length - 1];

		        for (var i=0; i<stack.length; i++) {
		            td[i][1] = stack[i] * fact;
		            td[i][2] = this.data[i][1]/tot;
		        }
		        this.gridData = td;
		    };

		    $.jqplot.PieRenderer.prototype.makeGridData = function(data, plot) {
		        var stack = [];
		        var td = [];
		        var tot = 0;
		        var sa = this.startAngle/180*Math.PI;
		        // don't know if we have any valid data yet, so set plot to not draw.
		        this._drawData = false;
		        for (var i=0; i<data.length; i++){
		            if (this.data[i][1] != 0) {
		                // we have data, O.K. to draw.
		                this._drawData = true;
		            }
		            stack.push(data[i][1]);
		            td.push([data[i][0]]);
		            if (i>0) {
		                stack[i] += stack[i-1];
		            }
		            tot += data[i][1];
		        }
		        var fact = Math.PI*2/stack[stack.length - 1];

		        for (var i=0; i<stack.length; i++) {
		            td[i][1] = stack[i] * fact;
		            td[i][2] = data[i][1]/tot;
		        }
		        return td;
		    };

		    function calcRadiusAdjustment(ang) {
		        return Math.sin((ang - (ang-Math.PI) / 8 / Math.PI )/2.0);
		    }

		    function calcRPrime(ang1, ang2, sliceMargin, fill, lineWidth) {
		        var rprime = 0;
		        var ang = ang2 - ang1;
		        var absang = Math.abs(ang);
		        var sm = sliceMargin;
		        if (fill == false) {
		            sm += lineWidth;
		        }

		        if (sm > 0 && absang > 0.01 && absang < 6.282) {
		            rprime = parseFloat(sm) / 2.0 / calcRadiusAdjustment(ang);
		        }

		        return rprime;
		    }

		    $.jqplot.PieRenderer.prototype.drawSlice = function (ctx, ang1, ang2, color, isShadow) {
		        if (this._drawData) {
		            var r = this._radius;
		            var fill = this.fill;
		            var lineWidth = this.lineWidth;
		            var sm = this.sliceMargin;
		            if (this.fill == false) {
		                sm += this.lineWidth;
		            }
		            ctx.save();
		            ctx.translate(this._center[0], this._center[1]);

		            var rprime = calcRPrime(ang1, ang2, this.sliceMargin, this.fill, this.lineWidth);

		            var transx = rprime * Math.cos((ang1 + ang2) / 2.0);
		            var transy = rprime * Math.sin((ang1 + ang2) / 2.0);

		            if ((ang2 - ang1) <= Math.PI) {
		                r -= rprime;  
		            }
		            else {
		                r += rprime;
		            }

		            ctx.translate(transx, transy);

		            if (isShadow) {
		                for (var i=0, l=this.shadowDepth; i<l; i++) {
		                    ctx.save();
		                    ctx.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI), this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI));
		                    doDraw(r);
		                }
		                for (var i=0, l=this.shadowDepth; i<l; i++) {
		                    ctx.restore();
		                }
		            }

		            else {
		                doDraw(r);
		            }
		            ctx.restore();
		        }

		        function doDraw (rad) {
		            // Fix for IE and Chrome that can't seem to draw circles correctly.
		            // ang2 should always be <= 2 pi since that is the way the data is converted.
		            // 2Pi = 6.2831853, Pi = 3.1415927
		             if (ang2 > 6.282 + this.startAngle) {
		                ang2 = 6.282 + this.startAngle;
		                if (ang1 > ang2) {
		                    ang1 = 6.281 + this.startAngle;
		                }
		            }
		            // Fix for IE, where it can't seem to handle 0 degree angles.  Also avoids
		            // ugly line on unfilled pies.
		            if (ang1 >= ang2) {
		                return;
		            }            

		            ctx.beginPath();  
		            ctx.fillStyle = color;
		            ctx.strokeStyle = color;
		            ctx.lineWidth = lineWidth;
		            ctx.arc(0, 0, rad, ang1, ang2, false);
		            ctx.lineTo(0,0);
		            ctx.closePath();

		            if (fill) {
		                ctx.fill();
		            }
		            else {
		                ctx.stroke();
		            }
		        }
		    };

		    // called with scope of series
		    $.jqplot.PieRenderer.prototype.draw = function (ctx, gd, options, plot) {
		        var i;
		        var opts = (options != undefined) ? options : {};
		        // offset and direction of offset due to legend placement
		        var offx = 0;
		        var offy = 0;
		        var trans = 1;
		        var colorGenerator = new $.jqplot.ColorGenerator(this.seriesColors);
		        if (options.legendInfo && options.legendInfo.placement == 'insideGrid') {
		            var li = options.legendInfo;
		            switch (li.location) {
		                case 'nw':
		                    offx = li.width + li.xoffset;
		                    break;
		                case 'w':
		                    offx = li.width + li.xoffset;
		                    break;
		                case 'sw':
		                    offx = li.width + li.xoffset;
		                    break;
		                case 'ne':
		                    offx = li.width + li.xoffset;
		                    trans = -1;
		                    break;
		                case 'e':
		                    offx = li.width + li.xoffset;
		                    trans = -1;
		                    break;
		                case 'se':
		                    offx = li.width + li.xoffset;
		                    trans = -1;
		                    break;
		                case 'n':
		                    offy = li.height + li.yoffset;
		                    break;
		                case 's':
		                    offy = li.height + li.yoffset;
		                    trans = -1;
		                    break;
		                default:
		                    break;
		            }
		        }

		        var shadow = (opts.shadow != undefined) ? opts.shadow : this.shadow;
		        var fill = (opts.fill != undefined) ? opts.fill : this.fill;
		        var cw = ctx.canvas.width;
		        var ch = ctx.canvas.height;
		        var w = cw - offx - 2 * this.padding;
		        var h = ch - offy - 2 * this.padding;
		        var mindim = Math.min(w,h);
		        var d = mindim;

		        // Fixes issue #272.  Thanks hugwijst!
		        // reset slice angles array.
		        this._sliceAngles = [];

		        var sm = this.sliceMargin;
		        if (this.fill == false) {
		            sm += this.lineWidth;
		        }

		        var rprime;
		        var maxrprime = 0;

		        var ang, ang1, ang2, shadowColor;
		        var sa = this.startAngle / 180 * Math.PI;

		        // have to pre-draw shadows, so loop throgh here and calculate some values also.
		        for (var i=0, l=gd.length; i<l; i++) {
		            ang1 = (i == 0) ? sa : gd[i-1][1] + sa;
		            ang2 = gd[i][1] + sa;

		            this._sliceAngles.push([ang1, ang2]);

		            rprime = calcRPrime(ang1, ang2, this.sliceMargin, this.fill, this.lineWidth);

		            if (Math.abs(ang2-ang1) > Math.PI) {
		                maxrprime = Math.max(rprime, maxrprime);  
		            }
		        }

		        if (this.diameter != null && this.diameter > 0) {
		            this._diameter = this.diameter - 2*maxrprime;
		        }
		        else {
		            this._diameter = d - 2*maxrprime;
		        }

		        // Need to check for undersized pie.  This can happen if
		        // plot area too small and legend is too big.
		        if (this._diameter < 6) {
		            $.jqplot.log('Diameter of pie too small, not rendering.');
		            return;
		        }

		        var r = this._radius = this._diameter/2;

		        this._center = [(cw - trans * offx)/2 + trans * offx + maxrprime * Math.cos(sa), (ch - trans*offy)/2 + trans * offy + maxrprime * Math.sin(sa)];

		        if (this.shadow) {
		            for (var i=0, l=gd.length; i<l; i++) {
		                shadowColor = 'rgba(0,0,0,'+this.shadowAlpha+')';
		                this.renderer.drawSlice.call (this, ctx, this._sliceAngles[i][0], this._sliceAngles[i][1], shadowColor, true);
		            }
		        }

		        for (var i=0; i<gd.length; i++) {

		            this.renderer.drawSlice.call (this, ctx, this._sliceAngles[i][0], this._sliceAngles[i][1], colorGenerator.next(), false);

		            if (this.showDataLabels && gd[i][2]*100 >= this.dataLabelThreshold) {
		                var fstr, avgang = (this._sliceAngles[i][0] + this._sliceAngles[i][1])/2, label;

		                if (this.dataLabels == 'label') {
		                    fstr = this.dataLabelFormatString || '%s';
		                    label = $.jqplot.sprintf(fstr, gd[i][0]);
		                }
		                else if (this.dataLabels == 'value') {
		                    fstr = this.dataLabelFormatString || '%d';
		                    label = $.jqplot.sprintf(fstr, this.data[i][1]);
		                }
		                else if (this.dataLabels == 'percent') {
		                    fstr = this.dataLabelFormatString || '%d%%';
		                    label = $.jqplot.sprintf(fstr, gd[i][2]*100);
		                }
		                else if (this.dataLabels.constructor == Array) {
		                    fstr = this.dataLabelFormatString || '%s';
		                    label = $.jqplot.sprintf(fstr, this.dataLabels[i]);
		                }

		                var fact = (this._radius ) * this.dataLabelPositionFactor + this.sliceMargin + this.dataLabelNudge;

		                var x = this._center[0] + Math.cos(avgang) * fact + this.canvas._offsets.left;
		                var y = this._center[1] + Math.sin(avgang) * fact + this.canvas._offsets.top;

		                var labelelem = $('<div class="jqplot-pie-series jqplot-data-label" style="position:absolute;">' + label + '</div>').insertBefore(plot.eventCanvas._elem);
		                if (this.dataLabelCenterOn) {
		                    x -= labelelem.width()/2;
		                    y -= labelelem.height()/2;
		                }
		                else {
		                    x -= labelelem.width() * Math.sin(avgang/2);
		                    y -= labelelem.height()/2;
		                }
		                x = Math.round(x);
		                y = Math.round(y);
		                labelelem.css({left: x, top: y});
		            }
		        }            
		    };

		    $.jqplot.PieAxisRenderer = function() {
		        $.jqplot.LinearAxisRenderer.call(this);
		    };

		    $.jqplot.PieAxisRenderer.prototype = new $.jqplot.LinearAxisRenderer();
		    $.jqplot.PieAxisRenderer.prototype.constructor = $.jqplot.PieAxisRenderer;


		    // There are no traditional axes on a pie chart.  We just need to provide
		    // dummy objects with properties so the plot will render.
		    // called with scope of axis object.
		    $.jqplot.PieAxisRenderer.prototype.init = function(options){
		        //
		        this.tickRenderer = $.jqplot.PieTickRenderer;
		        $.extend(true, this, options);
		        // I don't think I'm going to need _dataBounds here.
		        // have to go Axis scaling in a way to fit chart onto plot area
		        // and provide u2p and p2u functionality for mouse cursor, etc.
		        // for convienence set _dataBounds to 0 and 100 and
		        // set min/max to 0 and 100.
		        this._dataBounds = {min:0, max:100};
		        this.min = 0;
		        this.max = 100;
		        this.showTicks = false;
		        this.ticks = [];
		        this.showMark = false;
		        this.show = false; 
		    };




		    $.jqplot.PieLegendRenderer = function(){
		        $.jqplot.TableLegendRenderer.call(this);
		    };

		    $.jqplot.PieLegendRenderer.prototype = new $.jqplot.TableLegendRenderer();
		    $.jqplot.PieLegendRenderer.prototype.constructor = $.jqplot.PieLegendRenderer;

		    /**
		     * Class: $.jqplot.PieLegendRenderer
		     * Legend Renderer specific to pie plots.  Set by default
		     * when user creates a pie plot.
		     */
		    $.jqplot.PieLegendRenderer.prototype.init = function(options) {
		        // Group: Properties
		        //
		        // prop: numberRows
		        // Maximum number of rows in the legend.  0 or null for unlimited.
		        this.numberRows = null;
		        // prop: numberColumns
		        // Maximum number of columns in the legend.  0 or null for unlimited.
		        this.numberColumns = null;
		        $.extend(true, this, options);
		    };

		    // called with context of legend
		    $.jqplot.PieLegendRenderer.prototype.draw = function() {
		        var legend = this;
		        if (this.show) {
		            var series = this._series;


		            this._elem = $(document.createElement('table'));
		            this._elem.addClass('jqplot-table-legend');

		            var ss = {position:'absolute'};
		            if (this.background) {
		                ss['background'] = this.background;
		            }
		            if (this.border) {
		                ss['border'] = this.border;
		            }
		            if (this.fontSize) {
		                ss['fontSize'] = this.fontSize;
		            }
		            if (this.fontFamily) {
		                ss['fontFamily'] = this.fontFamily;
		            }
		            if (this.textColor) {
		                ss['textColor'] = this.textColor;
		            }
		            if (this.marginTop != null) {
		                ss['marginTop'] = this.marginTop;
		            }
		            if (this.marginBottom != null) {
		                ss['marginBottom'] = this.marginBottom;
		            }
		            if (this.marginLeft != null) {
		                ss['marginLeft'] = this.marginLeft;
		            }
		            if (this.marginRight != null) {
		                ss['marginRight'] = this.marginRight;
		            }

		            this._elem.css(ss);

		            // Pie charts legends don't go by number of series, but by number of data points
		            // in the series.  Refactor things here for that.

		            var pad = false, 
		                reverse = false,
		                nr, 
		                nc;
		            var s = series[0];
		            var colorGenerator = new $.jqplot.ColorGenerator(s.seriesColors);

		            if (s.show) {
		                var pd = s.data;
		                if (this.numberRows) {
		                    nr = this.numberRows;
		                    if (!this.numberColumns){
		                        nc = Math.ceil(pd.length/nr);
		                    }
		                    else{
		                        nc = this.numberColumns;
		                    }
		                }
		                else if (this.numberColumns) {
		                    nc = this.numberColumns;
		                    nr = Math.ceil(pd.length/this.numberColumns);
		                }
		                else {
		                    nr = pd.length;
		                    nc = 1;
		                }

		                var i, j;
		                var tr, td1, td2; 
		                var lt, rs, color;
		                var idx = 0; 
		                var div0, div1;   

		                for (i=0; i<nr; i++) {
		                    tr = $(document.createElement('tr'));
		                    tr.addClass('jqplot-table-legend');

		                    if (reverse){
		                        tr.prependTo(this._elem);
		                    }

		                    else{
		                        tr.appendTo(this._elem);
		                    }

		                    for (j=0; j<nc; j++) {
		                        if (idx < pd.length){
		                            lt = this.labels[idx] || pd[idx][0].toString();
		                            color = colorGenerator.next();
		                            if (!reverse){
		                                if (i>0){
		                                    pad = true;
		                                }
		                                else{
		                                    pad = false;
		                                }
		                            }
		                            else{
		                                if (i == nr -1){
		                                    pad = false;
		                                }
		                                else{
		                                    pad = true;
		                                }
		                            }
		                            rs = (pad) ? this.rowSpacing : '0';



		                            td1 = $(document.createElement('td'));
		                            td1.addClass('jqplot-table-legend');
		                            td1.css({textAlign: 'center', paddingTop: rs});

		                            div0 = $(document.createElement('div'));
		                            div1 = $(document.createElement('div'));
		                            div1.addClass('jqplot-table-legend-swatch');
		                            div1.css({backgroundColor: color, borderColor: color});
		                            td1.append(div0.append(div1));

		                            td2 = $(document.createElement('td'));
		                            td2.addClass('jqplot-table-legend');
		                            td2.css('paddingTop', rs);

		                            if (this.escapeHtml){
		                                td2.text(lt);
		                            }
		                            else {
		                                td2.html(lt);
		                            }
		                            if (reverse) {
		                                td2.prependTo(tr);
		                                td1.prependTo(tr);
		                            }
		                            else {
		                                td1.appendTo(tr);
		                                td2.appendTo(tr);
		                            }
		                            pad = true;
		                        }
		                        idx++;
		                    }   
		                }
		            }
		        }
		        return this._elem;                
		    };

		    $.jqplot.PieRenderer.prototype.handleMove = function(ev, gridpos, datapos, neighbor, plot) {
		        if (neighbor) {
		            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
		            plot.target.trigger('jqplotDataMouseOver', ins);
		            if (plot.series[ins[0]].highlightMouseOver && !(ins[0] == plot.plugins.pieRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
		                plot.target.trigger('jqplotDataHighlight', ins);
		                highlight (plot, ins[0], ins[1]);
		            }
		        }
		        else if (neighbor == null) {
		            unhighlight (plot);
		        }
		    };


		    // this.eventCanvas._elem.bind($.jqplot.eventListenerHooks[i][0], {plot:this}, $.jqplot.eventListenerHooks[i][1]);

		    // setup default renderers for axes and legend so user doesn't have to
		    // called with scope of plot
		    function preInit(target, data, options) {
		        options = options || {};
		        options.axesDefaults = options.axesDefaults || {};
		        options.legend = options.legend || {};
		        options.seriesDefaults = options.seriesDefaults || {};
		        // only set these if there is a pie series
		        var setopts = false;
		        if (options.seriesDefaults.renderer == $.jqplot.PieRenderer) {
		            setopts = true;
		        }
		        else if (options.series) {
		            for (var i=0; i < options.series.length; i++) {
		                if (options.series[i].renderer == $.jqplot.PieRenderer) {
		                    setopts = true;
		                }
		            }
		        }

		        if (setopts) {
		            options.axesDefaults.renderer = $.jqplot.PieAxisRenderer;
		            options.legend.renderer = $.jqplot.PieLegendRenderer;
		            options.legend.preDraw = true;
		            options.seriesDefaults.pointLabels = {show: false};
		        }
		    }

		    function postInit(target, data, options) {
		        for (var i=0; i<this.series.length; i++) {
		            if (this.series[i].renderer.constructor == $.jqplot.PieRenderer) {
		                // don't allow mouseover and mousedown at same time.
		                if (this.series[i].highlightMouseOver) {
		                    this.series[i].highlightMouseDown = false;
		                }
		            }
		        }
		        this.target.bind('mouseout', {plot:this}, function (ev) { unhighlight(ev.data.plot); });
		    }

		    // called with scope of plot
		    function postParseOptions(options) {
		        for (var i=0; i<this.series.length; i++) {
		            this.series[i].seriesColors = this.seriesColors;
		            this.series[i].colorGenerator = this.colorGenerator;
		        }
		    }

		    function highlight (plot, sidx, pidx) {
		        var s = plot.series[sidx];
		        var canvas = plot.plugins.pieRenderer.highlightCanvas;
		        canvas._ctx.clearRect(0,0,canvas._ctx.canvas.width, canvas._ctx.canvas.height);
		        s._highlightedPoint = pidx;
		        plot.plugins.pieRenderer.highlightedSeriesIndex = sidx;
		        s.renderer.drawSlice.call(s, canvas._ctx, s._sliceAngles[pidx][0], s._sliceAngles[pidx][1], s.highlightColorGenerator.get(pidx), false);
		    }

		    function unhighlight (plot) {
		        var canvas = plot.plugins.pieRenderer.highlightCanvas;
		        canvas._ctx.clearRect(0,0, canvas._ctx.canvas.width, canvas._ctx.canvas.height);
		        for (var i=0; i<plot.series.length; i++) {
		            plot.series[i]._highlightedPoint = null;
		        }
		        plot.plugins.pieRenderer.highlightedSeriesIndex = null;
		        plot.target.trigger('jqplotDataUnhighlight');
		    }

		    function handleMove(ev, gridpos, datapos, neighbor, plot) {
		        if (neighbor) {
		            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
		            var evt1 = jQuery.Event('jqplotDataMouseOver');
		            evt1.pageX = ev.pageX;
		            evt1.pageY = ev.pageY;
		            plot.target.trigger(evt1, ins);
		            if (plot.series[ins[0]].highlightMouseOver && !(ins[0] == plot.plugins.pieRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
		                var evt = jQuery.Event('jqplotDataHighlight');
		                evt.pageX = ev.pageX;
		                evt.pageY = ev.pageY;
		                plot.target.trigger(evt, ins);
		                highlight (plot, ins[0], ins[1]);
		            }
		        }
		        else if (neighbor == null) {
		            unhighlight (plot);
		        }
		    } 

		    function handleMouseDown(ev, gridpos, datapos, neighbor, plot) {
		        if (neighbor) {
		            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
		            if (plot.series[ins[0]].highlightMouseDown && !(ins[0] == plot.plugins.pieRenderer.highlightedSeriesIndex && ins[1] == plot.series[ins[0]]._highlightedPoint)) {
		                var evt = jQuery.Event('jqplotDataHighlight');
		                evt.pageX = ev.pageX;
		                evt.pageY = ev.pageY;
		                plot.target.trigger(evt, ins);
		                highlight (plot, ins[0], ins[1]);
		            }
		        }
		        else if (neighbor == null) {
		            unhighlight (plot);
		        }
		    }

		    function handleMouseUp(ev, gridpos, datapos, neighbor, plot) {
		        var idx = plot.plugins.pieRenderer.highlightedSeriesIndex;
		        if (idx != null && plot.series[idx].highlightMouseDown) {
		            unhighlight(plot);
		        }
		    }

		    function handleClick(ev, gridpos, datapos, neighbor, plot) {
		        if (neighbor) {
		            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
		            var evt = jQuery.Event('jqplotDataClick');
		            evt.pageX = ev.pageX;
		            evt.pageY = ev.pageY;
		            plot.target.trigger(evt, ins);
		        }
		    }

		    function handleRightClick(ev, gridpos, datapos, neighbor, plot) {
		        if (neighbor) {
		            var ins = [neighbor.seriesIndex, neighbor.pointIndex, neighbor.data];
		            var idx = plot.plugins.pieRenderer.highlightedSeriesIndex;
		            if (idx != null && plot.series[idx].highlightMouseDown) {
		                unhighlight(plot);
		            }
		            var evt = jQuery.Event('jqplotDataRightClick');
		            evt.pageX = ev.pageX;
		            evt.pageY = ev.pageY;
		            plot.target.trigger(evt, ins);
		        }
		    }    

		    // called within context of plot
		    // create a canvas which we can draw on.
		    // insert it before the eventCanvas, so eventCanvas will still capture events.
		    function postPlotDraw() {
		        // Memory Leaks patch    
		        if (this.plugins.pieRenderer && this.plugins.pieRenderer.highlightCanvas) {
		            this.plugins.pieRenderer.highlightCanvas.resetCanvas();
		            this.plugins.pieRenderer.highlightCanvas = null;
		        }

		        this.plugins.pieRenderer = {highlightedSeriesIndex:null};
		        this.plugins.pieRenderer.highlightCanvas = new $.jqplot.GenericCanvas();

		        // do we have any data labels?  if so, put highlight canvas before those
		        var labels = $(this.targetId+' .jqplot-data-label');
		        if (labels.length) {
		            $(labels[0]).before(this.plugins.pieRenderer.highlightCanvas.createElement(this._gridPadding, 'jqplot-pieRenderer-highlight-canvas', this._plotDimensions, this));
		        }
		        // else put highlight canvas before event canvas.
		        else {
		            this.eventCanvas._elem.before(this.plugins.pieRenderer.highlightCanvas.createElement(this._gridPadding, 'jqplot-pieRenderer-highlight-canvas', this._plotDimensions, this));
		        }

		        var hctx = this.plugins.pieRenderer.highlightCanvas.setContext();
		    }

		    $.jqplot.preInitHooks.push(preInit);

		    $.jqplot.PieTickRenderer = function() {
		        $.jqplot.AxisTickRenderer.call(this);
		    };

		    $.jqplot.PieTickRenderer.prototype = new $.jqplot.AxisTickRenderer();
		    $.jqplot.PieTickRenderer.prototype.constructor = $.jqplot.PieTickRenderer;

		})(jQuery);



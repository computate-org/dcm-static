
//////////
// site //
//////////

function addGlow($input, jqXhr) {
  if($input) {
    $input.classList.add('glowSuccess');
    $input.classList.remove('glowError');
  }
}

function removeGlow($input, jqXhr) {
  if($input) {
    $input.classList.remove('glowSuccess');
    $input.classList.remove('glowError');
  }
}

function addError($input, jqXhr) {
  jqXhr.json().then((json) => {
    addErrorJson($input, jqXhr, json);
  });
}

function addErrorJson($input, jqXhr, json) {
  if($input) {
    $input.classList.remove('glowSuccess');
    $input.classList.add('glowError');

    if(jqXhr) {
      $input.parentNode.querySelector('.alertPopup').setAttribute('variant', 'danger');
      $input.parentNode.querySelector('.alertPopup').innerText = jqXhr.status + ' ' + jqXhr.statusText;
      $input.parentNode.active = true;
      $input.parentNode.querySelector('.alertPopup').innerText += " " + JSON.stringify(json);
    }
  }
}

function paramChange(classSimpleName, input, div) {
  if(input.value)
    div.innerText = input.getAttribute('data-var') + "=" + encodeURIComponent(input.value);
  else
    div.innerText = "";
  searchPage(classSimpleName);
}

function qChange(classSimpleName, input, div) {
  if(input.value)
    div.innerText = "q=" + input.getAttribute('data-var') + ":" + encodeURIComponent(input.value);
  else
    div.innerText = "";
  searchPage(classSimpleName);
}

function fqChange(classSimpleName, elem, success, error) {
  if(elem.value)
    document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "fq=" + elem.getAttribute('data-var') + ":" + encodeURIComponent(elem.value);
  else
    document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "";
  searchPage(classSimpleName, success, error);
}

function fqReplace(classSimpleName, elem, success, error) {
  var $fq = document.querySelector('#fq' + elem.getAttribute('data-class') + '_' + elem.getAttribute('data-var'));
  $fq.value = elem.getAttribute('data-val');
  fqChange(classSimpleName, $fq, success, error);
}

function facetFieldChange(classSimpleName, elem) {
  if(elem.getAttribute("data-clear") === "false") {
    document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "facet.field=" + elem.getAttribute('data-var');
    elem.setAttribute("data-clear", "true");
  } else {
    document.querySelector("#pageSearchVal-" + elem.getAttribute("id")).innerText = "";
    elem.setAttribute("data-clear", "false");
  }
  searchPage(classSimpleName);
}

function sort(classSimpleName, sortVar, sortOrder) {
  var $listHidden = document.querySelector("#pageSearchVal-pageSort-" + classSimpleName);
  if(sortOrder == '' || !sortOrder) {
    $listHidden.querySelectorAll('#pageSearchVal-pageSort-' + classSimpleName + "-" + sortVar).forEach(child => {
      $listHidden.removeChild(child); 
    });
  } else {
    $listHidden.querySelectorAll('#pageSearchVal-pageSort-' + classSimpleName + "-" + sortVar).forEach(child => {
      $listHidden.removeChild(child); 
    });
    var div = document.createElement("div");
    div.setAttribute("id", "pageSearchVal-pageSort-" + classSimpleName + "-" + sortVar);
    div.setAttribute("class", "pageSearchVal pageSearchVal-pageSort-" + classSimpleName);
    div.innerText = "sort=" + encodeURIComponent(sortVar) + " " + sortOrder;
    $listHidden.appendChild(div);
  }
  searchPage(classSimpleName);
}

function facetSimpleRange(e, success, error) {
  var simpleRangeId = e.detail.item.value;
  var classSimpleName = e.target.getAttribute('data-classSimpleName');
  var facetRangeGapVal = document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value;
  var timeZone = document.querySelector("#pageFacetRangeTimeZoneInput").value;
  if(simpleRangeId.startsWith('last-minutes-')) {
    var match = simpleRangeId.match(/^[^-]+-[^-]+-([^-]+)-([^-]+)$/);
    var amount = parseInt(match[1]);
    var unit = match[2];
    var end = moment().clone().tz(timeZone);
    var start = end.clone().subtract(amount, unit);
    var facetRangeStartVal = start.format('YYYY-MM-DDTHH:mm');
    var facetRangeEndVal = end.format('YYYY-MM-DDTHH:mm');
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName + "-input").value = facetRangeStartVal;
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName + "-input").value = facetRangeEndVal;
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value = '+1MINUTE';
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(facetRangeStartVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(facetRangeEndVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "facet.range.gap=" + encodeURIComponent(document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value);
    searchPage(classSimpleName, success, error);
  } else if(simpleRangeId.startsWith('last-hours-')) {
    var match = simpleRangeId.match(/^[^-]+-[^-]+-([^-]+)-([^-]+)$/);
    var amount = parseInt(match[1]);
    var unit = match[2];
    var end = moment().clone().tz(timeZone);
    var start = end.clone().subtract(amount, unit);
    var facetRangeStartVal = start.format('YYYY-MM-DDTHH:mm');
    var facetRangeEndVal = end.format('YYYY-MM-DDTHH:mm');
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName + "-input").value = facetRangeStartVal;
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName + "-input").value = facetRangeEndVal;
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value = '+1HOUR';
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(facetRangeStartVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(facetRangeEndVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "facet.range.gap=" + encodeURIComponent(document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value);
    searchPage(classSimpleName, success, error);
  } else if(simpleRangeId.startsWith('last-days-')) {
    var match = simpleRangeId.match(/^[^-]+-[^-]+-([^-]+)-([^-]+)$/);
    var amount = parseInt(match[1]);
    var unit = match[2];
    var end = moment().clone().tz(timeZone);
    var start = end.clone().subtract(amount, unit);
    var facetRangeStartVal = start.format('YYYY-MM-DDTHH:mm');
    var facetRangeEndVal = end.format('YYYY-MM-DDTHH:mm');
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName + "-input").value = facetRangeStartVal;
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName + "-input").value = facetRangeEndVal;
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value = '+1DAY';
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(facetRangeStartVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(facetRangeEndVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "facet.range.gap=" + encodeURIComponent(document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value);
    searchPage(classSimpleName, success, error);
  } else if(simpleRangeId.startsWith('last-weeks-')) {
    var match = simpleRangeId.match(/^[^-]+-[^-]+-([^-]+)-([^-]+)$/);
    var amount = parseInt(match[1]);
    var unit = match[2];
    var end = moment().clone().tz(timeZone);
    var start = end.clone().subtract(amount, unit);
    var facetRangeStartVal = start.format('YYYY-MM-DDTHH:mm');
    var facetRangeEndVal = end.format('YYYY-MM-DDTHH:mm');
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName + "-input").value = facetRangeStartVal;
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName + "-input").value = facetRangeEndVal;
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value = '+1WEEK';
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(facetRangeStartVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(facetRangeEndVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "facet.range.gap=" + encodeURIComponent(document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value);
    searchPage(classSimpleName, success, error);
  } else if(simpleRangeId.startsWith('last-month-')) {
    var match = simpleRangeId.match(/^[^-]+-[^-]+-([^-]+)-([^-]+)$/);
    var amount = parseInt(match[1]);
    var unit = match[2];
    var end = moment().clone().tz(timeZone);
    var start = end.clone().subtract(amount, unit);
    var facetRangeStartVal = start.format('YYYY-MM-DDTHH:mm');
    var facetRangeEndVal = end.format('YYYY-MM-DDTHH:mm');
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName + "-input").value = facetRangeStartVal;
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName + "-input").value = facetRangeEndVal;
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value = '+1MONTH';
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(facetRangeStartVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(facetRangeEndVal + ":00.000[" + timeZone + "]");
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "facet.range.gap=" + encodeURIComponent(document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value);
    searchPage(classSimpleName, success, error);
  }
}

function facetRangeTimeZone(e, success, error) {
  var $list = document.querySelector('#' + e.target.getAttribute('data-list'));
  var $popup = document.querySelector('#' + e.target.getAttribute('data-popup'));
  var classSimpleName = e.target.getAttribute('data-classSimpleName');
  var timeZone = e.target.value;
  var filters = [ { 'name': 'q', 'value': 'objectSuggest:' + e.target.value }
      , { 'name': 'rows', 'value': '10' }
      , { 'name': 'fl', 'value': 'id,abbreviation,location,name,displayPage,objectTitle' } ];
  var success2 = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      if(data.list) {
        data.list.forEach((o, i) => {
          var dropdownItem = document.createElement('wa-dropdown-item');
          dropdownItem.innerText = o.objectTitle;
          dropdownItem.setAttribute('data-href', o.displayPage);
          $list.appendChild(dropdownItem);
          dropdownItem.addEventListener('click', (event) => {
            e.target.value = o.location;
            $list.innerHTML = '';
            $popup.active = false;
            document.querySelector("#pageSearchVal-pageFacetRangeTimeZone-" + classSimpleName).innerText = "var=defaultZoneId:" + encodeURIComponent(document.querySelector("#pageFacetRangeTimeZoneInput").value);
            searchPage(classSimpleName, success, error);
          });
        });
        $popup.active = true;
      }
    }
  };
  error = function( jqXhr, target2 ) {};
  fetch(
    '/en-us/api/time-zone?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success2(json, e.target);
        })
      } else {
        error(response, e.target);
      }
    })
    .catch(response => error(response, e.target));
}

function facetRangeGapChange(classSimpleName, elem, success, error) {
  var facetRangeGapVal = document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value;
  if(facetRangeGapVal) {
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "facet.range.gap=" + encodeURIComponent(document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName + "-input").value);
  } else {
    document.querySelector("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).innerText = "";
  }
  searchPage(classSimpleName, success, error);
}

function facetRangeStartChange(classSimpleName, elem, success, error) {
  var $facetRangeStart = document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName + "-input");
  var facetRangeStartVal = $facetRangeStart.value;
  if(facetRangeStartVal) {
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "facet.range.start=" + encodeURIComponent(facetRangeStartVal + ":00.000[" + timeZone + "]");
  } else {
    document.querySelector("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).innerText = "";
  }
  searchPage(classSimpleName, success, error);
}

function facetRangeEndChange(classSimpleName, elem, success, error) {
  var $facetRangeEnd = document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName + "-input");
  var facetRangeEndVal = $facetRangeEnd.value;
  if(facetRangeEndVal) {
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "facet.range.end=" + encodeURIComponent(facetRangeEndVal + ":00.000[" + timeZone + "]");
  } else {
    document.querySelector("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).innerText = "";
  }
  searchPage(classSimpleName, success, error);
}

function facetRangeChange(classSimpleName, facetRangeVal) {
  if(facetRangeVal) {
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelector("#pageSearchVal-pageFacetRangeVar-" + classSimpleName).innerText = "facet.range={!tag=r1}" + encodeURIComponent(facetRangeVal);
  } else {
    document.querySelector("#pageSearchVal-pageFacetRangeVar-" + classSimpleName).innerText = "";
  }
  searchPage(classSimpleName);
}

function facetPivotChange(classSimpleName, elem) {
  var $listHidden = document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "Hidden");
  if(elem.checked) {
    var div = document.createElement("div");
    div.setAttribute("id", "pageSearchVal-Pivot" + classSimpleName + "Hidden_" + elem.value);
    div.setAttribute("class", "pageSearchVal-Pivot" + classSimpleName + "Hidden ");
    div.innerText = elem.value;
    $listHidden.appendChild(div);
  } else {
    document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "Hidden_" + elem.value)?.remove();
  }
  document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "_1")?.remove();
  var $list = document.querySelector("#pageSearchVal-Pivot" + classSimpleName);
  var $listHidden = document.querySelector("#pageSearchVal-Pivot" + classSimpleName + "Hidden");
  if($listHidden.hasChildNodes()) {
    var pivotVal = '';
    Array.from($listHidden.children).forEach((index, pivotElem) => {
      if(pivotVal)
        pivotVal += ",";
      pivotVal += pivotElem.innerText;
    });
    var div = document.createElement("div");
    div.setAttribute("id", "pageSearchVal-Pivot" + classSimpleName + "_1")
    div.setAttribute("class", "pageSearchVal pageSearchVal-Pivot" + classSimpleName + " ")
    div.innerText = "facet.pivot={!range=r1}" + pivotVal;
    $list.appendChild(div);
  }
  searchPage(classSimpleName);
}

function facetFieldListChange(classSimpleName, elem) {
  var $listHidden = document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "Hidden");
  if(elem.checked) {
    var div = document.createElement("div");
    div.setAttribute("id", "pageSearchVal-FieldList" + classSimpleName + "Hidden_" + elem.value);
    div.setAttribute("class", "pageSearchVal-FieldList" + classSimpleName + "Hidden ");
    div.innerText = elem.value;
    $listHidden.appendChild(div);
  } else {
    document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "Hidden_" + elem.value)?.remove();
  }
  document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "_1").remove();
  var $list = document.querySelector("#pageSearchVal-FieldList" + classSimpleName);
  var $listHidden = document.querySelector("#pageSearchVal-FieldList" + classSimpleName + "Hidden");
  if($listHidden.children().length > 0) {
    var div = document.createElement("div");
    div.setAttribute("id", "pageSearchVal-FieldList" + classSimpleName + "_1");
    div.setAttribute("class", "pageSearchVal pageSearchVal-FieldList" + classSimpleName + " ");
    div.innerText = "fl=" + $listHidden.children().toArray().map(elem => elem.innerText).join(",");
    $list.append(div);
  }
  searchPage(classSimpleName);
}

function facetStatsChange(classSimpleName, value, show) {
  var $list = document.querySelector("#pageSearchVal-Stats" + classSimpleName);
  if(show) {
    var div = document.createElement("div");
    div.setAttribute("id", "pageSearchVal-Stats" + classSimpleName + "_" + value);
    div.setAttribute("class", "pageSearchVal pageSearchVal-Stats" + classSimpleName + "_" + value + " ");
    div.innerText = "stats.field=" + value;
    $list.append(div);
  } else {
    document.querySelector("#pageSearchVal-Stats" + classSimpleName + "_" + value)?.remove();
  }
  searchPage(classSimpleName);
}

function searchPage(classSimpleName, success, error) {
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};
  var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
  var uri = location.pathname + queryParams;
  fetch(uri).then(response => {
    response.text().then((body) => {
      //var template = document.createElement("template");
      //template.innerHTML = body.substring(body.indexOf("<body"), body.indexOf("</html>"));
      var templateStr = body.substring(body);
      var template = new DOMParser().parseFromString(body, "text/html");
      //var template = document.createElement("<template>" + body.substring(body.indexOf("<body"), body.indexOf("</html>")) + "</template>");
      document.querySelectorAll('.pageFacetField').forEach((facetField, index) => {
        facetField.replaceWith(template.querySelector("." + facetField.getAttribute("id")));
      });
      document.querySelectorAll('.pageStatsField').forEach((statsField, index) => {
        statsField.replaceWith(template.querySelector("." + statsField.getAttribute("id")));
      });
      document.querySelector(".pageContent").replaceWith(template.querySelector(".pageContent"));
      window['pageGraph' + classSimpleName](classSimpleName)
      success(document.querySelector(".pageContent"));
    });
  });
  window.history.replaceState('', '', uri);
}

function searchEscapeQueryChars(s) {
  var sb = "";
  for (let i = 0; i < s.length; i++) {
    var c = s[i];
    // These characters are part of the query syntax and must be escaped
    if (c == '\\' || c == '+' || c == '-' || c == '!' || c == '(' || c == ')' || c == ':' || c == '^'
        || c == '[' || c == ']' || c == '\"' || c == '{' || c == '}' || c == '~' || c == '*' || c == '?'
        || c == '|' || c == '&' || c == ';' || c == '/' || /\s/.test(c)) {
      sb += '\\';
    }
    sb += c;
  }
  return sb;
}

///*
//jQuery deparam is an extraction of the deparam method from Ben Alman's jQuery BBQ
//http://benalman.com/projects/jquery-bbq-plugin/
//*/
function deparam(params, coerce) {
  var obj = [],
    coerce_types = { 'true': !0, 'false': !1, 'null': null };
  
  // Iterate over all name=value pairs.
  params.replace(/\+/g, ' ').split('&').forEach(function (v,j) {
    var param = v.split('='),
        key = decodeURIComponent(param[0]),
        val,
        cur = obj,
        i = 0,
  
        // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
        // into its component parts.
        keys = key.split(']['),
        keys_last = keys.length - 1;
  
    // Basic 'foo' style key.
    keys_last = 0;
  
    // Are we dealing with a name=value pair, or just a name?
    if (param.length === 2) {
      val = decodeURIComponent(param[1]);
  
      // Coerce values.
      if (coerce) {
        val = val && !isNaN(val)              ? +val              // number
            : val === 'undefined'             ? undefined         // undefined
            : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
            : val;                                                // string
      }
  
      // Simple key, even simpler rules, since only scalars and shallow
      // arrays are allowed.
  
      // val is a scalar.
      obj.push({name: key, 'value': val});
    } else if (key) {
      // No value was defined, so set something meaningful.
      obj.push({name: key, value: (coerce ? undefined : '')});
    }
  });

return obj;
}

function quoteattr(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only 
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
        ;
}
//
//function unpack(rows, key) {
//    return rows.map(function(row) { return row[key]; });
//}
//

function imgToDialog(target) {
  var h = this.previousElementSibling;
  var dialog = document.createElement('wa-dialog');
  dialog.setAttribute('label', target.getAttribute('alt'));
  dialog.setAttribute('style', '--width: 80vw; --height: 80vh; ');
  dialog.setAttribute('open', 'true');
  dialog.setAttribute('light-dismiss', 'true');
  var stack = document.createElement('div');
  stack.classList.add('wa-stack');
  stack.classList.add('wa-align-items-center');
  dialog.append(stack);
  var img = document.createElement('img');
  img.setAttribute('src', target.getAttribute('src'));
  stack.append(img);
  dialog.addEventListener('wa-after-hide', event => {
    event.target.remove();
  });
  target.after(dialog);
}

function populateDashboardDataQuery(panelId, urls, queries, timeQuery) {
  // Populate range information
  var $rangeTable = document.getElementById(panelId + '-data-range-table');
  if ($rangeTable && timeQuery) {
    var $tbody = $rangeTable.querySelector('tbody');
    $tbody.innerHTML = '';
    var rangeItems = [
      { label: 'Start', value: timeQuery.timeZone ? moment.tz(timeQuery.start, timeQuery.timeZone).format('YYYY-MM-DD HH:mm:ss') : timeQuery.start }
      , { label: 'End', value: timeQuery.timeZone ? moment.tz(timeQuery.end, timeQuery.timeZone).format('YYYY-MM-DD HH:mm:ss') : timeQuery.end }
      , { label: 'Step', value: timeQuery.step }
      , { label: 'Time Zone', value: timeQuery.timeZone || 'UTC' }
    ];
    rangeItems.forEach((item) => {
      var $tr = document.createElement('tr');
      $tbody.append($tr);

      var $th = document.createElement('th');
      $th.innerText = item.label;
      $th.style.textAlign = 'left';
      $th.style.paddingRight = '2rem';
      $tr.append($th);

      var $td = document.createElement('td');
      $td.innerText = item.value;
      $tr.append($td);
    });
  }

  // Populate query links
  var $linksUl = document.getElementById(panelId + '-data-links-ul');
  if ($linksUl) {
    $linksUl.innerHTML = '';
    urls.forEach((url, i) => {
      var query = queries[i];

      var $linkLi = document.createElement('li');
      $linksUl.append($linkLi);

      var $linkA = document.createElement('a');
      $linkA.setAttribute('href', url);
      $linkA.setAttribute('target', '_blank');
      $linkA.innerText = query;
      $linkLi.append($linkA);
    });
  }
}

// Convert Bytes to human readable data format
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024;
  var sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

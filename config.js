{
    "configurationSettings": [{
            "category": "<b>General Settings</b>",
            "fields": [{
                    "type": "string",
                    "fieldName": "theme",
                    "tooltip": "Color theme to use",
                    "label": "Color Scheme:",
                    "options": [{
                            "label": "Blue",
                            "value": "blue"
                        }, {
                            "label": "Gray",
                            "value": "gray"
                        }, {
                            "label": "Green",
                            "value": "green"
                        }, {
                            "label": "Orange",
                            "value": "orange"
                        }, {
                            "label": "Purple",
                            "value": "purple"
                        }
                    ]
                }, {
                    "type": "boolean",
                    "fieldName": "displaytitle",
                    "label": "Show Title",
                    "tooltip": ""
                }, {
                    "type": "string",
                    "fieldName": "title",
                    "label": "Title Text:",
                    "tooltip": "",
                    "placeHolder": "Defaults to map name"
                }, {
                    "type": "string",
                    "fieldName": "customlogoimage",
                    "tooltip": "Url for image",
                    "placeHolder": "URL to image",
                    "label": "Logo on map:"
                }, {
                    "type": "boolean",
                    "fieldName": "displayoverviewmap",
                    "label": "Include Overview Map",
                    "tooltip": ""
                }
            ]
        }, {
            "category": "<b>Menu Items</b>",
            "fields": [{
                    "type": "boolean",
                    "fieldName": "displaylegend",
                    "label": "Legend *",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displaydetails",
                    "label": "Details *",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displayeditor",
                    "label": "Editor *",
                    "tooltip": "Display editor if web map contains feature service layer"
                }, {
                    "type": "boolean",
                    "fieldName": "displaytimeslider",
                    "label": "Time Slider *",
                    "tooltip": "Display time slider for time enabled web map"
                }, {
                    "type": "boolean",
                    "fieldName": "displayprint",
                    "label": "Print",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displaylayerlist",
                    "label": "Layer List *",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displaybasemaps",
                    "label": "Basemaps",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displaybookmarks",
                    "label": "Bookmarks",
                    "tooltip": "Display the read-only bookmarks contained in the web map."
                }, {
                    "type": "boolean",
                    "fieldName": "displaymeasure",
                    "label": "Measure",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displayshare",
                    "label": "Share",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "displayelevation",
                    "label": "Elevation",
                    "tooltip": "Display an elevation profile for a measured line. Note the measure tool must be displayed."
                }, {
                    "type": "boolean",
                    "fieldName": "showelevationdifference",
                    "label": "Show Elevation Difference",
                    "tooltip": "When true elevation gain and loss is show from the first location to the location under the cursor/finger."
                }, {
                    "type": "boolean",
                    "fieldName": "displaysearch",
                    "label": "Search",
                    "tooltip": ""
                }, {
                    "type": "boolean",
                    "fieldName": "searchextent",
                    "label": "Search for locations within current extent",
                    "tooltip": "Search for locations only within the current extent"
                }, {
                    "type": "paragraph",
                    "value": "* These menu items will appear in the application when the web map has layers that require them."
                }
            ]
        }, {
            "category": "<b>Print Settings</b>",
            "fields": [{
                    "type": "string",
                    "fieldName": "printlayout",
                    "tooltip": "Select Layout Option",
                    "label": "Layout:",
                    "options": [{
                            "label": "Map Only",
                            "value": "MAP_ONLY"
                        }, {
                            "label": "A3 Landscape",
                            "value": "A3 Landscape"
                        }, {
                            "label": "A3 Portrait",
                            "value": "A3 Portrait"
                        }, {
                            "label": "A4 Landscape",
                            "value": "A4 Landscape"
                        }, {
                            "label": "A4 Portrait",
                            "value": "A4 Portrait"
                        }, {
                            "label": "Letter ANSI A Landscape",
                            "value": "Letter ANSI A Landscape"
                        }, {
                            "label": "Letter ANSI A Portrait",
                            "value": "Letter ANSI A Portrait"
                        }, {
                            "label": "Letter ANSI B Landscape",
                            "value": "Letter ANSI B Landscape"
                        }, {
                            "label": "Letter ANSI B Portrait",
                            "value": "Letter ANSI B Portrait"
                        }
                    ]
                }, {
                    "type": "string",
                    "fieldName": "printformat",
                    "label": "Select Format",
                    "tooltip": "Print Format Options",
                    "options": [{
                            "label": "PDF",
                            "value": "pdf"
                        }, {
                            "label": "PNG 32",
                            "value": "png32"
                        }, {
                            "label": "PNG 8",
                            "value": "png8"
                        }, {
                            "label": "JPG",
                            "value": "jpg"
                        }, {
                            "label": "GIF",
                            "value": "gif"
                        }, {
                            "label": "EPS",
                            "value": "eps"
                        }, {
                            "label": "SVG",
                            "value": "svg"
                        }, {
                            "label": "SVGZ",
                            "value": "svgz"
                        }
                    ]
                }
            ]
        }
    ],
    "values": {
        "theme": "gray",
        "searchextent": false,
        "displaymeasure": "true",
        "displayshare": "true",
        "displayoverviewmap": "true",
        "displayeditor": "true",
        "displaytimeslider": "true",
        "displayprint": "true",
        "displaysearch": "true",
        "displaylegend": "true",
        "displaydetails": "true",
        "displaylayerlist": "true",
        "displaybasemaps": "true",
        "displayelevation": false,
        "showelevationdifference": false,
        "printlayout": "A3 Landscape",
        "printformat": "PNG32"
    }
}
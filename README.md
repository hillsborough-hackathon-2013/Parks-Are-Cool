Parks-Are-Cool
==============

The Problem (Why):
    Too few people go to Hillsborough County parks.  Even fewer people appreciate what surrounds them when they are there.
    While at a park, questions arise about the natural features and facilities.
    Even worse, problems are noticed but not reported and so more people leave their park experience less than satisfied.
    While planning a trip to a park it is difficult to find and compile accurate, relevant and motivating information.

The Solution (What):
    Step 1: A tool for educators (teachers) and the public to learn about their local parks - ecology, soil, flora, fauna, trails, amenities, etc. - and create a report depicting a map of the park with details about the locations they wish to visit.  A variation of the report is in the "scavenger hunt" to give students an interactive experience in nature's classroom.  The idea is that educators will bring the students who will in turn bring their parents and spread the appreciation for this valuable resource - our parks.
    Step 2: A phone app for the public to explore the park they are in, search for a park to visit, share their experience via social channels and report issues/problems directly to county officials.
    Result - 2-way park experience, keeping more people in Hillsborough Country and bringing others from Florida and beyond to experience the rich blending of technology, information and nature.

    Step 1 is the result of the 48 hour hack-a-thon and is what is committed in this repository.

When:
    April 12-14, 2013

Where:
    Hillsborough County Hack-a-thon at HCC

Who:
    Idea, design and development - Carolyn Borton, Sunshine Learning Systems
    Website Design - Uy Le
    Layer pop-up configuration - James Zebrowski

How:
    Map layers provided by Hillsborough County
    Map configuration (layers and popups) performed in arcgis.com and stored in an esri webmap
    Custom programming in javascript (with dojo library) for the build-a-visit and report generation features
    Logo and color scheme from Hillsborough County website.
    Additional research into park information from http://www.hillsboroughcounty.org and http://www.tampagov.net

Installation:
    Web server (windows or linux)
    FTP the application files to the folder at the site root
        EXCEPT .idea folder and the readme files
    If large queries are needed, install an appropriate proxy (PHP or ASP.NET) from ESRI and set the "proxyurl" in index.html.
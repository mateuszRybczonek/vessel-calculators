# vessel-calculators

First application created by me before starting my training in infoShare Academy. 

Application helps user with calculations required before / during rig moves and setting up properly dynamic positioning (DP) system.

1. Rig Move Calculator - calculation required for safe planning and execution of rig move. Allows user to add waypoints, calculate ETA and passage duration between the waypoints based on a planned velocity of the vessel. Draws chart showing the planned passage and prepares a report that might be hardcoppied in the files for future reference.

2. TAT Verification - provides guidance for the DP operator during the array preparation stage. Allow identification of possible clashing situations and provide a tool to mitigate the hazard. During the operation using LBL system in CIF (Common Interrogation Frequency) mode vessel’s hydroacoustic unit is sending and interrogation signal to all beacons at the same time. Beacons after receiving the interrogation signal will reply on their own IRF (Individual Reply Frequency). In this way, provided that replies at the vessel’s unit do not conflict in time, the transceiver can analyse multiple replies individually and without any ambiguity. As the travel time of the signal is a function of slant range and sound velocity in the water there is a possibility that the signal from two beacons will arrive at the vessel’s unit at the same time causing interference (signals clashing).  o resolve that problem user can set a TAT (Turn-Around-Time) for each beacon. In simple words TAT is an amount of time that beacon will wait after receiving the interrogation signal before it send a reply signal.

3. LBL Array Planning - application used for planning the distribuition of underwater acoustic beacons array. Calculates the position of each beacon in the array taking as an input, planned position of the vessel, constant vertical angle of sight, angle threshold (precision of beacons positioning on the bottom), start angle (bearing to the first beacon in the array). Application allows to create two arrays simultaniously (primary array and backup array).

Each part of application allows user to save data in *.csv format for future reference and archive.

The application look very raw and "barbarian" but it was created with HTML, CSS and pure JavaScript (no jQuery, Angular JS or any other library / frameworks).

Version 2.0 will come soon with much better interface, interaction and UX :)

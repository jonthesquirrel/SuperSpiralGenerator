Super Spiral Generator Scripts - Created by inHaze

This is a set of special WorldEdit craftscripts I put together that will allow you to quickly create in game custom spirals and 3d patterns of any size, shape, or material you like.

I created these after playing around with manually building spirals before with the WorldEdit mod and figured there was a more efficient/automatic way of doing it. So I started messing around with some ideas till I came up with this set of three scripts.


Download, command info and installation instructions - http://bit.ly/SuperSpiral
Other projects, and maps I have created - http://bit.ly/inHaze

Tutorial Video - http://www.youtube.com/watch?v=LcHahVQ5KjI
Demo Video - http://www.youtube.com/watch?v=djHj5zriwKk



Commands/Scripts

(All these commands require a copied worldedit selection before using.)

Cylinder Spiral Generator

/cs spiral  - Brings up the argument list.
/cs spiral 0 - Creates spiral with default settings.
/cs spiral radius, coil, count, dFlag, hFlag  - Generate with custom settings. (exclude commas)

radius - Base radius for the spiral. (1+)
coil - Amount of coil compression. (1-10)
count - Number of coil segments generated. (1+)
dFlag - Double spiral - 1; Single Spiral - 0
hFlag- Alignment: Horizontal - 1; Vertical - 0


Conical Spiral Generator

/cs spiralc  - Brings up the argument list.
/cs spiralc 0 - Creates spiral with default settings.
/cs spiralc gap, coil, count, dFlag, hFlag, fFlag  - Generate with custom settings.  (exclude commas)

gap - Gap separating radial sections. (.1 - 5)
coil - Amount of coil compression. (1-10)
count - Number of coil segments generated. (1+)
dFlag - Double spiral - 1; Single Spiral - 0
hFlag- Alignment: Horizontal - 1; Vertical - 0
fFlag - Alignment: Flipped - 2; Normal - 1; Flat - 0


Paste Block Replacer (Requires an active selection of blocks to use as a paste pattern)

/cs replaceme blockID - Pastes the copied blocks based on the points of blockID in the current selection.

blockID - The item ID of the block used as the pattern for pasting in the selection.



Installation/Setup

Singleplayer

1) Install the SinglePlayerCommands mod which comes with WorldEdit.
2) Open your main "%appdata%/.minecraft" folder up. (The one with bin and saves folder)
3) Copy the downloaded, unzipped folder "craftscripts" into it, merging with existing folder if necessary.
4) From the .minecraft folder navigate to the mods folder then to the sppcomands folder.
5) Find the worldedit.properties file and open with any text editor.
6) Go to the line that reads "scripting-timeout=" and change the value to 30000.
7) Save the file and close all folders, open Minecraft and test it out with the command "/cs spiral".

Multiplayer - Untested                      *You must own/have access to server files to install scripts.

1) Install WorldEdit plugin on the server.
2) Not 100% sure about the rest... these scripts haven't been tested on a server, but they should work.
3) Again, unsure, but I would try copying the craftscripts folder to the main server directory or worldedit folder.
4) If any server owner can confirm/deny this or give me proper instructions it would be appreciated.



Errors/Troubleshooting

Problem: I can't type at all.
Fix: Singleplayercommands isn't working, trying re installing from a fresh minecraft.jar.

Problem: Error Message "Failed to find an installed script engine." when using script.
Fix: Go here, download the Rhino Zip file. Unzip it and copy the included js.jar to your "/.minecraft/bin" folder.
(http://www.mozilla.org/rhino/download.html)

Problem: Error Message "Script does not exist .../.minecraft/craftscripts/spiral.js" when using script.
Fix: Worldedit can't find the script in the craftscripts folder, make sure you copied it to the "/.minecraft" folder.

Problem: Error Message "Your clipboard is empty. Use //copy first." when using script.
Fix: Just like it says, you need to select and copy a set of blocks first, using the worldedit wand.

If there are other problems you come across make sure to let me know.

(There are some know issues with creating really large spirals, it can be worked around but requires modifying the script. I will likely fix this in a later version.)

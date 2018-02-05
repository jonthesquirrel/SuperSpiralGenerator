/*
 * Cylinder Spiral Generator CraftScript for WorldEdit
 * Copyright (C) 2011 inHaze <http://bit.ly/inHaze>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

importPackage(Packages.com.sk89q.worldedit);
importPackage(Packages.com.sk89q.worldedit.blocks);

if (argv.length < 2)  {
	
	player.print(" ");
	player.print("Cylinder Spiral Generator Script by inHaze");
	player.print(" ");
	player.print("Useage:");
	player.print("/cs spiral <radius><coil><count><dFlag><hFlag>");
	player.print(" ");
	player.print("radius - Spiral radius size(1+)");
	player.print("coil - Amount of coil compression(1-10)");
	player.print("count - Number of coil segments generated(1+)");
	player.print("dFlag - Double spiral - 1; Single - 0");
	player.print("hFlag - Alignment: Horizontal - 1; Vertical - 0");
	player.print(" ");
	player.print("Use '/cs spiral 0' to generate with default settings.");
}


if (argv.length > 1)  {
	var radius = argv.length > 1 ? (argv[1]) : 5;
	var compress = argv.length > 2 ? (argv[2]) : 3;
	var coilCnt = argv.length > 3 ? (argv[3]) : 3;
	var dFlag = argv.length > 4 ? (argv[4]) : 0;
	var hFlag = argv.length > 5 ? (argv[5]) : 0;

	radius = radius > 0 ? radius : 5;
	compress = compress == 0 ? 1 : compress;

	var session = context.remember();
	var origin = player.getPosition();
	var cb = context.getSession().getClipboard();
	cb.copy(session);

	var points = 64;
	var slice = 2 * Math.PI / points;
	var pt;
	var loopCnt = 0;
	
	for (var i = 0; i < (points * coilCnt); i++)
	{
		var angle = slice * i;
		var newX = (radius * Math.cos(angle));
		var newY = (radius * Math.sin(angle));
		var newZ = (i/compress);
		
		if (hFlag == 1) {
			var pt = origin.add(newX, newY, newZ);
			if (dFlag == 1)  {
				var pt2 = origin.add((-newX), (-newY), newZ);
			}
		}
		if (hFlag != 1) {
			var pt = origin.add(newX, newZ, newY);
			if (dFlag == 1)  {
				var pt2 = origin.add((-newX), (newZ), (-newY));
			}
		}
		cb.paste(session, pt, true);
		if (dFlag == 1)  {
			cb.paste(session, pt2, true);
		}
		loopCnt++;
	}
	player.print("New spiral generated with " + loopCnt + " points!  -  [" + radius + ", " + compress + ", " + coilCnt + ", " + dFlag + ", " + hFlag + "]");
}


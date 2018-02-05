/*
 * Paste Replacer CraftScript for WorldEdit
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

var editX = context.getSession();
var session = context.remember();
var world = context.getSession().getSelectionWorld();
var region = context.getSession().getSelection(world);

var vecBase = Vector(); 
var rSize = 25;

context.checkArgs(1, 1, "<block>");
var bType = new BaseBlock(2);
var bType = context.getBlock(argv[1]);

var cb = context.getSession().getClipboard();
var sel = editX.getSelection(editX.getSelectionWorld());


/* OLD CODE BASED ON AREA AROUND PLAYER
for (var x = (-1*(rSize)); x <= rSize; x++) {
    for (var y = (-1*(rSize)); y <= rSize; y++) {
        for (var z = (-1*(rSize)); z <= rSize; z++) {
			var origin = player.getBlockIn();
            var pt = origin.add(x, y, z);
            var id = session.getBlockType(pt);
            
            if (id == 4) {

				//player.print("id=" + id + " x=" + (pt.getX()) + " y=" + (pt.getY()) + " z=" + (pt.getZ()));
				cb.paste(session, pt, true);
                                
            }
        }
    }
}
*/

var origin = player.getBlockIn();
var loopCnt = 0;

for ( var x = 0; x < region.getWidth(); x++ ) {
    for (var y = 0; y < region.getHeight(); y++ ) {
        for ( var z = 0; z < region.getLength(); z++) {
            var vec = new Vector(
                region.getMinimumPoint().getX() + x,
                region.getMinimumPoint().getY() + y,
                region.getMinimumPoint().getZ() + z
                );
            var pt = origin.add(x, y, z);
            var id = session.getBlock(vec);
			
			if ((id.getType()) == (bType.getType()))  {
				cb.paste(session, pt, true);
				loopCnt++;
			}
		}
    }
}

player.print("Pasted over " + bType + " at " + loopCnt + " locations!");






"use client"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} 
from "@/components/ui/menubar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { StarRating } from "@/components/ui/star"


export default function MenubarDemo() {

  return (
    <section className=" flex flex-col justify-center items-center w-full h-screen bg-gray-500">
        <header className="flex w-full ">
            <Menubar className="w-full bg-black text-white">
            <MenubarMenu>
                <MenubarTrigger>User</MenubarTrigger>
                <MenubarContent>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                        <MenubarGroup>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                        </MenubarGroup>
                    </MenubarSubContent>
                    </MenubarSub>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                <MenubarGroup>
                    <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                        <MenubarGroup>
                        <MenubarItem>Search the web</MenubarItem>
                        </MenubarGroup>
                        <MenubarSeparator />
                        <MenubarGroup>
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                        </MenubarGroup>
                    </MenubarSubContent>
                    </MenubarSub>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent className="w-44">
                <MenubarGroup>
                    <MenubarCheckboxItem>Bookmarks Bar</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>Full URLs</MenubarCheckboxItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem inset>Edit...</MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                    <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
            </Menubar>
        </header>
            <div className="flex items-center justify-center h-full w-full   ">
                <form className="flex flex-row items-center bg-black w-250 h-120 rounded-lg ">
                    <AspectRatio ratio={16 / 9} className="w-60 justify-start h-full rounded-lg bg-muted"></AspectRatio>
                    <div className="h-80 rounded-50"></div>
                    <div className="relative size-32 flex flex-col relative static items-center justify-center h-full m-12 mt-15 ">
                        <Textarea className="flex absolute top-30 left-110 h-50 w-180 p-2 bg-transparent rounded-md text-white" placeholder="Digite seu Comentário..."/>
                        <StarRating value={0} onChange={() => {}}/>
                    </div>
                </form>
            </div>
    </section>
  )
}

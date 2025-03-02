"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[862],{1286:e=>{e.exports=JSON.parse('{"functions":[{"name":"Create","desc":"Creates a new typed observer with the specified name.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Event<T>\\n"}],"function_type":"static","source":{"line":123,"path":"libraries/observer/Source/init.lua"}},{"name":"Get","desc":"Gets an existing observer or creates a new one if it doesn\'t exist.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Event<T>\\n"}],"function_type":"static","source":{"line":139,"path":"libraries/observer/Source/init.lua"}}],"properties":[],"types":[{"name":"Event<T>","desc":"Represents an event that can be subscribed to and triggered.","fields":[{"name":"Subscribe","lua_type":"(callback: (T) -> ()) -> T","desc":"Returns the subscription id"},{"name":"Unsubscribe","lua_type":"(id: number) -> ()","desc":"Unsubscribes the callback"},{"name":"Set","lua_type":"(value: T) -> ()","desc":"Sets the value of the event"},{"name":"Get","lua_type":"() -> T?","desc":"Gets the value of the event"},{"name":"Clear","lua_type":"() -> ()","desc":"Clears the value of the event"},{"name":"Destroy","lua_type":"() -> ()","desc":"Destroys the event"}],"source":{"line":14,"path":"libraries/observer/Source/init.lua"}}],"name":"Observer","desc":"- Wally Package: [Observer](https://wally.run/package/naxious/observer)\\n\\nA typed observer that notifies subscribers when its value changes.\\n\\nHere\'s an example of how to use the Observer class:\\n`Setup Event Module`\\n```lua\\nlocal Observer = require(path.to.Observer)\\n\\nlocal events = {\\n\\t[\\"PlayerDamaged\\"] = Observer.Create(\\"PlayerDamaged\\") :: Observer.Event<number>,\\n\\t[\\"MorningTime\\"] = Observer.Create(\\"PlayerJoined\\") :: Observer.Event<string>,\\n}\\n\\nreturn events\\n```\\n`Subscribe to an Event in any Module`\\n```lua\\nlocal events = require(path.to.Events)\\n\\nevents.MorningTime:Subscribe(function(morningString: string)\\n\\tif morningString == \\"Good Morning\\" then\\n\\t\\tprint(`{morningString}! It\'s a awesome day!`)\\n\\telseif morningString == \\"Bad Morning\\" then\\n\\t\\tprint(`{morningString}! It\'s what we get when it rains!`)\\n\\tend\\nend)\\n\\nevents.PlayerDamaged:Subscribe(function(damage: number)\\n\\tprint(`Player took {damage} damage!`)\\n\\tplayer:ShakeScreen() -- example function\\n\\tparticles:SpawnBlood(player.Position) -- example function\\nend)\\n```\\n`Set the Event Value in any Module`\\n```lua\\nlocal events = require(path.to.Events)\\n\\nevents.MorningTime:Set(\\"Good Morning\\")\\n\\nwhile player:IsStandingInFire() do\\n\\tevents.PlayerDamaged:Set(10)\\nend\\n```","source":{"line":117,"path":"libraries/observer/Source/init.lua"}}')}}]);
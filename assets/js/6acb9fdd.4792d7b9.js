"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[862],{1286:e=>{e.exports=JSON.parse('{"functions":[{"name":"Create","desc":"Creates a new typed observer with the specified name.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Event<T>\\n"}],"function_type":"static","source":{"line":85,"path":"libraries/observer/Source/init.lua"}},{"name":"Get","desc":"Gets an existing observer or creates a new one if it doesn\'t exist.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Event<T>\\n"}],"function_type":"static","source":{"line":101,"path":"libraries/observer/Source/init.lua"}}],"properties":[],"types":[],"name":"Observer","desc":"- Wally Package: [Syscore](https://wally.run/package/naxious/syscore)\\n\\nA typed observer that notifies subscribers when its value changes.\\n\\nHere\'s an example of how to use the Observer class:\\n```lua\\nlocal Observer = require(path.to.Observer)\\n\\nlocal observerEvent = Observer.client.example\\n\\nlocal id = observerEvent:Subscribe(function(value: string)\\n\\tprint(\\"Value changed to\\", value)\\nend)\\n\\nobserverEvent:Set(\\"Hello, world!\\") -- Value changed to Hello, world!\\n\\nobserverEvent:Unsubscribe(id)\\n```","source":{"line":79,"path":"libraries/observer/Source/init.lua"}}')}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[676],{54:e=>{e.exports=JSON.parse('{"functions":[{"name":"AddFolderOfModules","desc":"Requires all modules that are direct children of the folder.\\n\\n```lua\\nlocal Syscore = require(path.to.Syscore)\\nlocal folder = game:GetService(\\"ReplicatedStorage\\").Modules\\n\\nSyscore:AddFolderOfModules(folder)\\n```","params":[{"name":"folder","desc":"","lua_type":"Folder"}],"returns":[],"function_type":"method","source":{"line":213,"path":"libraries/syscore/Source/init.lua"}},{"name":"AddModule","desc":"Add a module to be initialized.\\n\\n```lua\\nlocal Syscore = require(path.to.Syscore)\\nlocal module = require(path.to.module)\\n\\nSyscore:AddModule(module)\\n```","params":[{"name":"module","desc":"","lua_type":"ModuleScript"}],"returns":[],"function_type":"method","source":{"line":236,"path":"libraries/syscore/Source/init.lua"}},{"name":"AddTableOfModules","desc":"Add a table of modules to be initialized.\\n\\n```lua\\nlocal Syscore = require(path.to.Syscore)\\nlocal modules = {\\n\\trequire(path.to.module1),\\n\\trequire(path.to.module2),\\n\\trequire(path.to.module3),\\n}\\n\\nSyscore:AddTableOfModules(modules)\\n```","params":[{"name":"systems","desc":"","lua_type":"{ ModuleScript }"}],"returns":[],"function_type":"method","source":{"line":261,"path":"libraries/syscore/Source/init.lua"}},{"name":"Start","desc":"Initializes all modules based on their priority.\\nReturns a table of errors that occured during initialization.\\n\\n```lua\\nlocal ReplicatedStorage = game:GetService(\\"ReplicatedStorage\\")\\n\\nlocal Syscore = require(path.to.Syscore)\\nSyscore:AddFolderOfModules(ReplicatedStorage.ModulesFolder)\\nSyscore:Start()\\n```","params":[],"returns":[{"desc":"","lua_type":"{ [string]: { { system: Syscore, response: string } } }\\n"}],"function_type":"method","source":{"line":288,"path":"libraries/syscore/Source/init.lua"}}],"properties":[{"name":"ShowLoadOrder","desc":"Determines whether or not to show the load order of your modules when initializing them.\\nThis debug print is useful for debugging purposes.\\nDefault, this is set to true.\\n```lua\\nlocal Syscore = require(path.to.Syscore)\\nSyscore.ShowLoadOrder = true\\n```","lua_type":"boolean","tags":["Boolean"],"source":{"line":90,"path":"libraries/syscore/Source/init.lua"}}],"types":[],"name":"Syscore","desc":"- Wally Package: [Syscore](https://wally.run/package/naxious)\\n\\nSyscore is a module that allows you to easily manage the initialization of your modules in a specific order.\\nThis is useful for when you have modules that depend on each other and need to be initialized in a specific order.\\nYou can enable/disable debug mode to see the load order of your modules.\\n\\n`Any module that you have can be loaded with Syscore!`\\n\\nIf you have a Init() method in your module, Syscore will call it when initializing your module.\\nIf you do not have an Init() method, Syscore will skip it.\\n\\nYou can also specfiy a Prioty, Name, and Icon for your module.\\nThis is useful for debugging purposes.\\n\\nHere is a few examples of how a module could look like with Syscore:\\n```lua\\nlocal module = {\\n\\tName = \\"Module1\\",\\n\\tPriority = 1,\\n\\tIcon = \\"\ud83d\ude01\\"\\n}\\n\\nfunction module:Init()\\n\\tprint(\\"Module1 initialized!\\")\\nend\\n\\nreturn module\\n```\\n\\n```lua\\nlocal module = {}\\nmodule.Priority = 2\\n\\nreturn module\\n```\\n\\n```lua\\nlocal module = {}\\n\\nreturn module\\n```\\n\\nHere is an example of how to use Syscore to initialize a folder of modules:\\n```lua\\nlocal Syscore = require(path.to.Syscore)\\nlocal folder = game:GetService(\\"ReplicatedStorage\\").Modules\\n\\nSyscore:AddFolderOfModules(folder)\\nSyscore:Start()\\n```\\n\\n:::note\\n\\tWhen using Syscore you will need to require it from a local script, or server script.\\n\\tOnce you have added all of your modules, you can call `Syscore:Start()` to initialize them.\\n:::","source":{"line":76,"path":"libraries/syscore/Source/init.lua"}}')}}]);